import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import Result from './Result';


class ResultScreen extends React.Component{

    render(){
     
        return(
            <>
                <NavbarTeam/>
                <Result/>
            </>
        )
    }
}

export default ResultScreen;