import React from 'react';
import axios from 'axios';
import LARAVEL_SERVER from '../../Variable';


class AnswersUpdate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            quiz:"",
            quizzes:[],
            answer:"",
            is_valid:0,
            validation:false
        }
    }

componentDidMount(){
    let id = this.props.id;
    axios.get(`${LARAVEL_SERVER}/quiz/${id}`)
        .then(res => {this.setState({quizzes:res.data.data})})
        .catch(error => {console.log(error.response)}) 
}
 
handleSubmitAnswer= event =>{
    event.preventDefault()
    console.log("réponse enregistrée")
    let id = this.props.idAnswer;
    axios.put(`${LARAVEL_SERVER}/answer/${id}`, {is_valid:this.state.is_valid})
    axios.put(`${LARAVEL_SERVER}/answer/${id}`,{name:this.state.answer})
            .then(res=>{console.log(res.data)
                        this.setState({validation:true}) 
            })  
            .catch(error =>{console.log(error.response)}) 
}

handleAnswerChange= event =>{this.setState({answer: event.target.value}, ()=>{})}
handleAnswerValid= event =>{this.setState({is_valid: parseInt(event.target.value)}, ()=>{})}

  
    render(){
    const numVrai=1;
    const numFaux=0;    
        return(
            <> 
            {this.state.quizzes.map((quiz)=>
            <div className="answerUpdate">
                <form method="PUT"  onSubmit={this.handleSubmitAnswer}>
                   
                    {this.state.validation
                    ?
                    <>
                     <textarea className="inputAnswersUpdate" onChange={this.handleAnswerChange}>{quiz[2][this.props.answerIndex].answerName}</textarea>
                    <select className="select" class="form-select" aria-label="Default select example" onChange={this.handleAnswerValid}>
                        {quiz[2][this.props.answerIndex].answerValid===1
                        ?
                        <option value={numVrai} selected>Actuellement Vrai</option>
                        :
                        <option value={numFaux} selected>Actuellement Faux</option>
                        }
                        <option value={numVrai}>Vrai</option>
                        <option value={numFaux}>Faux</option>   
                    </select>
                    <p className="indicationQuiz">Votre réponse a bien été modifiée</p>
                    </>
                    :
                    <>
                    <textarea className="inputAnswersUpdate" onChange={this.handleAnswerChange}>{quiz[2][this.props.answerIndex].answerName}</textarea>
                    <select className="select" class="form-select" aria-label="Default select example" onChange={this.handleAnswerValid}>
                        {quiz[2][this.props.answerIndex].answerValid===1
                        ?
                        <option value={numVrai} selected>Actuellement Vrai</option>
                        :
                        <option value={numFaux} selected>Actuellement Faux</option>
                        }
                        <option value={numVrai}>Vrai</option>
                        <option value={numFaux}>Faux</option>   
                    </select>
                    <button className="buttonValid" type="submit">Modifier</button>   
                    </> 
                    } 
               </form>  
            </div>  
            )}
             
          </>        
        )
    }
}

export default AnswersUpdate;