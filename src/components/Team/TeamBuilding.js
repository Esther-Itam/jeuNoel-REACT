import React from 'react';
import Navbar from '../Navbar/Navbar';
import FormCreateTeam from '../Forms/FormCreateTeam';


class TeamBuilding extends React.Component{


    render(){

        return(
            <>
                <div className="container w-50">
                <h2 className="text-center my-5">Création de l'équipe</h2>
                <FormCreateTeam/>
                </div>
            </>
        )
    }
}

export default TeamBuilding;