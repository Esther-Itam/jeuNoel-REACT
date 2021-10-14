import React from 'react';
import Navbar from '../../Navbar/Navbar';
import FormCreateCategorie from '../../Forms/FormCreateCategorie';

class CreateCategorieScreen extends React.Component{

    render(){
        return(
            <>
            <Navbar/>
            <FormCreateCategorie/>
            </>
        )
    }
}

export default CreateCategorieScreen;