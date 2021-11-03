import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LARAVEL_SERVER from '../Variable';

class ButtonCategorie extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            categories:[],
            categorie:"",
        }
    }

componentDidMount(){
    axios.get(`${LARAVEL_SERVER}/categorie`)
        .then(res => {this.setState({categories:res.data.data})})
        .catch(error => {console.log(error.response)})}         

    render(){
     
        return(
            <>
             <div className="containerTeamBuildingCategorie">
                <div className="containerCategorieGame" >

                           
                             {this.state.categories.map((categorie)=>
                            <>
                            {
                                categorie.is_used===1
                                ?
                                <div className="containerCategorieButtonUsed">
                                <button className="categorieButtonUsed" type="button">{categorie.name}</button>
                                </div>
                                :
                                <div className="containerCategorieButton">
                                <Link className="categorieButton" type="button" value={categorie.name} to={`/categorieShow/${categorie.id}`}>{categorie.name}</Link>
                                </div>
                            }
                            </>
                            )} 

                    </div>
                </div>
            </>
        )
    }
}

export default ButtonCategorie;