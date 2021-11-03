import React from 'react';
import axios from 'axios';
import LARAVEL_SERVER from '../../Variable';


class QuestionQuiz extends React.Component{
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
                    {this.state.quizzes.map((quiz)=><span>{quiz[1][this.props.questionIndex].questionName}</span>)} 
                </>
        )
    }
}

export default QuestionQuiz;