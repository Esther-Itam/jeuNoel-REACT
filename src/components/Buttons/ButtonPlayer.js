import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import later from '../../pictures/later.webp'


class ButtonPlayer extends React.Component{
    constructor(){
        super()
        this.state={
            teams:[],
            team:""
        }
    }

    
componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/teamPresentation')
        .then(res => {this.setState({teams:res.data.length})})
        .catch(error => {console.log(error.response)})
}

    render(){
        return(
            <>
                
                    
                    <div>
                        {this.state.teams <4
                        ?
                        <div className="buttonPlayerContainer">
                        <Link className="playButton" to='/teamBuilding'>Jouer</Link>
                        </div>
                        :
                        <>
                            <h2>Le nombre de joueur est atteint</h2>
                            <h3>Veuillez revenir plus tard!</h3>
                            <img src={later} alt="" width="350px"/>
                        </>        
                        }
                    </div>
                   
         
            </>
        )
    }
}

export default ButtonPlayer;