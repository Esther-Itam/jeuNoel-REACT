import React, {useEffect, useState} from 'react';
import axios from 'axios';
import gitBonhomme from '../../pictures/bonhomme.webp';
import LinkGame from '../Buttons/LinkGame';
import LARAVEL_SERVER from '../Variable';
import { useAppContext } from '../../Context';
import NavbarTeam from '../Navbar/NavbarTeam';

const RandomScreen = () =>{
      const [colors, setColors]=useState("");
      const [affichage, setAffichage]=useState(false);
      const [teams, setTeams]=useState([]);
      const [redirect, setRedirect]=useState("");
      const { state, dispatch } = useAppContext();

useEffect(() => {
  axios.get(`${LARAVEL_SERVER}/teamPresentation`).then((res) => {
      setTeams(res.data.data);
  },1000)
},[]);

useEffect(() => {
  axios.get(`${LARAVEL_SERVER}/random`).then((res) => {
      console.log(res.data.data);
  },1000)
},[]);

useEffect(() => {
  let headers={headers:{'API_TOKEN':localStorage.getItem('token')}}
  let id =localStorage.getItem('token');
  axios.get(`${LARAVEL_SERVER}/teamShow/${id}`, headers).then((res) => {setRedirect(res.data.data[0][0].teamColor);
  },1000)
},[]);


        return (
            <>
            <NavbarTeam/>
             <div className="containerTeamBuildingResultRandom">
              <div className="containerTeamRandomResultRandom">
              <h2>
                {(() => {
                  switch (state.random) {
                    case "red":   return "L'équipe rouge choisie la catégorie";
                    case "green": return "L'équipe verte choisie la catégorie";
                    case "blue":  return "L'équipe bleue choisie la catégorie";
                    case "yellow":return "L'équipe jaune choisie la catégorie";
                    default:      return "Relancer le random";
                  }
                })()}
              </h2>
              <div className="color_button_random" style={{backgroundColor:state.random}} value={state.random}></div> 
              <div className="containerTeamRandomdiv">
                  <img src={gitBonhomme} alt=""/>
              </div>
              {state.random === redirect 
              ?
              <LinkGame link='/categorie' titleLink='Suite'/>
              :
              <LinkGame link='/waiting' titleLink='Suite'/>
              }
            </div>
            </div>
            </> 

      )
    }
      
    
  
  export default RandomScreen;
  
  


  
  