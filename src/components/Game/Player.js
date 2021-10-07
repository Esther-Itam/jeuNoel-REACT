import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import later from '../../pictures/later.webp'


class Player extends React.Component{
    constructor(){
        super()
        this.state={
            teams:[],
            count:0,
            team:""
        }
    }

    
componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/teamPresentation')
        .then(res => {
            this.setState({teams:res.data.length})
            console.log({teams:res.data.length})
            
        })
        .catch(error => {
            console.log(error.response)
        })
}



    render(){
        return(
            <>
                <Navbar/>
                <div className="containerCategorie" >
                    <div class="row justify-content-md-center">
                    <div>
                        {
                    this.state.teams <4
                    ?
                    <Link className="playButton" to='/teamBuilding'>Jouer</Link>
                    :
                    <>
                        <h2>Le nombre de joueur est atteint</h2>
                        <h3>Veuillez revenir plus tard!</h3>
                        <img src={later} alt="" width="350px"/>
  
                    </>        

                        }
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Player;