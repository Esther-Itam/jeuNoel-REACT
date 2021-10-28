import React from 'react';
import gifAttente from '../../pictures/gifAttente.webp';
import NavbarTeam from '../Navbar/NavbarTeam';

class WaitingScreen extends React.Component{

    render(){
        return(
            <>
                <NavbarTeam/>
                <div class="containerQuiz">
                <div class="containerTeamRandom">
                    <h2>En attendant que l'équipe choississe la catégorie, on se détend!</h2>
                    <img src={gifAttente} alt="" swidth="800px"/>
                </div>
                </div>
            </>
        )
    }
}

export default WaitingScreen;