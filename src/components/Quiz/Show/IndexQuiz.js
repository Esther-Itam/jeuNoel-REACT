import React from 'react';
import axios from 'axios';
import NavbarTeam from '../../Navbar/NavbarTeam';
import QuestionQuiz from './QuestionQuiz';
import AnswersQuiz from './AnswersQuiz';
import { Link } from 'react-router-dom';


class IndexQuiz extends React.Component{
    constructor(props){
        super(props)
        this.state={
  
            errors:[],
            quiz:"",
            quizzes:[],
            questionIndex:0,
            answerIndex:0,
        }
    }

componentDidMount(){
  let id = this.props.match.params.id;

        axios.get(`http://127.0.0.1:8000/api/quiz/${id}`)
        .then(res => {
            this.setState({quizzes:res.data})
             console.log(res.data)
             this.setState({index:res.data[0][1].length})

         })
         .catch(error => {
             console.log(error.response)
         }) 
 
      
 
    }
 

  
    render(){
      
        return(
<>
    <NavbarTeam/>

    <div className="containerCategorie" >  
        <div class="row justify-content-md-center">
            {this.state.quizzes.map((quiz)=>
                <h1>Quiz: {quiz[0][0].quizName}</h1>
            )}
            <div class="container bg-white container_question">
                <div id="question_show">Question 1: <QuestionQuiz questionIndex={0} id = {this.props.match.params.id}/></div>
                <div id="answer_show">1/ <AnswersQuiz answerIndex={0} id = {this.props.match.params.id}/></div>
                <div id="answer_show">2/ <AnswersQuiz answerIndex={1} id = {this.props.match.params.id}/></div>
                <div id="answer_show">3/ <AnswersQuiz answerIndex={2} id = {this.props.match.params.id}/></div>
            </div>

            {this.state.index >1
            ?
            <div class="container bg-white container_question">
            <div id="question_show">Question 2: <QuestionQuiz questionIndex={1} id = {this.props.match.params.id}/></div>
            <div id="answer_show">1/ <AnswersQuiz answerIndex={3} id = {this.props.match.params.id}/></div>
            <div id="answer_show">2/ <AnswersQuiz answerIndex={4} id = {this.props.match.params.id}/></div>
            <div id="answer_show">3/ <AnswersQuiz answerIndex={5} id = {this.props.match.params.id}/></div>
            </div>
            :
            null
            }

            {this.state.index >2
            ?
            <div class="container bg-white container_question">
            <div id="question_show">Question 3: <QuestionQuiz questionIndex={2} id = {this.props.match.params.id}/></div>
            <div id="answer_show">1/ <AnswersQuiz answerIndex={6} id = {this.props.match.params.id}/></div>
            <div id="answer_show">2/ <AnswersQuiz answerIndex={7} id = {this.props.match.params.id}/></div>
            <div id="answer_show">3/ <AnswersQuiz answerIndex={8} id = {this.props.match.params.id}/></div>
            </div>
            :
            null
            }

            {this.state.index >3
            ?
            <div class="container bg-white container_question">
            <div id="question_show">Question 4: <QuestionQuiz questionIndex={3} id = {this.props.match.params.id}/></div>
            <div id="answer_show">1/ <AnswersQuiz answerIndex={9} id = {this.props.match.params.id}/></div>
            <div id="answer_show">2/ <AnswersQuiz answerIndex={10} id = {this.props.match.params.id}/></div>
            <div id="answer_show">3/ <AnswersQuiz answerIndex={11} id = {this.props.match.params.id}/></div>
            </div>
            :
            null
            } 

            {this.state.index >4
            ?
            <div class="container bg-white container_question">
            <div id="question_show">Question 5: <QuestionQuiz questionIndex={4} id = {this.props.match.params.id}/></div>
            <div id="answer_show">1/ <AnswersQuiz answerIndex={12} id = {this.props.match.params.id}/></div>
            <div id="answer_show">2/ <AnswersQuiz answerIndex={13} id = {this.props.match.params.id}/></div>
            <div id="answer_show">3/ <AnswersQuiz answerIndex={14} id = {this.props.match.params.id}/></div>
                </div>
            :
            null
            } 

            {this.state.index >5
            ?
            <div class="container bg-white container_question">
            <div id="question_show">Question 6: <QuestionQuiz questionIndex={5} id = {this.props.match.params.id}/></div>
            <div id="answer_show">1/ <AnswersQuiz answerIndex={15} id = {this.props.match.params.id}/></div>
            <div id="answer_show">2/ <AnswersQuiz answerIndex={16} id = {this.props.match.params.id}/></div>
            <div id="answer_show">3/ <AnswersQuiz answerIndex={17} id = {this.props.match.params.id}/></div>
            </div>
            :
            null
            } 

            {this.state.index >6
            ?
            <div class="container bg-white container_question">
            <div id="question_show">Question 7: <QuestionQuiz questionIndex={6} id = {this.props.match.params.id}/></div>
            <div id="answer_show">1/ <AnswersQuiz answerIndex={18} id = {this.props.match.params.id}/></div>
            <div id="answer_show">2/ <AnswersQuiz answerIndex={19} id = {this.props.match.params.id}/></div>
            <div id="answer_show">3/ <AnswersQuiz answerIndex={20} id = {this.props.match.params.id}/></div>
            </div>
            :
            null
            } 

            {this.state.index >7
            ?
            <div class="container bg-white container_question">
            <div id="question_show">Question 8: <QuestionQuiz questionIndex={7} id = {this.props.match.params.id}/></div>
            <div id="answer_show">1/ <AnswersQuiz answerIndex={21} id = {this.props.match.params.id}/></div>
            <div id="answer_show">2/ <AnswersQuiz answerIndex={22} id = {this.props.match.params.id}/></div>
            <div id="answer_show">3/ <AnswersQuiz answerIndex={23} id = {this.props.match.params.id}/></div>
            </div>
            :
            null
            }  

            {this.state.index >8
            ?
            <div class="container bg-white container_question">
            <div id="question_show">Question 9: <QuestionQuiz questionIndex={8} id = {this.props.match.params.id}/></div>
            <div id="answer_show">1/ <AnswersQuiz answerIndex={24} id = {this.props.match.params.id}/></div>
            <div id="answer_show">2/ <AnswersQuiz answerIndex={25} id = {this.props.match.params.id}/></div>
            <div id="answer_show">3/ <AnswersQuiz answerIndex={26} id = {this.props.match.params.id}/></div>
            </div>
            :
            null
            } 
        
        
            {this.state.index >9
            ?
            <div class="container bg-white container_question">
            <div id="question_show">Question 10: <QuestionQuiz questionIndex={9} id = {this.props.match.params.id}/></div>
            <div id="answer_show">Réponse 1/ <AnswersQuiz answerIndex={27} id = {this.props.match.params.id}/></div>
            <div id="answer_show">Réponse 2/ <AnswersQuiz answerIndex={28} id = {this.props.match.params.id}/></div>
            <div id="answer_show">Réponse 3/ <AnswersQuiz answerIndex={29} id = {this.props.match.params.id}/></div>
            </div>
            :
            null
            }  
            <Link type="button" class="btn btn-success" to='/summary'>Retour au sommaire</Link>
               
        </div>
    </div>
</>
        )
    }
}

export default IndexQuiz;