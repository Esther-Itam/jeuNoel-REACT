import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Result extends React.Component{
    constructor(){
        super()
        this.state={
            results:[],
            count:0,
            quizzes:[]   
        }
    }


componentDidMount(){
    let id = this.props.id;
    axios.get(`http://127.0.0.1:8000/api/categorie/${id}`)
        .then(res => {this.setState({quizzes:res.data})})
        .catch(error => {console.log(error.response)}) 
    axios.get('http://127.0.0.1:8000/api/team_showAnswers')
        .then(res=>{this.setState({results:res.data.data})})  
        .catch(error =>{console.log(error.response) })
    axios.get('http://127.0.0.1:8000/api/team_answers')
    .then(res=>{this.setState({count:res.data.data.length})})  
    .catch(error =>{console.log(error.response) })          
}



    render(){
       const count = this.state.count;
        return(
            <>
            <div  className="containerResult">
                <div  className="containerResultText">
                
                    <div className="row justify-content-md-center">
                        {this.state.quizzes.map((quiz)=><h1>Catégorie: {quiz[0][0].categorieName}</h1>)}    
                        <h1>Ton équipe a retrouvé <span> {count}</span> 🎁 sur les 60 🎁 perdus!</h1>
                        <div className="row container-result">
                            <h4>Les bonnes réponses étaient:</h4>
                            {this.state.results.map((result)=>
                            <div className="col-6">
                            <h5>{result.questionName}</h5>
                            <p><i>Bonne réponse:</i> {result.answerName}</p>
                            </div>
                            )}
                            <div className="linkStandardContainerResult">
                            <Link type="button" className="linkStandard" to="/resultTeams">Voir tous les résultats</Link>
                            </div>
                        </div>
                    </div>         
                </div>
            </div>    
            </>
        )
    }
}

export default Result;