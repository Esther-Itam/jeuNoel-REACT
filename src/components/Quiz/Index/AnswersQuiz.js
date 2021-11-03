import React from 'react';
import axios from 'axios';
import LARAVEL_SERVER from '../../Variable';


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
    axios.get(`${LARAVEL_SERVER}/quiz/${id}`)
    .then(res => {this.setState({quizzes:res.data.data})})
    .catch(error => {console.log(error.response)}) 
}
 
render(){
        
        return(
            <> 
                {this.state.quizzes.map((quiz)=>
                <>
                    <span>{quiz[2][this.props.answerIndex].answerName}</span>
                    {quiz[2][this.props.answerIndex].answerValid===1 ? <span id="good_answer">✔️ Bonne réponse</span> : null} 
                </>    
                )}
          </>        
        )
    }
}

export default AnswersQuiz;