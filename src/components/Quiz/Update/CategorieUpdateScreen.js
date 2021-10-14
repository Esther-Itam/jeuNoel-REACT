import React from 'react';
import Navbar from '../../Navbar/Navbar';
import CategorieUpdate from './CategorieUpdate';


class CategorieUpdateScreen extends React.Component{

render(){

    return(
    <>
        <Navbar/>
        <CategorieUpdate id={this.props.match.params.id}/>
    </>
        )
    }
}

export default CategorieUpdateScreen;