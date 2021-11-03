import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import later from '../../pictures/later.webp'
import LARAVEL_SERVER from '../Variable';

class ButtonPlayer extends React.Component{
    constructor(){
        super()
        this.state={
            teams:[],
            team:""
        }
    }

    
componentDidMount(){
    axios.get(`${LARAVEL_SERVER}/teamPresentation`)
        .then(res => {this.setState({teams:res.data.data.length})})
        .catch(error => {console.log(error.response)})
    axios.get(`${LARAVEL_SERVER}/categorieUsed`)
    .then(res => {this.setState({categorieUsed:res.data.data[0].length})
console.log(res.data.data[0].length)})
    .catch(error => {console.log(error.response) })
}

    render(){
        return(
            <>
               
                    <div  className="containerStart">
                    <div className='containerPlayer'>
                        {this.state.teams <4
                        ?
                        <div className="buttonPlayerContainer">
                        <Link className="playButton" to='/teamBuilding'>Jouer</Link>
                        </div>
                        :
                        <div className="containerTeamBuildingMax">
                            <div className="containerTeamMax">
                                <h2>Le nombre de joueur est atteint</h2>
                                <h3>Veuillez revenir plus tard!</h3>
                                <img src={later} alt="" width="400px"/>
                            </div>
                        </div>       
                        }
                    </div>
                    </div>
                   

            </>
        )
    }
}

export default ButtonPlayer;