import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import Random from './Random';

class StartGame extends React.Component{

    render(){
        return(
            <>
                <NavbarTeam/>
                <Random/>
            </>
        )
    }
}

export default StartGame;