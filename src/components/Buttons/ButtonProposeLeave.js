import React from 'react';
import ButtonReplay from '../Buttons/ButtonReplay';
import ButtonLeave from '../Buttons/ButtonLeave';

class ButtonProposeLeave extends React.Component{
 
    render(){

        return(
            <div  className="containerResultFinalGame">
                <div  className="containerProposeLeave">
                <h1>Ne te laisse pas impressionner, reviens jouer! Tu peux encore sauver Noël!!!</h1>
                <div className="containerButtonProposeLeave">
                <ButtonReplay/>   
                <ButtonLeave/>
                </div>

            </div>
            </div>
)
    }
}

export default ButtonProposeLeave;