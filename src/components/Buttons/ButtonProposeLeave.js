import React from 'react';
import ButtonReplay from '../Buttons/ButtonReplay';
import ButtonLeave from '../Buttons/ButtonLeave';
import { Link } from 'react-router-dom';

class ButtonProposeLeave extends React.Component{
 
    render(){

        return(
            <div  className="containerResultFinalGame">
                <div  className="containerProposeLeave">
                <h1>Ne te laisse pas impressionner, reviens jouer! Tu peux encore sauver Noël!!!</h1>
                <div className="containerButtonProposeLeave">
                <Link type="button" className="linkStandardContinue" to="/teamContinueGame">Continuer le jeu</Link>
                <span className="hover"> 
                <ButtonReplay/> 
                <p>Les compteurs seront remis à 0 et vous rejouerez avec les mêmes équipes</p>
                </span> 
                <span className="hover">
                <ButtonLeave/>
                <p>Les compteurs seront remis à 0 et les équipes seront supprimées</p>
                </span> 
                </div>

            </div>
            </div>
)
    }
}

export default ButtonProposeLeave;