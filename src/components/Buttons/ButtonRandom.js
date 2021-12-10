import React, { useState } from 'react';
import gifRandom from '../../pictures/random.webp';
import { useAppContext } from '../../Context';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';


const ButtonRandom = () =>{
  const { state, dispatch } = useAppContext();
  const {redirect, setRedirect}=useState(false);
 
        return (
   
             <div className="containerTeamBuildingResultRandom">
             <div className="containerTeamRandom">
               <h2 class="text-center my-4">Une équipe va être sélectionnée au hasard</h2>
               <h4 class="text-center my-4">L'équipe sélectionnée choisira la catégorie</h4>
                <div className='containerbuttonRandom'>
                  <Link className="buttonRandom"to='/random'>Lancement du random</Link>
                </div>
               <div className="containerTeamRandomdiv">
                 <img src={gifRandom} alt="" width="400px"/>
               </div>
             </div>
           </div> 
     

      )
      
    }
      
    
  
  export default ButtonRandom;
  
  


  
  