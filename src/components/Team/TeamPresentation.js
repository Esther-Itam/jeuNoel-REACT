import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loading from '../../pictures/loading.gif';



class TeamPresentation extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            teams:[],
            conditions:[],
            categories:[]

        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/teamPresentation')
            .then(res => {this.setState({teams:res.data})})
            .catch(error => {console.log(error.response)})
            
        axios.get('http://127.0.0.1:8000/api/teamPresentation')
            .then(res => {this.setState({conditions:res.data.length})})
            .catch(error => {console.log(error.response)})

        axios.get('http://127.0.0.1:8000/api/categorie')
        .then(res => {this.setState({categories:res.data.data})
    console.log(res.data.data)})
        .catch(error => {console.log(error.response)})            
    }
 

handleSubmit = event =>{
    event.preventDefault()
    console.log("colonne is_used des couleurs updatée")
    axios.put('http://127.0.0.1:8000/api/color', {is_used:0})
        .then(res => {this.setState(console.log(res))})
        .catch(error =>{console.log(error.response)}) 
}
    
    render(){

        return(

            <div className="container w-50">
                    <h2 className="text-center my-5">Voici les équipes qui s'affrontent</h2>
                    <h5>Les lutins ont perdu 60 🎁 dans le jeu, celui qui leur rapporte sera le grand vainqueur!</h5>
                    <p>Il y a 10 🎁 par catégorie à trouver</p>
                    {this.state.conditions <2
                    ?
                    <>
                    <h3>Il faut un minimum de 2 joueurs pour commencer la partie</h3>
                    <h5>Attendez qu'un joueur rejoigne la partie!</h5>
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
                        {this.state.teams.map((team)=>
                        <div>
                            <h5 style={{color:team.color.color}}>{team.name}</h5>
                            <div className="avatar_button" style={{backgroundImage:`url(${team.avatar})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
                        </div>
                        )}
                        <button type="button" class="btn btn-success" onClick={this.handleSubmit} value={0}><Link className="link" to="/startGame">Commencer la partie</Link></button>                 
                    </>               
                    }
            </div>
        )
    }
}

  
export default TeamPresentation;