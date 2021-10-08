import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import Random from './Random';

class StartGame extends React.Component{

    render(){
        return(
            <>
                <NavbarTeam/>
                <div class="container w-50">
                 <Random/>

                </div>
  
            </>
        )
    }
}

export default StartGame;