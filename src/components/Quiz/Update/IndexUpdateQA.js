import React from 'react';
import axios from 'axios';
import QuestionUpdate from './QuestionUpdate';
import AnswersUpdate from './AnswersUpdate';

class IndexUpdateQA extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            quiz:"",
            quizzes:[],
        }
    }

componentDidMount(){
  let id = this.props.id;
    axios.get(`http://127.0.0.1:8000/api/quiz/${id}`)
        .then(res => {this.setState({quizzes:res.data}) })
        .catch(error => {console.log(error.response)}) 
}

render(){
      
        return(
            <>
                {this.state.quizzes.map((quiz)=>
                <>
                <div className="container bg-white container_question">
                    <div id="question_show">Question {this.props.numberQuestion}: <QuestionUpdate questionIndex={this.props.questionIndex} id = {this.props.id} idQuestion = {quiz[1][0].questionId}/></div>
                    <div id="answer_show">1/ <AnswersUpdate answerIndex={this.props.answerIndex1} id = {this.props.id} idAnswer = {quiz[2][0].answerId}/></div>
                    <div id="answer_show">2/ <AnswersUpdate answerIndex={this.props.answerIndex2} id = {this.props.id} idAnswer = {quiz[2][1].answerId}/></div>
                    <div id="answer_show">3/ <AnswersUpdate answerIndex={this.props.answerIndex3} id = {this.props.id} idAnswer = {quiz[2][2].answerId}/></div>
                </div>
            </>
                )}
            </>
        )
    }
}

export default IndexUpdateQA;