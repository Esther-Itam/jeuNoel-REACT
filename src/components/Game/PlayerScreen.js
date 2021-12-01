import React from 'react';
import Navbar from '../Navbar/Navbar';
import ButtonPlayer from '../Buttons/ButtonPlayer';
import { Redirect } from 'react-router';


class PlayerScreen extends React.Component{

    render(){
        if(!localStorage.getItem('token')){
            return(<Redirect to="/"/>)
        }
        return(
            <>
                <Navbar/>
                <ButtonPlayer/>
            </>
        )
    }
}

export default PlayerScreen;