import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import Navbar from '../Navbar/Navbar';

class Login extends React.Component{
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

        axios.get('http://127.0.0.1:8000/api/index')
            .then(res => {
                this.setState({users:res.data.data})
                console.log(res.data.data.id)
    
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    componentWillMount(){
        if(localStorage.getItem('token')){
            this.setState({redirect:true})
        }
    }

    handleEmailChange= event=>{
        this.setState({email: event.target.value}, ()=>{
            console.log(this.state)
        })
    }
    handlePasswordChange= event=>{
        this.setState({password: event.target.value}, ()=>{
            console.log(this.state)
        })
    }
    handleSubmit = event =>{
        event.preventDefault()
        console.log("connexion")
        let bodyFormData = new FormData();
        bodyFormData.set('email', this.state.email)
        bodyFormData.set('password', this.state.password)

        axios.post('http://127.0.0.1:8000/api/login', bodyFormData)
             .then(res=>{
                    console.log(res.data)
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
           
                <Navbar/>
           
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
                    
                    <button type="submit" className="btn btn-danger">Se connecter</button>
                </form>
                </div>
            </>
        )
    }
}

export default Login;