import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import { Link } from 'react-router-dom';
import axios from 'axios';


class ResultTeams extends React.Component{
    constructor(){
        super()
        this.state={
            results:[],
            count:0,
            team:"",
            datas:[]
        }
    }

    
componentDidMount(){

    axios.get('http://127.0.0.1:8000/api/team_answers')
         .then(res=>{
            this.setState({results:res.data.data})
             console.log(res.data.data)

         })  
         .catch(error =>{
             if(error.response.status === 401){
                 this.setState({errors: error.response.data.errors}, ()=>{
                     console.log(this.state)
                 })
             }
             console.log(error.response)
         }) 
}



    render(){
        return(
            <>
                <NavbarTeam/>
                <div  className="containerCategorie">
                
                    <div>
                    Résultat des équipes

                    <div>
                        <h4>Les bonnes réponses étaient:</h4>
                        {this.state.results.map((result)=>
                        <>
                        <h5>Question: {result.questionName} </h5>
                        <p>Bonne réponse: {result.answerName}</p>
                        </>
                        )}
                    </div>
                    </div>

                    <Link className="btn btn-danger" to="/quizSummary">Voir tous les résultats</Link>
                </div>
            </>
        )
    }
}

export default ResultTeams;