import React from 'react';
import axios from 'axios';
import LARAVEL_SERVER from '../../Variable';


class QuestionUpdate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            quiz:"",
            quizzes:[],
            question:'',
            validation:false
        }
    }

componentDidMount(){
    let id = this.props.id;
    axios.get(`${LARAVEL_SERVER}/quiz/${id}`)
        .then(res => {this.setState({quizzes:res.data.data})})
        .catch(error => {console.log(error.response)}) 
    }

handleSubmitQuestion= event =>{
    event.preventDefault()
    console.log("question enregistrée")
    let id = this.props.idQuestion;
    axios.put(`${LARAVEL_SERVER}/question/${id}`, {name:this.state.question})
            .then(res=>{console.log(res.data)
                        this.setState({validation:true})  
            })  
            .catch(error =>{console.log(error.response)}) 
}

handleQuestionChange= event =>{this.setState({question: event.target.value}, ()=>{})}

    render(){
        
        return(
                <>
                <div className="questionUpdate">
                    {this.state.quizzes.map((quiz)=>
                        <form method="PUT"  onSubmit={this.handleSubmitQuestion}>
                            {this.state.validation
                            ?
                            <>
                            <textarea className="inputQuestionUpdate" onChange={this.handleQuestionChange}>{quiz[1][this.props.questionIndex].questionName}</textarea>
                            <p className="indicationQuiz">Votre question a bien été modifiée</p>
                            </>
                            :
                            <>
                            <textarea className="inputQuestionUpdate" onChange={this.handleQuestionChange}>{quiz[1][this.props.questionIndex].questionName}</textarea>
                            <button type="submit" className="buttonValidQuestion">Modifier</button> 
                            </>   
                            }         
                        </form> 
                    )}
                    
                </div>    
                </>
        )
    }
}

export default QuestionUpdate;