import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import TeamPresentation from './TeamPresentation';

class TeamPresentationScreen extends React.Component{
 
    render(){

        return(
            <>
                <NavbarTeam/>
                <TeamPresentation/>
            </>
        )
    }
}

  
export default TeamPresentationScreen;