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
    axios.get('http://127.0.0.1:8000/api/team_answers')
        .then(res=>{this.setState({results:res.data.data})
                    this.setState({count:res.data.data.length})
                    })  
        .catch(error =>{console.log(error.response) }) 
}



    render(){
       const count = this.state.count;
        return(
            <>
                <div  className="containerCategorie">
                
                    <div className="row justify-content-md-center">
                        {this.state.quizzes.map((quiz)=><h1>Catégorie: {quiz[0][0].categorieName}</h1>)}    
                        <h3>Résultat : {count} 🎁</h3>
                        <div className="container bg-white container_question">
                            <h4>Les bonnes réponses étaient:</h4>
                            {this.state.results.map((result)=>
                            <>
                            <h5>Question: {result.questionName} </h5>
                            <p>Bonne réponse: {result.answerName}</p>
                            </>
                            )}
                        </div>
                        <div>
                        <Link type="button" className="btn btn-danger" to="/resultTeams">Voir tous les résultats</Link>
                        </div>
                    </div>
                            
                </div>
            </>
        )
    }
}

export default Result;