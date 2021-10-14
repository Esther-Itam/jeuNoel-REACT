import React from 'react';
import axios from 'axios';
import FormCreateAnswer1 from './FormCreateAnswer1';

class FormCreateQuestion extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            questions:[],
            question:"",
            is_valid:0,
            displayAnswer1:false,
            hideButtonQuestion:false,
        }
    }

handleQuestionChange = event =>{this.setState({question: event.target.value}, ()=>{})}
handleAnswerChange   = event =>{this.setState({answer: event.target.value}, ()=>{})}

handleSubmitQuestion= event =>{
    event.preventDefault()
    console.log("question enregistrée")
    let bodyFormData = new FormData();
    bodyFormData.set('question', this.state.question)
    axios.post('http://127.0.0.1:8000/api/question', bodyFormData)
            .then(res=>{
                this.setState({displayAnswer1:true})
                this.setState({hideButtonQuestion:true})
            })  
            .catch(error =>{
            if(error.response.status === 401){
                this.setState({errors: error.response.data.errors}, ()=>{console.log(this.state)})
            }
            console.log(error.response)
            }) 
}

    render(){
        return(
            <>
                <form method="POST"  onSubmit={this.handleSubmitQuestion}>
                    <input onChange={this.handleQuestionChange} type="text" id="question"/>
                    {this.state.hideButtonQuestion
                ? 
                ""
                :
                <button type="submit" class="btn btn-danger">Ajouter des réponses</button> 

                    }    
                </form>    

                {this.state.displayAnswer1
                    ? 
                    <FormCreateAnswer1/>
                    :
                    ""           
                }
            </>
        )
    }
}

export default FormCreateQuestion;