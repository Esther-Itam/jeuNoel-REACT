import React from 'react';
import axios from 'axios';
import FormCreateAnswer2 from './FormCreateAnswer2';

class FormCreateAnswer1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            answer:[],
            is_valid:0,
            displayAnswer2:false,
            hideButtonAnswer1:false,
        }
    }

handleAnswerChange   = event =>{this.setState({answer: event.target.value}, ()=>{})}
handleAnswerValid1   = event =>{this.setState({is_valid: parseInt(event.target.value)}, ()=>{})}

handleSubmitAnswer1= event =>{
    event.preventDefault()
    console.log("answer enregistrée")
    let bodyFormData = new FormData();
    bodyFormData.set('answer', this.state.answer)
    bodyFormData.set('is_valid', this.state.is_valid)
    axios.post('http://127.0.0.1:8000/api/answer', bodyFormData)
            .then(res=>{
                this.setState({displayAnswer2:true})
                this.setState({hideButtonAnswer1:true})
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
                <form method="POST"  onSubmit={this.handleSubmitAnswer1}>
                    <label for="answer" class="form-label">Réponse 1: </label>
                    <input name="answer1" onChange={this.handleAnswerChange} type="text" id="answer"/>
                    <select className="select" class="form-select" aria-label="Default select example" onChange={this.handleAnswerValid1}>
                            <option value={numVrai} selected>Vrai/Faux?</option>
                            <option value={numVrai}>Vrai</option>
                            <option value={numFaux}>Faux</option>   
                    </select>
                    {this.state.hideButtonAnswer1 ? "" : <button type="submit" class="btn btn-danger">+</button>}
                </form>
             {this.state.displayAnswer2
            ? 
            <FormCreateAnswer2/>
            :
            ""           
        }
            </>
        )
    }
}

export default FormCreateAnswer1;