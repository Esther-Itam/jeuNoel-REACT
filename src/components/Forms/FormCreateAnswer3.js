import React from 'react';
import axios from 'axios';

class FormCreateAnswer3 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            answer:[],
            is_valid:0,
            hideButtonAnswer3:false,
            disabled:false
        }
    }

handleAnswerChange   = event =>{this.setState({answer: event.target.value}, ()=>{})}
handleAnswerValid3   = event =>{this.setState({is_valid: parseInt(event.target.value)}, ()=>{})}


handleSubmitAnswer3= event =>{
    event.preventDefault()
    console.log("answer enregistrée")
    let bodyFormData = new FormData();
    bodyFormData.set('answer', this.state.answer)
    bodyFormData.set('is_valid', this.state.is_valid)
    axios.post('http://127.0.0.1:8000/api/answer', bodyFormData)
            .then(res=>{this.setState({hideButtonAnswer3:true})
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
        <form method="POST" onSubmit={this.handleSubmitAnswer3}>
            <label for="answer" class="form-label">Réponse 3: </label>
            {this.state.disabled
            ?
            <>
            <textarea name="answer3" disabled type="text" id="answer"/>
            <select className="select" class="form-select" disabled aria-label="Default select example" onChange={this.handleAnswerValid3}>
                    <option value={numVrai} selected>Vrai/Faux?</option>
                    <option value={numVrai}>Vrai</option>
                    <option value={numFaux}>Faux</option>   
            </select>
            <p className="indicationQuiz">Votre réponse a bien été enregistrée</p>
            </> 
            :
            <>
            <textarea name="answer3" onChange={this.handleAnswerChange} type="text" id="answer"/>
            <select className="select" class="form-select" aria-label="Default select example" onChange={this.handleAnswerValid3}>
                    <option value={numVrai} selected>Vrai/Faux?</option>
                    <option value={numVrai}>Vrai</option>
                    <option value={numFaux}>Faux</option>   
            </select>
            </>    
            }
           
            {this.state.hideButtonAnswer3
            ? 
            ""
            :
            <button type="submit" class="btn btn-info">Enregistrer</button>
            }
        </form>
            </>
        )
    }
}

export default FormCreateAnswer3;