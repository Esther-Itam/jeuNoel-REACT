import React from 'react';
import Navbar from '../Navbar/Navbar';
import FormUpdate from '../Forms/FormUpdate';
import { Redirect } from 'react-router';

class AccountScreen extends React.Component{

    render(){
        if(!localStorage.getItem('token')){
            return(<Redirect to="/"/>)
        }
        return(
            <>
                <Navbar/>
                <FormUpdate idUser = {this.props.match.params.id}/>
            </>
        )
    }
}

export default AccountScreen;