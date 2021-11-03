import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import ButtonReplay from '../Buttons/ButtonReplay';
import ButtonLeave from '../Buttons/ButtonLeave';
import TableResult from '../Tables/TableResult';
import gifFinal from '../../pictures/final.gif';
import axios from 'axios';
import LARAVEL_SERVER from '../Variable';


class RatingScreen extends React.Component{
    constructor(){
        super()
        this.state={
            teams:[],
            team:""
        }
    }
    componentDidMount(){
        axios.get(`${LARAVEL_SERVER}/categorieUsed`)
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
                        <ButtonLeave/> 
                        </div>

                    </div>
                </div>
                </div>
            </>
        )
    }
}

export default RatingScreen;