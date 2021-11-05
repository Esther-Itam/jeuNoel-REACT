import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loading from '../../pictures/loading.gif';
import LARAVEL_SERVER from '../Variable';

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
        axios.get(`${LARAVEL_SERVER}/teamPresentation`)
            .then(res => {this.setState({teams:res.data.data})
                          this.setState({conditions:res.data.data.length})
                  })
            .catch(error => {console.log(error.response)})

        axios.get(`${LARAVEL_SERVER}/categorie`)
        .then(res => {this.setState({categories:res.data.data})
        console.log(res.data.data)})
        .catch(error => {console.log(error.response)})  
         
    }
 

handleSubmit = event =>{
    event.preventDefault()
    console.log("colonne is_used des couleurs updatée")
    axios.put(`${LARAVEL_SERVER}/color`, {is_used:0})
        .then(res => {this.setState(console.log(res))})
        .catch(error =>{console.log(error.response)}) 
}
    
    render(){

        return(
            <div className="containerTeamBuilding">
            <div className="containerTeam">
                    <h1 className="text-center my-5">Voici les équipes qui s'affrontent</h1>
                    <div className="containerRulers">
                    <h4>Les lutins ont perdu 60 🎁 dans le jeu, celui qui leur rapporte sera le grand vainqueur!</h4>
                    <h4>Il y a 10 🎁 par catégorie à trouver</h4>
                    </div>
                    {this.state.conditions <2
                    ?
                    <>
                    <div className="containerConditions">
                    <h2>Il faut un minimum de 2 joueurs pour commencer la partie</h2>
                    <h3>Attendez qu'un joueur rejoigne la partie!</h3>
                    </div>
                    <div>
                        {this.state.teams.map((team)=>
                        <div className="containerAvatarPresentation">
                            <div className="containerAvatarPresentationTitle">
                            <div className="avatar_button" style={{backgroundImage:`url(${team.avatar})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
                            <h2 style={{color:team.color.color}}>L'équipe {team.name}</h2>
                        </div>
                        </div>
                        )}
                    </div>
                    <img src={loading} alt="" width="800px"/>
                    </>
                    :
               
                    <>
                        {this.state.teams.map((team)=>
                        <div className="containerAvatarPresentation">
                            <div className="containerAvatarPresentationTitle">
                            <div className="avatar_button" style={{backgroundImage:`url(${team.avatar})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
                            <h2 style={{color:team.color.color}}>L'équipe {team.name}</h2>
                        </div>
                        </div>
                        )}
                        <div className="containerButtonGame">
                        <button type="button" class="buttonGame" onClick={this.handleSubmit} value={0}><Link className="link" to="/startGame">GO!</Link></button>                 
                        </div>
                    </>               
                    }
            </div>
            </div>
        )
    }
}

  
export default TeamPresentation;