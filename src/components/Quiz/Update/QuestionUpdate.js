import React from 'react';
import axios from 'axios';


class QuestionUpdate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            quiz:"",
            quizzes:[],
            question:''
        }
    }

componentDidMount(){
    let id = this.props.id;
    axios.get(`http://127.0.0.1:8000/api/quiz/${id}`)
        .then(res => {this.setState({quizzes:res.data.data})})
        .catch(error => {console.log(error.response)}) 
    }

handleSubmitQuestion= event =>{
    event.preventDefault()
    console.log("question enregistrée")
    let id = this.props.idQuestion;
    axios.put(`http://127.0.0.1:8000/api/question/${id}`, {name:this.state.question})
            .then(res=>{console.log(res.data)})  
            .catch(error =>{console.log(error.response)}) 
}

handleQuestionChange= event =>{this.setState({question: event.target.value}, ()=>{})}

    render(){
        
        return(
                <>
                <div className="questionUpdate">
                    {this.state.quizzes.map((quiz)=>
                        <form method="PUT"  onSubmit={this.handleSubmitQuestion}>        
                            <input onChange={this.handleQuestionChange} placeholder={quiz[1][this.props.questionIndex].questionName}/>
                            <button type="submit" className="buttonValid">Modifier</button>
                        </form> 
                    )} 
                </div>    
                </>
        )
    }
}

export default QuestionUpdate;