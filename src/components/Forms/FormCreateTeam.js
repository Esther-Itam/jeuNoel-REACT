import React from 'react';
import axios from 'axios';
import ButtonAvatar from '../Buttons/ButtonAvatar';
import ColorCheckManagement from '../Team/ColorCheckManagement';
import ColorManagement from '../Team/ColorManagement';


class FormCreateTeam extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            errors:[],
            color:'',
            avatar:'',
            clicked1:false,
            clicked2:false,
            clicked3:false,
            clicked4:false
            
        }
    }

handleSubmit = event =>{
    event.preventDefault()
    console.log("team créée")

    let bodyFormData = new FormData();
    bodyFormData.set('name', this.state.name)
    bodyFormData.set('avatar', this.state.avatar)
    bodyFormData.set('color', this.state.color)
    let headers = {headers:{'API_TOKEN':localStorage.getItem('token')}}
    axios.post('http://127.0.0.1:8000/api/teamBuilding', bodyFormData, headers)
        .then(res => {this.setState(console.log(res))})
        .catch(error=>{
            if(error.response.status === 401){
                this.setState({errors: error.response.data.errors}, ()=>{
                    console.log(this.state)
                })
            }
        }) 
}

handleNameChange= event =>{this.setState({name: event.target.value}, ()=>{})}
handleAvatarChange= event =>{this.setState({avatar: event.target.value}, ()=>{})}
handleColorChange1= event =>{this.setState({color: event.target.value}, ()=>{this.setState({clicked1:true})})}
handleColorChange2= event =>{this.setState({color: event.target.value}, ()=>{this.setState({clicked2:true})})}
handleColorChange3= event =>{this.setState({color: event.target.value}, ()=>{this.setState({clicked3:true})})}
handleColorChange4= event =>{this.setState({color: event.target.value}, ()=>{this.setState({clicked4:true})})}


    render(){

        return(
            <>
                <form method="POST" onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="teamName" className="form-label" >Nom de l'équipe</label>
                        <input onChange={this.handleNameChange} type="text" className="form-control" id="teamName" aria-describedby="emailHelp" className={`form-control ${this.state.errors && this.state.errors.name ? "is-invalid" : ""}`}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Choisir l'avatar</label>
                        <div className="row justify-content-md-center">
                            <div className="col-12">
                           <ButtonAvatar onClickAvatar={this.handleAvatarChange}/>
                             </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Choisir la couleur de l'équipe</label> 
                        <div className="row justify-content-md-center">
                        <ColorManagement onClickColor={this.handleColorChange1} index={0}/> 
                        <ColorManagement onClickColor={this.handleColorChange2} index={1}/>                                        
                        <ColorManagement onClickColor={this.handleColorChange3} index={2}/>                                        
                        <ColorManagement onClickColor={this.handleColorChange4} index={3}/>  
                        </div>                                      
                    </div>
                </form>
                        <ColorCheckManagement color={"green"} checked={this.state.clicked1} idColor={1}/>
                        <ColorCheckManagement color={"red"} checked={this.state.clicked2} idColor={2}/>
                        <ColorCheckManagement color={"blue"} checked={this.state.clicked3} idColor={3}/>
                        <ColorCheckManagement color={"yellow"} checked={this.state.clicked4} idColor={4}/>    
            </>
        )
    }
}

export default FormCreateTeam;