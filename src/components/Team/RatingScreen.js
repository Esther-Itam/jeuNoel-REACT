import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import ButtonReplay from '../Buttons/ButtonReplay';
import ButtonLeave from '../Buttons/ButtonLeave';
import TableResult from '../Tables/TableResult';


class RatingScreen extends React.Component{

    render(){
        return(
            <>
                <NavbarTeam/>
                <div  className="containerCategorie">
                    <div>
                        <h1>Classement final des équipes</h1>
                        <TableResult/>  
                    </div>
                    <div>
                        <ButtonReplay/>   
                        <ButtonLeave/> 
                    </div>
                </div>
            </>
        )
    }
}

export default RatingScreen;