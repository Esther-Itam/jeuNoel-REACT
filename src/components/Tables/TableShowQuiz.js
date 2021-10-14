import React from 'react';
import axios from 'axios';
import Timer from '../Game/Timer';
import { Redirect } from 'react-router';

class TableShowQuiz extends React.Component{
    constructor(props){
        super(props)
        this.state={
  
            errors:[],
            quiz:"",
            quizzes:[],
            question_id:0,
            answer_id:0,
            quiz:0,
            team_answers:[],
            questions:[],
            userInfos:[]

        }
    }

componentDidMount(){
  let id = this.props.id;
  let headers={headers:{'API_TOKEN':localStorage.getItem('token')}}
  let idToken =localStorage.getItem('token');
    axios.get(`http://127.0.0.1:8000/api/categorie/${id}`)
        .then(res => {this.setState({quizzes:res.data})})
        .catch(error => {console.log(error.response) })
    axios.get('http://127.0.0.1:8000/api/team_answers/index')
        .then(res=>{this.setState({results:res.data.data.length})
            console.log(res.data.data)
            })  
        .catch(error => {console.log(error.response)}) 
    axios.get(`http://127.0.0.1:8000/api/teamShow/${idToken}`, headers)
        .then(res => {this.setState({userInfos:res.data.data[0]})})
        .catch(error => {console.log(error.response)})}
    
handleSubmit = event =>{
    event.preventDefault()
    let bodyFormData = new FormData();
    bodyFormData.set('question_id', this.state.question_id)
    bodyFormData.set('answer_id', this.state.answer_id)
    bodyFormData.set('team_id', this.state.userInfos[0].teamId)

    axios.post('http://127.0.0.1:8000/api/team_answers', bodyFormData)
            .then(res=>{localStorage.setItem('token', res.data.api_token) })  
            .catch(error =>{
                if(error.response.status === 401){this.setState({errors: error.response.data.errors}, ()=>{})}
                console.log(error.response)
            })
             
}

handleAnswerChange = event =>{this.setState({answer_id: event.target.value}, ()=>{})} 

refreshPage = (event) =>{window.location.reload(false);
                         this.setState({question_id: event.target.value}, ()=>{})}
    
render(){
    const progress=(this.state.results/10)*100
        return(
            <>
                <div className="containerCategorie" >
                    <div className="row justify-content-md-center">
                        <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="10" style={{width:`${progress}%`}}>{progress/10} questions sur 10</div>
                    </div>
                
                    <form method="POST" onSubmit={this.handleSubmit}>
                        {this.state.quizzes.map((quiz)=>
                        <>
                    {/*   <Timer question_id={quiz[2][0].questionId} answer_id={quiz[3][0].answerId}/> */}
                            <h1>Catégorie: {quiz[0][0].categorieName}</h1>
                            <h3>Quiz: {quiz[1][0].quizName}</h3>
                            <div className="container bg-white container_question">
                            <h5>Question: {quiz[2][0].questionName}</h5>
                            <div className="form-check">
                                <input onChange={this.handleAnswerChange} value={quiz[3][0].answerId} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">{quiz[3][0].answerName}</label>
                            </div>
                            <div className="form-check">
                                <input onChange={this.handleAnswerChange} value={quiz[3][1].answerId} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">{quiz[3][1].answerName}</label>
                            </div>
                            <div className="form-check">
                                <input onChange={this.handleAnswerChange} value={quiz[3][2].answerId} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">{quiz[3][2].answerName}</label>
                            </div>
                            <button  className="btn btn-success" type="submit" value={quiz[2][0].questionId} onClick={this.refreshPage}  to={`/quizShow/${quiz[0][0].categorieId}`}>Valider</button>
                            </div>
                            </> 
                        
                            )} 
                            {this.state.results>=10 ? <Redirect to={`/result/${this.props.id}`}/> : null}  
                            </form>
                    </div>
                </div>
            </>
        )
    }
}

export default TableShowQuiz;