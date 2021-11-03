import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import ButtonStandard from '../Buttons/ButtonStandard';
import LARAVEL_SERVER from '../Variable';

class FormLogin extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            redirect:false,
            errors:[],
            users:[]
        }
    }
componentDidMount(){
    axios.get(`${LARAVEL_SERVER}/index`)
        .then(res => {this.setState({users:res.data.data})})
        .catch(error => {console.log(error.response)})
}

componentWillMount(){
    if(localStorage.getItem('token')){
        this.setState({redirect:true})
    }
}

handleEmailChange= event=>{this.setState({email: event.target.value}, ()=>{})}
handlePasswordChange= event=>{this.setState({password: event.target.value}, ()=>{})}

handleSubmit = event =>{
    event.preventDefault()
    console.log("connexion")
    let bodyFormData = new FormData();
    bodyFormData.set('email', this.state.email)
    bodyFormData.set('password', this.state.password)

    axios.post(`${LARAVEL_SERVER}/login`, bodyFormData)
            .then(res=>{
                localStorage.setItem('token', res.data.api_token)
                this.setState({redirect:true})
            })  
            .catch(error =>{
                if(error.response.status === 401){
                    this.setState({errors: error.response.data.errors}, ()=>{
                        console.log(this.state)
                    })
                }
                console.log(error.response)
            })
}
    render(){
        if(this.state.redirect){
            return(<Redirect to="/player"/>)
        }

        return(
            <>
              <div className="containerBodyLogin">
               <div className="container w-50">
                   <h2 className="text-center my-5">Connexion</h2>
                <form method="POST" onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input onChange={this.handleEmailChange} type="email" className={`form-control ${this.state.errors && this.state.errors.email ? "is-invalid" : ""}`} id="email"/>
                        {this.state.errors && this.state.errors.email ? <div className="text-danger invalide-feedback">{this.state.errors['email']}</div> : ''}
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Mot de passe</label>
                        <input onChange={this.handlePasswordChange} type="password" className={`form-control ${this.state.errors && this.state.errors.password ? "is-invalid" : ""}`} id="password"/>
                        {this.state.errors && this.state.errors.password ? <div className="text-danger invalide-feedback">{this.state.errors['password']}</div> : ''}
                    </div> 
                    {this.state.errors && this.state.errors === "bad_credentials" ? <div className="alert alert-warning">Vos identifiants de connexion sont incorrects</div> : ""}
                    
                    <ButtonStandard text={"Se connecter"}/>
                </form>
                </div>
                </div>
            </>
        )
    }
}

export default FormLogin;