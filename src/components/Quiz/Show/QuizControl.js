import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

class QuizControl extends React.Component{
    constructor(props){
        super(props)
        this.state={
  
            errors:[],
            quizzes:[],
            quiz:'',
            redirect:false


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
                window.location.reload(false);

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
        
        if(this.state.redirect){
            return(<Redirect to='/summary'/>)
        }
        return(
            <>
                   {this.state.quizzes.length===0
                ?
                <div className="no_categorie_show">Il n'y a pas encore de Quiz créés</div>
                :
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Catégorie</th>
                        <th scope="col">Voir</th>
                        <th scope="col">Editer</th>
                        <th scope="col">Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.quizzes.map((quiz)=>
                        <tr>
                        <th scope="row" key={quiz.id}>{quiz.id}</th>
                        <td key={quiz.name}>{quiz.name}</td>
                        <td key={quiz.categorie.name}>{quiz.categorie.name}</td>
                        <td><Link to={`/quizIndex/${quiz.id}`} class="btn btn-success">Voir</Link></td>
                        <td><Link to={`/quizUpdate/${quiz.id}`} class="btn btn-success">Modifier</Link></td>
                        <td><button type='submit' onClick={(event) => this.handleSubmit(event, quiz.id)} class="btn btn-success">Supprimer</button></td>
                        </tr>   
                    )}     
                    </tbody>
                </table>
                }   
                <Link type="button" class="btn btn-success" to='/quizCreate'>Créer</Link>
     
            </>
        )
    }
}

export default QuizControl;