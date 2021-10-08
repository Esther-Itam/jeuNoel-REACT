import React from 'react';
import ButtonLeaveOk from '../Buttons/ButtonLeaveOk';
import gifGrinch from '../../pictures/grinch.gif';

class ButtonLeave extends React.Component{
 
    render(){

        return(
            <div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Quitter</button>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="staticBackdropLabel">Voulez-vous quitter le jeu?</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5>Les équipes seront supprimer!</h5>
                            <img src={gifGrinch} alt="" swidth="800px"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Non</button>
                            <ButtonLeaveOk/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ButtonLeave;