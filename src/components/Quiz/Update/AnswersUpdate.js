import React from 'react';
import axios from 'axios';


class AnswersUpdate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            quiz:"",
            quizzes:[],
            answer:"",
            is_valid:0
        }
    }

componentDidMount(){
    let id = this.props.id;
    axios.get(`http://127.0.0.1:8000/api/quiz/${id}`)
        .then(res => {this.setState({quizzes:res.data.data})})
        .catch(error => {console.log(error.response)}) 
}
 
handleSubmitAnswer= event =>{
    event.preventDefault()
    console.log("réponse enregistrée")
    let id = this.props.idAnswer;
    axios.put(`http://127.0.0.1:8000/api/answer/${id}`, {name:this.state.answer}, {is_valid:this.state.is_valid})
            .then(res=>{console.log(res.data)})  
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
                    <input className="inputAnswersUpdate" onChange={this.handleAnswerChange} placeholder={quiz[2][this.props.answerIndex].answerName}/>
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
               </form>  
            </div>  
            )}
          </>        
        )
    }
}

export default AnswersUpdate;