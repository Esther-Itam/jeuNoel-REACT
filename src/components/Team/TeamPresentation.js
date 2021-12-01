import { Link } from 'react-router-dom';
import axios from 'axios';
import loading from '../../pictures/loading.gif';
import LARAVEL_SERVER from '../Variable';
import { useAppContext } from '../../Context';
import React, { useState, useEffect} from 'react';

function TeamPresentation() {

const { state, dispatch } = useAppContext();
const [teams, setTeams]=useState([]);
const [conditions, setConditions]=useState([]);
 

useEffect(() => {
axios.get(`${LARAVEL_SERVER}/teamPresentation`)
.then(res => {
    
    setTeams(res.data.data);
    setConditions(res.data.data.length);
},1000)
},[]);

const handleSubmit = event =>{
    event.preventDefault()
    console.log("colonne is_used des couleurs updatée")
    axios.put(`${LARAVEL_SERVER}/color`, {is_used:0})
        .then(res => {console.log(res)})
        .catch(error =>{console.log(error.response)}) 
}
    
    return(
        <div className="containerTeamBuilding">
            <div className="containerTeam">
                <h1 className="text-center my-5">Voici les équipes qui s'affrontent</h1>
                <div className="containerRulers">
                    <h4>Les lutins ont perdu 60 🎁 dans le jeu, celui qui leur rapporte sera le grand vainqueur!</h4>
                    <h4>Il y a 10 🎁 par catégorie à trouver</h4>
                </div>
                {conditions <2
                ?
                <>
                <div className="containerConditions">
                    <h2>Il faut un minimum de 2 joueurs pour commencer la partie</h2>
                    <h3>Attendez qu'un joueur rejoigne la partie!</h3>
                </div>
                <div>
                {state.teams.map((team)=>
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
                {state.teams.map((team)=>
                    <div className="containerAvatarPresentation">
                        <div className="containerAvatarPresentationTitle">
                            <div className="avatar_button" style={{backgroundImage:`url(${team.avatar})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
                            <h2 style={{color:team.color.color}}>L'équipe {team.name}</h2> 
                        </div>
                    </div>
                )}
                    <div className="containerButtonGame">
                        <button type="button" class="buttonGame" onClick={handleSubmit} value={0}><Link className="link" to="/startGame">GO!</Link></button>                 
                    </div>
                </>               
                }
            </div>
        </div>
    )
}

  
export default TeamPresentation;