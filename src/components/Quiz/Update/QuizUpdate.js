import React from 'react';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import QuestionUpdate from './QuestionUpdate';
import AnswersUpdate from './AnswersUpdate';
import { Link } from 'react-router-dom';


class QuizUpdate extends React.Component{
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
    <Navbar/>

    <div className="containerCategorie" >  
        <div className="row justify-content-md-center">
            {this.state.quizzes.map((quiz)=>
            <>
                <h1>Quiz: {quiz[0][0].quizName}</h1>
         
            <div className="container bg-white container_question">
                <div id="question_show">Question 1: <QuestionUpdate questionIndex={0} id = {this.props.match.params.id} idQuestion = {quiz[1][0].questionId}/></div>
                <div id="answer_show">1/ <AnswersUpdate answerIndex={0} id = {this.props.match.params.id} idAnswer = {quiz[2][0].answerId}/></div>
                <div id="answer_show">2/ <AnswersUpdate answerIndex={1} id = {this.props.match.params.id} idAnswer = {quiz[2][1].answerId}/></div>
                <div id="answer_show">3/ <AnswersUpdate answerIndex={2} id = {this.props.match.params.id} idAnswer = {quiz[2][2].answerId}/></div>
            </div>

            {this.state.index >1
            ?
            <div className="container bg-white container_question">
            <div id="question_show">Question 2: <QuestionUpdate questionIndex={1} id = {this.props.match.params.id} idQuestion = {quiz[1][1].questionId}/></div>
            <div id="answer_show">1/ <AnswersUpdate answerIndex={3} id = {this.props.match.params.id} idAnswer = {quiz[2][3].answerId}/></div>
            <div id="answer_show">2/ <AnswersUpdate answerIndex={4} id = {this.props.match.params.id} idAnswer = {quiz[2][4].answerId}/></div>
            <div id="answer_show">3/ <AnswersUpdate answerIndex={5} id = {this.props.match.params.id} idAnswer = {quiz[2][5].answerId}/></div>
            </div>
            :
            null
            }

            {this.state.index >2
            ?
            <div className="container bg-white container_question">
            <div id="question_show">Question 3: <QuestionUpdate questionIndex={2} id = {this.props.match.params.id} idQuestion = {quiz[1][2].questionId}/></div>
            <div id="answer_show">1/ <AnswersUpdate answerIndex={6} id = {this.props.match.params.id} idAnswer = {quiz[2][6].answerId}/></div>
            <div id="answer_show">2/ <AnswersUpdate answerIndex={7} id = {this.props.match.params.id} idAnswer = {quiz[2][7].answerId}/></div>
            <div id="answer_show">3/ <AnswersUpdate answerIndex={8} id = {this.props.match.params.id} idAnswer = {quiz[2][8].answerId}/></div>
            </div>
            :
            null
            }

            {this.state.index >3
            ?
            <div className="container bg-white container_question">
            <div id="question_show">Question 4: <QuestionUpdate questionIndex={3} id = {this.props.match.params.id} idQuestion = {quiz[1][3].questionId}/></div>
            <div id="answer_show">1/ <AnswersUpdate answerIndex={9} id = {this.props.match.params.id} idAnswer = {quiz[2][9].answerId}/></div>
            <div id="answer_show">2/ <AnswersUpdate answerIndex={10} id = {this.props.match.params.id} idAnswer = {quiz[2][10].answerId}/></div>
            <div id="answer_show">3/ <AnswersUpdate answerIndex={11} id = {this.props.match.params.id} idAnswer = {quiz[2][11].answerId}/></div>
            </div>
            :
            null
            } 

            {this.state.index >4
            ?
            <div className="container bg-white container_question">
            <div id="question_show">Question 5: <QuestionUpdate questionIndex={4} id = {this.props.match.params.id} idQuestion = {quiz[1][4].questionId}/></div>
            <div id="answer_show">1/ <AnswersUpdate answerIndex={12} id = {this.props.match.params.id} idAnswer = {quiz[2][12].answerId}/></div>
            <div id="answer_show">2/ <AnswersUpdate answerIndex={13} id = {this.props.match.params.id} idAnswer = {quiz[2][13].answerId}/></div>
            <div id="answer_show">3/ <AnswersUpdate answerIndex={14} id = {this.props.match.params.id} idAnswer = {quiz[2][14].answerId}/></div>
                </div>
            :
            null
            } 

            {this.state.index >5
            ?
            <div className="container bg-white container_question">
            <div id="question_show">Question 6: <QuestionUpdate questionIndex={5} id = {this.props.match.params.id} idQuestion = {quiz[1][5].questionId}/></div>
            <div id="answer_show">1/ <AnswersUpdate answerIndex={15} id = {this.props.match.params.id} idAnswer = {quiz[2][15].answerId}/></div>
            <div id="answer_show">2/ <AnswersUpdate answerIndex={16} id = {this.props.match.params.id} idAnswer = {quiz[2][16].answerId}/></div>
            <div id="answer_show">3/ <AnswersUpdate answerIndex={17} id = {this.props.match.params.id} idAnswer = {quiz[2][17].answerId}/></div>
            </div>
            :
            null
            } 

            {this.state.index >6
            ?
            <div className="container bg-white container_question">
            <div id="question_show">Question 7: <QuestionUpdate questionIndex={6} id = {this.props.match.params.id} idQuestion = {quiz[1][6].questionId}/></div>
            <div id="answer_show">1/ <AnswersUpdate answerIndex={18} id = {this.props.match.params.id} idAnswer = {quiz[2][18].answerId}/></div>
            <div id="answer_show">2/ <AnswersUpdate answerIndex={19} id = {this.props.match.params.id} idAnswer = {quiz[2][19].answerId}/></div>
            <div id="answer_show">3/ <AnswersUpdate answerIndex={20} id = {this.props.match.params.id} idAnswer = {quiz[2][20].answerId}/></div>
            </div>
            :
            null
            } 

            {this.state.index >7
            ?
            <div className="container bg-white container_question">
            <div id="question_show">Question 8: <QuestionUpdate questionIndex={7} id = {this.props.match.params.id} idQuestion = {quiz[1][7].questionId}/></div>
            <div id="answer_show">1/ <AnswersUpdate answerIndex={21} id = {this.props.match.params.id} idAnswer = {quiz[2][21].answerId}/></div>
            <div id="answer_show">2/ <AnswersUpdate answerIndex={22} id = {this.props.match.params.id} idAnswer = {quiz[2][22].answerId}/></div>
            <div id="answer_show">3/ <AnswersUpdate answerIndex={23} id = {this.props.match.params.id} idAnswer = {quiz[2][23].answerId}/></div>
            </div>
            :
            null
            }  

            {this.state.index >8
            ?
            <div className="container bg-white container_question">
            <div id="question_show">Question 9: <QuestionUpdate questionIndex={8} id = {this.props.match.params.id} idQuestion = {quiz[1][8].questionId}/></div>
            <div id="answer_show">1/ <AnswersUpdate answerIndex={24} id = {this.props.match.params.id} idAnswer = {quiz[2][24].answerId}/></div>
            <div id="answer_show">2/ <AnswersUpdate answerIndex={25} id = {this.props.match.params.id} idAnswer = {quiz[2][25].answerId}/></div>
            <div id="answer_show">3/ <AnswersUpdate answerIndex={26} id = {this.props.match.params.id} idAnswer = {quiz[2][26].answerId}/></div>
            </div>
            :
            null
            } 
        
        
            {this.state.index >9
            ?
            <div className="container bg-white container_question">
            <div id="question_show">Question 10: <QuestionUpdate questionIndex={9} id = {this.props.match.params.id} idQuestion = {quiz[1][9].questionId}/></div>
            <div id="answer_show">Réponse 1/ <AnswersUpdate answerIndex={27} id = {this.props.match.params.id} idAnswer = {quiz[2][27].answerId}/></div>
            <div id="answer_show">Réponse 2/ <AnswersUpdate answerIndex={28} id = {this.props.match.params.id} idAnswer = {quiz[2][28].answerId}/></div>
            <div id="answer_show">Réponse 3/ <AnswersUpdate answerIndex={29} id = {this.props.match.params.id} idAnswer = {quiz[2][29].answerId}/></div>
            </div>
            :
            null
            }
        </> 
        )}  
        <Link type="button" className="btn btn-success" to='/summary'>Retour au sommaire</Link>
              
        </div>
    </div>
</>
        )
    }
}

export default QuizUpdate;