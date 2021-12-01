import React from 'react';
import FormCreateTeam from '../Forms/FormCreateTeam';
import { Redirect } from 'react-router';


class TeamBuilding extends React.Component{
   

    render(){
        if(!localStorage.getItem('token')){
            return(<Redirect to="/"/>)
        }
        return(
            <>
                <div className='containerTeamBuilding'>
                
                <div className="containerTeam">
                <h2 className="text-center my-5">Création de l'équipe</h2>
                <FormCreateTeam/>
                </div>
                </div>
               
            </>
        )
    }
}

export default TeamBuilding;