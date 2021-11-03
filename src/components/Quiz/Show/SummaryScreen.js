import React from 'react';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import QuizControlScreen from './QuizControlScreen';
import CategorieControlScreen from './CategorieControlScreen';
import LARAVEL_SERVER from '../../Variable';

class SummaryScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            quizzes:[],
            quiz:'',
        }
    }

componentDidMount(){
    axios.get(`${LARAVEL_SERVER}/quiz`)
        .then(res => {this.setState({quizzes:res.data.data})})
        .catch(error => {console.log(error.response)})
}

handleSubmit = (event, id) =>{
    event.preventDefault()
    console.log("Quiz supprimé")
    axios.delete(`${LARAVEL_SERVER}/quiz/${id}`)
            .then(res=>{this.setState({redirect:true})})  
            .catch(error =>{console.log(error.response)})             
}            
    
            

    render(){

        return(
            <>
                <Navbar/>
                <div className="containerSummary">
                    <div className="container_summary">
                        <h1>Interface Administrateur</h1>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link" href="#categorieControl">Panneau de contrôle des Catégories</a>
                                <div  className="containerCategorieControl" id="categorieControl"><CategorieControlScreen/></div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#quizControl">Panneau de contrôle des Quiz</a>
                                <div  className="containerCategorieControl" id="quizControl"><QuizControlScreen/></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default SummaryScreen;