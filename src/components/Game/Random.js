import React, {useEffect, useState} from 'react';
import gifRandom from '../../pictures/random.webp';
import axios from 'axios';
import { Link } from 'react-router-dom';
import gitBonhomme from '../../pictures/bonhomme.webp';
import LinkGame from '../Buttons/LinkGame';

const Random = () =>{
      const [colors, setColors]=useState("");
      const [affichage, setAffichage]=useState(false);
      const [teams, setTeams]=useState([]);
      const [redirect, setRedirect]=useState("");

useEffect(() => {
  axios.get('http://127.0.0.1:8000/api/teamPresentation').then((res) => {
      setTeams(res.data.data);
  },1000)
},[]);

useEffect(() => {
  let headers={headers:{'API_TOKEN':localStorage.getItem('token')}}
  let id =localStorage.getItem('token');
  axios.get(`http://127.0.0.1:8000/api/teamShow/${id}`, headers).then((res) => {setRedirect(res.data.data[0][0].teamColor);
  },1000)
},[]);

const random= () =>{
  let data=[];

  teams.forEach(function (color) {
      data.push((color.color.color))
      return data
  })
  let randomColor = Math.floor(Math.random() * data.length);
    setColors(data[randomColor]);
    setAffichage(true)

}

        return (
        <>  
            {affichage ?  
            <>
             <div className="containerTeamBuildingResultRandom">
              <div className="containerTeamRandomResultRandom">
              <h2>
                {(() => {
                  switch (colors) {
                    case "red":   return "L'équipe rouge commence la partie";
                    case "green": return "L'équipe verte commence la partie";
                    case "blue":  return "L'équipe bleue commence la partie";
                    case "yellow":return "L'équipe jaune commence la partie";
                    default:      return "Relancer le random";
                  }
                })()}
              </h2>
              <div className="color_button_random" style={{backgroundColor:colors}} value={colors}></div> 
              <div className="containerTeamRandomdiv">
                  <img src={gitBonhomme} alt="" width="400px"/>
              </div>
              {redirect === colors 
              ?
              <>
              <div>
              <LinkGame link='/categorie' titleLink='Suite'/>
              </div>
             </>
              :
              <>
              <LinkGame link='/waiting' titleLink='Suite'/>
            </>
              }
            </div>
            </div>
            </> 
            :
            <div className="containerTeamBuildingResultRandom">
              <div className="containerTeamRandom">
                <h2 class="text-center my-5">Une équipe va être sélectionnée au hasard</h2>
                <h4 class="text-center my-5">L'équipe sélectionnée choisira la catégorie</h4>
                <button className="bouton" onClick={random}>Lancement du random</button>
                <div className="containerTeamRandomdiv">
                  <img src={gifRandom} alt="" width="400px"/>
                </div>
              </div>
            </div>
            }
           

          </>

      )
    }
      
    
  
  export default Random;
  
  


  
  