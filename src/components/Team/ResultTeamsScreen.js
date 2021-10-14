import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import ResultTeams from './ResultTeams';


class ResultTeamsScreen extends React.Component{

    render(){
        return(
            <>
                <NavbarTeam/>
                <ResultTeams/>
            </>
        )
    }
}

export default ResultTeamsScreen;