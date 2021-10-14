import React from 'react';
import Navbar from '../Navbar/Navbar';
import FormLogin from '../Forms/FormLogin';

class LoginScreen extends React.Component{

    render(){
        return(
            <>
                <Navbar/>
                <FormLogin/>
            </>
        )
    }
}

export default LoginScreen;