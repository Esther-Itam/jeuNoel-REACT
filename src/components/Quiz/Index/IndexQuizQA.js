import React from 'react';
import QuestionQuiz from './QuestionQuiz';
import AnswersQuiz from './AnswersQuiz';


class IndexQuizQA extends React.Component{
  
render(){
      
    return(
            <div class="container bg-white container_question">
                <div id="question_show">Question {this.props.numberQuestion}: <QuestionQuiz questionIndex={this.props.questionIndex} id = {this.props.id}/></div>
                <div id="answer_show">1/ <AnswersQuiz answerIndex={this.props.answerIndex1} id = {this.props.id}/></div>
                <div id="answer_show">2/ <AnswersQuiz answerIndex={this.props.answerIndex2} id = {this.props.id}/></div>
                <div id="answer_show">3/ <AnswersQuiz answerIndex={this.props.answerIndex3} id = {this.props.id}/></div>
            </div>
        )
    }
}

export default IndexQuizQA;