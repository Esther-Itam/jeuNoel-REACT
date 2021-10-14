import React from 'react';
import Navbar from '../Navbar/Navbar';
import TeamBuilding from './TeamBuilding';


class TeamBuildingScreen extends React.Component{


    render(){

        return(
            <>
                <Navbar/>
                <TeamBuilding/>
            </>
        )
    }
}

export default TeamBuildingScreen;