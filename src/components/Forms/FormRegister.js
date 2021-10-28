import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import ButtonStandard from '../Buttons/ButtonStandard';

class FormRegister extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            password:'',
            confirm_password:'',
            redirect:false, 
            errors:[]
            
        }
    }
   
componentWillMount(){
    if(localStorage.getItem('token')){
        this.setState({redirect:true})
    }
}

handleNameChange= event =>{this.setState({name: event.target.value}, ()=>{})}
handleEmailChange= event =>{this.setState({email: event.target.value}, ()=>{})}
handlePasswordChange= event =>{this.setState({password: event.target.value}, ()=>{})}
handleConfirmPasswordChange= event =>{this.setState({confirm_password: event.target.value}, ()=>{})}

handleSubmit = event =>{
    event.preventDefault()
    console.log("inscription")
    let bodyFormData = new FormData();
    bodyFormData.set('name', this.state.name)
    bodyFormData.set('email', this.state.email)
    bodyFormData.set('password', this.state.password)
    bodyFormData.set('confirm_password', this.state.confirm_password)

    axios.post('http://127.0.0.1:8000/api/register', bodyFormData)
            .then(res=>{
                localStorage.setItem('token', res.data.data.api_token)
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
            return(<Redirect to="/login"/>)
        }

        return(
            <>
            <div className="containerBodyRegister">
               <div className="container w-50">
                   <h2 className="text-center my-5">Inscription</h2>
                <form method="POST"  onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label for="name" className="form-label">Pseudo</label>
                        <input onChange={this.handleNameChange} type="text" className={`form-control ${this.state.errors && this.state.errors.name ? "is-invalid" : ""}`} id="name"/>
                        {this.state.errors && this.state.errors.name ? <div className="text-danger invalide-feedback">{this.state.errors['name']}</div> : ''}
                    </div>
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
                    <div className="mb-3">
                        <label for="confirm_password" className="form-label">Confirmation du mot de passe</label>
                        <input onChange={this.handleConfirmPasswordChange} type="password" className={`form-control ${this.state.errors && this.state.errors.confirm_password ? "is-invalid" : ""}`} id="confirm_password"/>
                        {this.state.errors && this.state.errors.confirm_password ? <div className="text-danger invalide-feedback">{this.state.errors['confirm_password']}</div> : ''}
                    </div> 
                    <ButtonStandard text={"Enregister"}/>
                </form>
                </div>
                </div>
            </>
        )
    }
}

export default FormRegister;