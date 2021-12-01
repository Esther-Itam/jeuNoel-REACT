import React from 'react';
import Navbar from '../../Navbar/Navbar';
import CategorieUpdate from './CategorieUpdate';


function CategorieUpdateScreen(){

    return(
    <>
        <Navbar/>
        <CategorieUpdate id={this.props.match.params.id}/>
    </>
        )
}

export default CategorieUpdateScreen;