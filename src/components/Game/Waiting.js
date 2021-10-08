import React from 'react';
import gifAttente from '../../pictures/gifAttente.webp';
import NavbarTeam from '../Navbar/NavbarTeam';

class Waiting extends React.Component{

    render(){
        return(
            <>
                <NavbarTeam/>
                <div class="container w-50">
                    <h2>En attendant que l'équipe choississe la catégorie, on se détend!</h2>
                <img src={gifAttente} alt="" swidth="800px"/>

                <div>
                   
                </div>
                </div>
            </>
        )
    }
}

export default Waiting;