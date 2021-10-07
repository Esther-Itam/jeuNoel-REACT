import React from 'react';
import axios from 'axios';


class AnswersQuiz extends React.Component{
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
        .then(res => {
            this.setState({quizzes:res.data})
             console.log(res.data)
         })
         .catch(error => {
             console.log(error.response)
         }) 
 
      
 
    }
 

  
    render(){
        
        return(
            <> 
            {this.state.quizzes.map((quiz)=>
            <>
                <span>
                {quiz[2][this.props.answerIndex].answerName}
                </span>
                {quiz[2][this.props.answerIndex].answerValid===1
                ?
                <span id="good_answer">✔️ Bonne réponse</span>
                :
                null
                } 
   
            </>    
            )}
          </>        
        )
    }
}

export default AnswersQuiz;