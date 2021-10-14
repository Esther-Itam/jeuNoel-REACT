import React from 'react';
import Navbar from '../Navbar/Navbar';
import FormUpdate from '../Forms/FormUpdate';

class AccountScreen extends React.Component{

    render(){
        return(
            <>
                <Navbar/>
                <FormUpdate idUser = {this.props.match.params.id}/>
            </>
        )
    }
}

export default AccountScreen;