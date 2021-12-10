import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import TeamContinueGame from './TeamContinueGame';


class TeamContinueGameScreen extends React.Component{

    render(){

        return(
            <>
             <NavbarTeam/>
            <TeamContinueGame/>
            </>
           
        )
    }
}

  
export default TeamContinueGameScreen;