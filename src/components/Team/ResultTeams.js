import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ButtonLeave from '../Buttons/ButtonLeave';
import TableResult from '../Tables/TableResult';
import LARAVEL_SERVER from '../Variable';


class ResultTeams extends React.Component{

    constructor(){
        super()
        this.state={categories:[]}
    }

componentDidMount(){

    axios.get(`${LARAVEL_SERVER}/categorieUsed`)
        .then(res => {this.setState({categories:res.data.data[0].length})})
        .catch(error => {console.log(error.response) })
    axios.get(`${LARAVEL_SERVER}/categorieUsed`)
    .then(res => {this.setState({categorieUsed:res.data.data[0].length})
    console.log(res.data.data[0].length)})
    .catch(error => {console.log(error.response) })      
}

    render(){
        return(
            <>
             <div  className="containerResult">
                <div  className="containerResultTeam">
                    <h1>Classement provisoire des équipes</h1>
                    <TableResult/>
                    <div className="containerLinkResult">
                    {this.state.categories===6
                        ?
                        <Link type="button" className="linkStandard" to="/rating">Voir le classement final</Link>
                        :
                        <>
                        <Link type="button" className="linkStandard" to="/teamContinueGame">Continuer le jeu</Link>
                        <Link type="button" className="linkStandardLeave" to="/proposeLeave">Quitter</Link>
                        </>
                    }

                    </div>
                    
                </div>
             </div>

            </>
        )
    }
}

export default ResultTeams;