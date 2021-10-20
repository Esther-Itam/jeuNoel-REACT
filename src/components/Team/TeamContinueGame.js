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
            <div className="container w-50">
                <h2 className="text-center my-5">Voici les équipes qui s'affrontent</h2>
                <h5>Tout n'est pas encore terminé, vous pouvez encore sauver Noël!</h5>
                    {this.state.teams.map((team)=>
                    <div>
                        <h5 style={{color:team.color.color}}>{team.name}</h5>
                        <div className="avatar_button" style={{backgroundImage:`url(${team.avatar})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
                    </div>
                    )}
                    <button type="button" class="btn btn-success"><Link className="link" to="/startGame">Continuer la partie</Link></button>                 
            </div>
        )
    }
}

  
export default TeamContinueGame;