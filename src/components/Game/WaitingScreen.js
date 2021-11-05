import React from 'react';
import gifAttente from '../../pictures/gifAttente.webp';
import NavbarTeam from '../Navbar/NavbarTeam';
import { useAppContext } from '../../Context';
import { Redirect } from 'react-router';


function WaitingScreen(){
    const { state, dispatch } = useAppContext();
  

        return(
            <>
                <NavbarTeam/>
                <div class="containerQuiz">
                <div class="containerTeamRandom">
                    <h2>En attendant que l'équipe choisisse la catégorie, on se détend!</h2>
                    <img src={gifAttente} alt="" swidth="800px"/>   
                </div>
                </div>
                { state.categories
                ?
                <>
                {state.categories.map((categorie)=>
                    <Redirect className="linkGame" to={`/categorieShow/${categorie.categorieId}`}/>
                    )}
                </>
                :
                null
            }
            </>
        )
}

export default WaitingScreen;