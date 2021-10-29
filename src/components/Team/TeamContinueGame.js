import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TeamContinueGame extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            teams:[],
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/teamPresentation')
            .then(res => {this.setState({teams:res.data.data})})
            .catch(error => {console.log(error.response)})           
    }
 
    render(){

        return(
            <div className='containerTeamBuildingContinueGame'>
            <div className="containerTeam">
                <h2 className="text-center my-5">Voici les équipes qui s'affrontent</h2>
                <h4  className="text-center my-5">Tout n'est pas encore terminé, vous pouvez encore sauver Noël!</h4>
                <div>
                    {this.state.teams.map((team)=>
                    <div className="containerAvatarPresentation">
                    <div className="containerAvatarPresentationTitle">
                        <div className="avatar_button" style={{backgroundImage:`url(${team.avatar})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
                        <h2 style={{color:team.color.color}}>{team.name}</h2>
                    </div>
                    </div>
                    )}
                </div>
                <div className="containerButtonGameContinue">
                    <button type="button" class="buttonGame"><Link className="link" to="/startGame">Go go go!!!</Link></button>                 
                </div>        
            </div>
            </div>
        )
    }
}

  
export default TeamContinueGame;