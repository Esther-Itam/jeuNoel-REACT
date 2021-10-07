import React from 'react';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import QuizControl from './QuizControl';
import CategorieControl from './CategorieControl';

class Summary extends React.Component{
    constructor(props){
        super(props)
        this.state={
  
            errors:[],
            quizzes:[],
            quiz:'',


        }
    }

componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/quiz')
        .then(res => {
           this.setState({quizzes:res.data.data})
            console.log(res)
        })
        .catch(error => {
            console.log(error.response)
        })
    }

handleSubmit = (event, id) =>{
    event.preventDefault()
    console.log("Quiz supprimé")
    axios.delete(`http://127.0.0.1:8000/api/quiz/${id}`)
            .then(res=>{
                console.log(res.data)
                this.setState({redirect:true})

            })  
            .catch(error =>{
                if(error.response.status === 401){
                    this.setState({errors: error.response.data.errors}, ()=>{
                    })
                }
                console.log(error.response)
            })
                
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
                    <div  className="container" id="categorieControl"><CategorieControl/></div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#quizControl">Panneau de contrôle des Quiz</a>
                    <div  className="container" id="quizControl"><QuizControl/></div>
                </li>
                </ul>
                </div>
                </div>


            </>
        )
    }
}

export default Summary;