import React from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import ButtonColor from '../Game/ButtonColor';


class TeamBuilding extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            errors:[],
            colors:[],
            color:'',
            avatar:'',
            avatars:[],
            teams:[],
            clicked1:false,
            clicked2:false,
            clicked3:false,
            clicked4:false
            
        }
    }
 componentDidMount(){

    axios.get('http://127.0.0.1:8000/api/color')
        .then(res => {
            this.setState({colors:res.data.data})
            console.log(res.data.data)
        })
        .catch(error => {
            console.log(error.response)
        })
    axios.get('http://127.0.0.1:8000/api/avatar')
    .then(res => {
        this.setState({avatars:res.data})

    })
    .catch(error => {
        console.log(error.response)
    })
    axios.get('http://127.0.0.1:8000/api/teamPresentation')
        .then(res => {
            this.setState({teams:res.data})
           
        })
        .catch(error => {
            console.log(error.response)
        }) 
        axios.post('http://127.0.0.1:8000/api/teamBuilding')
        .then(res => {
            this.setState({teams:res.data})
           
        })
        .catch(error => {
            console.log(error.response)
        })    
}
  


handleSubmit2 = event =>{
    event.preventDefault()
    console.log("team créée")

    let bodyFormData = new FormData();
    bodyFormData.set('name', this.state.name)
    bodyFormData.set('avatar', this.state.avatar)
    bodyFormData.set('color', this.state.color)

    let headers = {
        headers:{
               'API_TOKEN':localStorage.getItem('token') 
        }
    }
    axios.post('http://127.0.0.1:8000/api/teamBuilding', bodyFormData, headers)
        .then(res => {
            this.setState(console.log(res))
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

handleNameChange= event =>{
    this.setState({name: event.target.value}, ()=>{
        console.log(this.state)
    })
}

handleAvatarChange= event =>{
    this.setState({avatar: event.target.value}, ()=>{
        console.log(this.state)
    })
    
}
handleColorChange1= event =>{
    this.setState({color: event.target.value}, ()=>{
        console.log(this.state)
        this.setState({clicked1:true})
    
    })
    
}
handleColorChange2= event =>{
    this.setState({color: event.target.value}, ()=>{
        console.log(this.state)
        this.setState({clicked2:true})
    
    })
    
}
handleColorChange3= event =>{
    this.setState({color: event.target.value}, ()=>{
        console.log(this.state)
        this.setState({clicked3:true})
    
    })
    
}
handleColorChange4= event =>{
    this.setState({color: event.target.value}, ()=>{
        console.log(this.state)
        this.setState({clicked4:true})
    
    })
    
}

    render(){

        return(
            <>
                <Navbar/>
                
                
                <div className="container w-50">
                <h2 className="text-center my-5">Création de l'équipe</h2>
                <form method="POST" onSubmit={this.handleSubmit2}>
                    <div className="mb-3">
                        <label for="teamName" className="form-label" >Nom de l'équipe</label>
                        <input onChange={this.handleNameChange} type="text" className="form-control" id="teamName" aria-describedby="emailHelp" className={`form-control ${this.state.errors && this.state.errors.name ? "is-invalid" : ""}`}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Choisir l'avatar</label>
                        <div className="row justify-content-md-center">
                            <div className="col-9">
                        
                            {this.state.avatars.map((avatar)=>
                        
                                    <button className="avatar_button" onClick={this.handleAvatarChange} type="button" value={avatar.avatar} style={{backgroundImage:`url(${avatar.avatar})`,  backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></button>
                            
                            )}
                             </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Choisir la couleur de l'équipe</label>    
                                                                        
                    {this.state.colors.map((color)=>
                        <>
                        {color[0].colorUsed === 1
                        ?
                        <button className="color_button" type="button" style={{backgroundColor:"grey"}} disabled></button>
                        :
                        <button className="color_button" onClick={this.handleColorChange1} type="submit" style={{backgroundColor:color[0].colorName}} value={color[0].colorName}></button>

                        }
                        {color[1].colorUsed === 1
                        ?
                        <button className="color_button" type="button" style={{backgroundColor:"grey"}} disabled></button>
                        :
                        <button className="color_button" onClick={this.handleColorChange2} type="submit" style={{backgroundColor:color[1].colorName}} value={color[1].colorName}></button>

                        }
                        {color[2].colorUsed === 1
                        ?
                        <button className="color_button" type="button" style={{backgroundColor:"grey"}} disabled></button>
                        :
                        <button className="color_button" onClick={this.handleColorChange3} type="submit" style={{backgroundColor:color[2].colorName}} value={color[2].colorName}></button>

                        }
                        {color[3].colorUsed === 1
                        ?
                        <button className="color_button" type="button" style={{backgroundColor:"grey"}} disabled></button>
                        :
                        <button className="color_button" onClick={this.handleColorChange4} type="submit" style={{backgroundColor:color[3].colorName}} value={color[3].colorName}></button>

                        }
                        </>
                    )}
                    </div>
            </form>

{this.state.colors.map((color)=>
    <>
    {color.color="green" && this.state.clicked1
    ?
    <ButtonColor idColor={1}/>
    :
    null
    }
    {color.color="red" && this.state.clicked2
    ?
    <ButtonColor idColor={2}/>
    :
    null
    }
    {color.color="blue" && this.state.clicked3
    ?
    <ButtonColor idColor={3}/>
    :
    null
    }
    {color.color="yellow" && this.state.clicked4
    ?
    <ButtonColor idColor={4}/>
    :
    null
    }

</>
)}

                </div>
            </>
        )
    }
}

export default TeamBuilding;