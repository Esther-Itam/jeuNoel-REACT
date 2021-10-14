import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import ButtonCategorie from '../Buttons/ButtonCategorie';

class CategoriesScreen extends React.Component{

    render(){
     
        return(
            <>
                <NavbarTeam/>
                <ButtonCategorie/>
            </>
        )
    }
}

export default CategoriesScreen;