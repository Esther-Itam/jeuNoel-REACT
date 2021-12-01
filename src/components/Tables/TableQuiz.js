import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';
import LARAVEL_SERVER from '../Variable';

class TableQuiz extends React.Component{
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
    axios.get(`${LARAVEL_SERVER}/quiz`)
        .then(res => {this.setState({quizzes:res.data.data})})
        .catch(error => {console.log(error.response)})
}

handleSubmit = (event, id) =>{
    event.preventDefault()
    console.log("Quiz supprimé")
    axios.delete(`${LARAVEL_SERVER}/quiz/${id}`)
            .then(res=>{
                this.setState({redirect:true})
                window.location.reload(false);
            })  
            .catch(error =>{
                if(error.response.status === 401){this.setState({errors: error.response.data.errors}, ()=>{})
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
                <>
                <div className="no_categorie_show">Il n'y a pas encore de Quiz créés</div>
                <Link type="button" class="linkStandard" to='/quizCreate'>Créer</Link>
                </>
                :
                <table class="table table-borderless">
                    <thead className='table-dark'>
                        <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Catégorie</th>
                        <th scope="col">Voir</th>
                        <th scope="col">Editer</th>
                        <th scope="col">Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.quizzes.map((quiz)=>
                        <tr>
                        <td className="table-light" key={quiz.name}>{quiz.name}</td>
                        <td className="table-light" key={quiz.categorie.name}>{quiz.categorie.name}</td>
                        <td className="table-dark" ><Link to={`/quizIndex/${quiz.id}`}className="linkAdmin">Voir</Link></td>
                        <td className="table-dark" ><Link to={`/quizUpdate/${quiz.id}`} className="linkAdmin">Modifier</Link></td>
                        <td className="table-dark" ><button type='submit' onClick={(event) => this.handleSubmit(event, quiz.id)} className="buttonAdmin">Supprimer</button></td>
                        </tr>   
                    )}     
                    </tbody>
                    <tbody className="containerLinkCreateAdmin">
                        <td colspan="6" ><Link type="button" class="linkAdminCreate" to='/quizCreate'>Créer</Link></td>
                    </tbody>
                </table>
                }
               
            </>
        )
    }
}

export default TableQuiz;