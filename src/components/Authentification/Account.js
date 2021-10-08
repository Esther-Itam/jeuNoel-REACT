import React, { Fragment } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import Navbar from '../Navbar/Navbar';

class Account extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            password:'',
            confirm_password:'',
            redirect:false, 
            errors:[],
            userInfos:[],
            userId:0
        }
    }
    componentDidMount(){

        if(localStorage.getItem('token')){
            let id=localStorage.getItem('token')
           let headers={
               headers:{'API_TOKEN':localStorage.getItem('token')}}
               axios.get(`http://127.0.0.1:8000/api/show/${id}`, headers)
               .then(res=>{this.setState({userInfos:res.data.data[0]})
               })
               .catch(error=>{
                   console.log(error.response)
               })
          
        }else{
            this.setState({redirect:true})
        }
    }

    handleNameChange= event =>{
        this.setState({name: event.target.value}, ()=>{
            console.log(this.state)
        })
    }
    handleEmailChange= event =>{
        this.setState({email: event.target.value}, ()=>{
            console.log(this.state)
        })
    }
    handlePasswordChange= event =>{
        this.setState({password: event.target.value}, ()=>{
            console.log(this.state)
        })
    }
    handleConfirmPasswordChange= event =>{
        this.setState({confirm_password: event.target.value}, ()=>{
            console.log(this.state)
        })
    }
handleSubmit = event =>{
    event.preventDefault()
    let id = this.props.match.params.id;
    let headers = {
        headers:{
               'API_TOKEN':localStorage.getItem('token') 
        }
    }
        axios.put(`http://127.0.0.1:8000/api/update/${id}`, {headers, name:this.state.name, email:this.state.email, password:this.state.password, confirm_password:this.state.confirm_password})
        .then(res=>{ console.log(res.data)
                    this.setState({redirect:true})
                })
        .catch(error=>{
            if(error.response.status === 401){
                this.setState({errors: error.response.data.errors}, ()=>{
                    console.log(this.state)
                })
            }
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
                   <h2 className="text-center my-5">Modification des données du compte</h2>
                <form method="PUT" onSubmit={this.handleSubmit}>
                {this.state.userInfos.map((userInfo)=>
                <>
                    <div className="mb-3">
                        <label for="name" className="form-label">Pseudo</label>
                        <input onChange={this.handleNameChange} type="text" className={`form-control ${this.state.errors && this.state.errors.name ? "is-invalid" : ""}`} id="name" placeholder={userInfo.userName}/>
                        {this.state.errors && this.state.errors.name ? <div className="text-danger invalide-feedback">{this.state.errors['name']}</div> : ''}
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input onChange={this.handleEmailChange} type="email" className={`form-control ${this.state.errors && this.state.errors.email ? "is-invalid" : ""}`} id="email" placeholder={userInfo.userEmail}/>
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
                </>
                )}
                    <button type="submit" className="btn btn-danger">Modifier</button>
                </form>
                </div>
            </>
        )
    }
}

export default Account;