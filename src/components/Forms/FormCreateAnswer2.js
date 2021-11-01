import React from 'react';
import axios from 'axios';
import FormCreateAnswer3 from './FormCreateAnswer3';

class FormCreateAnswer2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            answer:[],
            is_valid:0,
            displayAnswer3:false,
            hideButtonAnswer2:false,
            disabled:false
        }
    }

handleAnswerChange   = event =>{this.setState({answer: event.target.value}, ()=>{})}
handleAnswerValid2   = event =>{this.setState({is_valid: parseInt(event.target.value)}, ()=>{})}

handleSubmitAnswer2= event =>{
    event.preventDefault()
    console.log("answer enregistrée")
    let bodyFormData = new FormData();
    bodyFormData.set('answer', this.state.answer)
    bodyFormData.set('is_valid', this.state.is_valid)
    axios.post('http://127.0.0.1:8000/api/answer', bodyFormData)
            .then(res=>{
                this.setState({displayAnswer3:true})
                this.setState({hideButtonAnswer2:true})
                this.setState({disabled:true})
            })  
            .catch(error =>{
            if(error.response.status === 401){
                this.setState({errors: error.response.data.errors}, ()=>{console.log(this.state)})
            }
            console.log(error.response)
            }) 
}


    render(){
        const numVrai=1;
        const numFaux=0; 
        return(
            <>
       
        <form method="POST" onSubmit={this.handleSubmitAnswer2}>
            <label for="answer" class="form-label">Réponse 2: </label>
            {this.state.disabled
            ?
            <>
            <textarea name="answer2" disabled type="text" id="answer"/>
            <select className="select" class="form-select" disabled aria-label="Default select example" onChange={this.handleAnswerValid2}>
                    <option value={numVrai} selected>Vrai/Faux?</option>
                    <option value={numVrai}>Vrai</option>
                    <option value={numFaux}>Faux</option>   
            </select>
            <p className="indicationQuiz">Votre réponse a bien été enregistrée</p>
            </>
            :
            <>
            <textarea name="answer2" onChange={this.handleAnswerChange} type="text" id="answer"/>
            <select className="select" class="form-select" aria-label="Default select example" onChange={this.handleAnswerValid2}>
                    <option value={numVrai} selected>Vrai/Faux?</option>
                    <option value={numVrai}>Vrai</option>
                    <option value={numFaux}>Faux</option>   
            </select>
            </>    
            }
           
             {this.state.hideButtonAnswer2
            ? 
            ""
            :
            <button type="submit" class="btn btn-info">+</button>
            }
        </form>
        {this.state.displayAnswer3
            ? 
            <FormCreateAnswer3/>
            :
            ""           
        }
            </>
        )
    }
}

export default FormCreateAnswer2;