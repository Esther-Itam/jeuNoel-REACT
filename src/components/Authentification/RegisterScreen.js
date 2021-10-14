import React from 'react';
import Navbar from '../Navbar/Navbar';
import FormRegister from '../Forms/FormRegister';

class RegisterScreen extends React.Component{

    render(){
        return(
            <>
               <Navbar/>
               <FormRegister/>
            </>
        )
    }
}

export default RegisterScreen;