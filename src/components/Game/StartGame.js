import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import Random from './Random';

class StartGame extends React.Component{
    constructor(props){
        super(props)
        this.state={
  
            errors:[]
        }
    }



    render(){
        return(
            <>
                <NavbarTeam/>
                <div class="container w-50">
                 <Random/>

                <div>
                   
                </div>
                </div>
            </>
        )
    }
}

export default StartGame;