import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import ButtonCategorieUsed from '../Buttons/ButtonCategorieUsed';

class CategorieShowScreen extends React.Component{

    render(){
        return(
            <>
                <NavbarTeam/>
                <ButtonCategorieUsed idCategorie={this.props.match.params.id}/>
            </>
        )
    }
}

export default CategorieShowScreen;