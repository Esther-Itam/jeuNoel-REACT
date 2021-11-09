import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import ButtonRandom from '../Buttons/ButtonRandom';

class StartGame extends React.Component{

    render(){
        return(
            <>
                <NavbarTeam/>
                <ButtonRandom/>
            </>
        )
    }
}

export default StartGame;