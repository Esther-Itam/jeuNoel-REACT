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
        .then(res => {
            this.setState({quizzes:res.data})
             console.log(res.data)
         })
         .catch(error => {
             console.log(error.response)
         }) 
 
      
 
    }
 
 

handleSubmitQuestion= event =>{
    event.preventDefault()
    console.log("answer enregistrée")
    let id = this.props.idQuestion;
    console.log(id);
    console.log(this.state.question);
    axios.put(`http://127.0.0.1:8000/api/question/${id}`, {name:this.state.question})
            .then(res=>{
                console.log(res.data)
            })  
            .catch(error =>{
            if(error.response.status === 401){
                this.setState({errors: error.response.data.errors}, ()=>{
                    console.log(this.state)
                })
            }
            console.log(error.response)
            }) 
}

handleQuestionChange= event =>{
    this.setState({question: event.target.value}, ()=>{
        console.log(this.state)
    })
}

    render(){
        
        return(
                <>
                    {this.state.quizzes.map((quiz)=>
                        <form method="PUT"  onSubmit={this.handleSubmitQuestion}>        
                            <input onChange={this.handleQuestionChange} placeholder={quiz[1][this.props.questionIndex].questionName}/>
                            <button type="submit" class="btn">Modifier</button>
                        </form> 
                    )} 
                </>
        )
    }
}

export default QuestionUpdate;