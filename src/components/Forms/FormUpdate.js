import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import ButtonStandard from '../Buttons/ButtonStandard';

class FormUpdate extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            password:'',
            confirm_password:'',
            redirect:false, 
            errors:[],
            userInfos:[]
        }
    }
componentDidMount(){

    if(localStorage.getItem('token')){
        let id=localStorage.getItem('token')
        let headers={
            headers:{'API_TOKEN':localStorage.getItem('token')}}
            axios.get(`http://127.0.0.1:8000/api/show/${id}`, headers)
            .then(res=>{this.setState({userInfos:res.data.data[0]})})
            .catch(error=>{console.log(error.response)})   
    }else{
        this.setState({redirect:true})
    }
}

handleNameChange= event =>{this.setState({name: event.target.value}, ()=>{})}
handlePasswordChange= event =>{this.setState({password: event.target.value}, ()=>{})}
handleConfirmPasswordChange= event =>{this.setState({confirm_password: event.target.value}, ()=>{})}

handleSubmit = event =>{
    event.preventDefault()
    let id = this.props.idUser;
    let headers = {
        headers:{'API_TOKEN':localStorage.getItem('token')}
    }
        axios.put(`http://127.0.0.1:8000/api/update/${id}`, {headers, name:this.state.name, password:this.state.password, confirm_password:this.state.confirm_password})
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
            <div className="containerBody">
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
                   
                    <ButtonStandard text={"Modifier"}/>
                </form>
                </div>
                </div>
            </>
        )
    }
}

export default FormUpdate;