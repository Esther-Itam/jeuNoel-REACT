import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ButtonLeave from '../Buttons/ButtonLeave';
import TableResult from '../Tables/TableResult';


class ResultTeams extends React.Component{

    constructor(){
        super()
        this.state={categories:[]}
    }

componentDidMount(){

    axios.get('http://127.0.0.1:8000/api/categorieUsed')
    .then(res => {
        this.setState({categories:res.data.data[0].length})
        console.log(res.data.data[0].length)

    })
    .catch(error => {
        console.log(error.response)
    })      
}

    render(){
        return(
            <>
                <NavbarTeam/>
                <div  className="containerCategorie">
                    <h1>Classement provisoire des équipes</h1>
                    <TableResult/>
                    {this.state.categories>6
                        ?
                        <Link type="button" className="btn btn-success" to="/rating">Voir le classement</Link>
                        :
                        <Link type="button" className="btn btn-success" to="/teamPresentation">Continuer le jeu</Link>
                    }
                    <ButtonLeave/>
                </div>
            </>
        )
    }
}

export default ResultTeams;