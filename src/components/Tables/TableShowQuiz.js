import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LARAVEL_SERVER from '../Variable';
import { useAppContext } from '../../Context';
import Timer from '../Game/Timer';
import { Redirect } from 'react-router';

function TableShowQuiz(props){
    const [errors, setErrors] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const [question_id, setQuestion_id] = useState([]);
    const [answer_id, setAnswer_id] = useState([]);
    const [userInfos, setUserInfos] = useState([]);
    const [results, setResults] = useState([]);
    const { state, dispatch } = useAppContext();

useEffect(() => {
    let id = props.id;
    axios.get(`${LARAVEL_SERVER}/categorie/${id}`)
    .then((res) => {
        setQuizzes(res.data.data);
    }
    
    ,1000)
    },[]);

    
useEffect(() => {
    axios.get(`${LARAVEL_SERVER}/team_answers/index`).then((res) => {
        setResults(res.data.data.length);
    },1000)
    },[]);

useEffect(() => {
    let headers={headers:{'API_TOKEN':localStorage.getItem('token')}}
    let idToken =localStorage.getItem('token');
    axios.get(`${LARAVEL_SERVER}/teamShow/${idToken}`, headers).then((res) => {
        setUserInfos(res.data.data[0]);
      
    },1000)
    },[]);    


const handleSubmit = event =>{
    event.preventDefault()
    let bodyFormData = new FormData();
    bodyFormData.set('question_id', question_id)
    bodyFormData.set('answer_id', answer_id)
    bodyFormData.set('team_id', userInfos[0].teamId)
    console.log(userInfos.teamId)

    axios.post(`${LARAVEL_SERVER}/team_answers`, bodyFormData)
            .then(res=>{console.log(res)})  
            .catch(error =>{console.log(error.response)
            })
                
}

const handleAnswerChange = event =>{setAnswer_id(event.target.value)} 

const refreshPage = (event) =>{setQuestion_id(event.target.value);
    setTimeout(function(){  window.location.reload()}, 10);  
}
 
const progress=(results/60)*100
        return(
            <>
               
                    <div className="containerQuizQA">
                        <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="10" style={{width:`${progress}%`}}>{results} / 60</div>
                    </div>
                
                    <form method="POST" onSubmit={handleSubmit}>
                     {quizzes.map((quiz)=>
                        <>
{/*                      <Timer question_id={quiz[2][0].questionId} answer_id={quiz[3][0].answerId}/> 
 */}                            <h1>Catégorie: {quiz[0][0].categorieName}</h1>
                            <h3>Quiz: {quiz[1][0].quizName}</h3>
                            <div className="container bg-white container_question">
                            <h4>{quiz[2][0].questionName}</h4>
                            <div className="form-check">
                                <input onChange={handleAnswerChange} value={quiz[3][0].answerId} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">{quiz[3][0].answerName}</label>
                            </div>
                            <div className="form-check">
                                <input onChange={handleAnswerChange} value={quiz[3][1].answerId} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">{quiz[3][1].answerName}</label>
                            </div>
                            <div className="form-check">
                                <input onChange={handleAnswerChange} value={quiz[3][2].answerId} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">{quiz[3][2].answerName}</label>
                            </div>
                                <div className="containerButtonQuiz">
                                <button  className="buttonStandard" type="submit" value={quiz[2][0].questionId} onClick={refreshPage}  to={`/quizShow/${quiz[0][0].categorieId}`}>Valider</button>
                                </div>
                            </div>
                            </> 
                        
                            )}  
                            </form>
                    </div>
              
            </>
        )
    }


export default TableShowQuiz;