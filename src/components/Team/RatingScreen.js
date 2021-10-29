import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import ButtonReplay from '../Buttons/ButtonReplay';
import ButtonLeave from '../Buttons/ButtonLeave';
import TableResult from '../Tables/TableResult';
import gifFinal from '../../pictures/final.gif';
import axios from 'axios';
import { Link } from 'react-router-dom';


class RatingScreen extends React.Component{
    constructor(){
        super()
        this.state={
            teams:[],
            team:""
        }
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/categorieUsed')
        .then(res => {this.setState({categorieUsed:res.data.data[0].length})
    console.log(res.data.data[0].length)})
        .catch(error => {console.log(error.response) })
    }
    render(){
        return(
            <>
                <NavbarTeam/>
                <div  className="containerResultFinal">
                <div  className="containerResultTeamFinal">
                        <h1>Classement final des équipes</h1>
                        <TableResult/>
                        <div className="containerLinkResultFinal">
                        <img className="gifFinal" src={gifFinal} alt="" width="400px"/>
                        <div className="containerLinkResultFinal2">
                        <ButtonReplay/> 
                        {this.state.categorieUsed<6
                        ?
                        <Link type="button" className="linkStandardLeave" to="/proposeLeave">Quitter</Link>
                        :  
                        <ButtonLeave/> 
                        }
                        </div>

                    </div>
                </div>
                </div>
            </>
        )
    }
}

export default RatingScreen;