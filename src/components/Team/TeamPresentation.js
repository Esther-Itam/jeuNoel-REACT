import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loading from '../../pictures/loading.gif';



class TeamPresentation extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            teams:[],
            conditions:[]

        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/teamPresentation')
            .then(res => {this.setState({teams:res.data})})
            .catch(error => {console.log(error.response)})
            
        axios.get('http://127.0.0.1:8000/api/teamPresentation')
        .then(res => {this.setState({conditions:res.data.length})})
        .catch(error => {console.log(error.response)})     
    }
 

handleSubmit = event =>{
    event.preventDefault()
    console.log("colonne is_used des couleurs updatée")

    axios.put('http://127.0.0.1:8000/api/color', {is_used:0})
        .then(res => {this.setState(console.log(res))})
        .catch(error =>{
            if(error.response.status === 401){
                this.setState({errors: error.response.data.errors}, ()=>{console.log(this.state)})
            }
            console.log(error.response)
        }) 
}
    
    render(){

        return(
            <>
                <NavbarTeam/>
                <div className="container w-50">
                <h2 className="text-center my-5">Voici les équipes qui s'affrontent</h2>
                {
                    this.state.conditions <2
                    ?
                    <>
                    <h3>Il faut un minimum de 2 joueurs pour commencer la partie</h3>
                    <h5>Attendez qu'un joueur rejoingne la partie!</h5>
                    <div>
                    {this.state.teams.map((team)=>
                    <div>
                    <h5 style={{color:team.color.color}}>{team.name}</h5>
                    <div className="avatar_button" style={{backgroundImage:`url(${team.avatar})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
                    </div>
                    )}
                </div>
                    <img src={loading} alt="" width="800px"/>

                    </>
                    :
                    <>
                     <div>
                    {this.state.teams.map((team)=>
                    <div>
                    <h5 style={{color:team.color.color}}>{team.name}</h5>
                    <div className="avatar_button" style={{backgroundImage:`url(${team.avatar})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
                    </div>
                    )}
                   <button type="button" class="btn btn-success" onClick={this.handleSubmit} value={0}><Link className="link" to="/startGame">Commencer la partie</Link></button>                 

                    </div>
                    </>    
                        }
               
               
                </div>
            </>
        )
    }
}

  
export default TeamPresentation;