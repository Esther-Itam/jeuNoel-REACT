import React from 'react';
import axios from 'axios';

class CreateQA extends React.Component{
    constructor(props){
        super(props)
        this.state={
  
            errors:[],
            questions:[],
            answer:[],
            question:"",
            is_valid:0,
            displayQuestion:false,
            displayAnswer1:false,
            displayAnswer2:false,
            displayAnswer3:false,
            hideButtonQuestion:false,
            hideButtonAnswer1:false,
            hideButtonAnswer2:false,
            hideButtonAnswer3:false,

        }
    }

handleQuestionChange= event =>{

    this.setState({question: event.target.value}, ()=>{
        console.log(this.state)
    })

}

handleAnswerChange= event =>{
    this.setState({answer: event.target.value}, ()=>{
        console.log(this.state)
    })
}


handleSubmitQuestion= event =>{
    event.preventDefault()
    console.log("question enregistrée")

    let bodyFormData = new FormData();
    bodyFormData.set('question', this.state.question)

    axios.post('http://127.0.0.1:8000/api/question', bodyFormData)
            .then(res=>{
                console.log(res.data)
                this.setState({displayAnswer1:true})
                this.setState({hideButtonQuestion:true})


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

handleSubmitAnswer1= event =>{
    event.preventDefault()
    console.log("answer enregistrée")

    let bodyFormData = new FormData();
    bodyFormData.set('answer', this.state.answer)
    bodyFormData.set('is_valid', this.state.is_valid)

    axios.post('http://127.0.0.1:8000/api/answer', bodyFormData)
            .then(res=>{
                console.log(res.data)
                this.setState({displayAnswer2:true})
                this.setState({hideButtonAnswer1:true})

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
handleAnswerValid1= event =>{
    this.setState({is_valid: parseInt(event.target.value)}, ()=>{
        console.log(this.state)
    })
}
handleSubmitAnswer2= event =>{
    event.preventDefault()
    console.log("answer enregistrée")

    let bodyFormData = new FormData();
    bodyFormData.set('answer', this.state.answer)
    bodyFormData.set('is_valid', this.state.is_valid)

    axios.post('http://127.0.0.1:8000/api/answer', bodyFormData)
            .then(res=>{
                console.log(res.data)
                this.setState({displayAnswer3:true})
                this.setState({hideButtonAnswer2:true})

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
handleAnswerValid2= event =>{
    this.setState({is_valid: parseInt(event.target.value)}, ()=>{
        console.log(this.state)
    })
}
handleSubmitAnswer3= event =>{
    event.preventDefault()
    console.log("answer enregistrée")

    let bodyFormData = new FormData();
    bodyFormData.set('answer', this.state.answer)
    bodyFormData.set('is_valid', this.state.is_valid)

    axios.post('http://127.0.0.1:8000/api/answer', bodyFormData)
            .then(res=>{
                console.log(res.data)
                this.setState({hideButtonAnswer3:true})

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
handleAnswerValid3= event =>{
    this.setState({is_valid: parseInt(event.target.value)}, ()=>{
        console.log(this.state)
    })
}


    render(){
        const numVrai=1;
        const numFaux=0; 
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
        <form method="POST"  onSubmit={this.handleSubmitAnswer1}>
            <label for="answer" class="form-label">Réponse 1: </label>
            <input name="answer1" onChange={this.handleAnswerChange} type="text" id="answer"/>
            <select className="select" class="form-select" aria-label="Default select example" onChange={this.handleAnswerValid1}>
                    <option value={numVrai} selected>Vrai/Faux?</option>
                    <option value={numVrai}>Vrai</option>
                    <option value={numFaux}>Faux</option>   
            </select>
            {this.state.hideButtonAnswer1
            ? 
            ""
            :
            <button type="submit" class="btn btn-danger">+</button>
            }
        </form>
            :
            ""           
        }
        {this.state.displayAnswer2
            ? 
        <form method="POST" onSubmit={this.handleSubmitAnswer2}>
            <label for="answer" class="form-label">Réponse 2: </label>
            <input name="answer2" onChange={this.handleAnswerChange} type="text" id="answer"/>
            <select className="select" class="form-select" aria-label="Default select example" onChange={this.handleAnswerValid2}>
                    <option value={numVrai} selected>Vrai/Faux?</option>
                    <option value={numVrai}>Vrai</option>
                    <option value={numFaux}>Faux</option>   
            </select>
             {this.state.hideButtonAnswer2
            ? 
            ""
            :
            <button type="submit" class="btn btn-danger">+</button>
            }
        </form>
            :
            ""           
        }
        {this.state.displayAnswer3
            ? 
        <form method="POST" onSubmit={this.handleSubmitAnswer3}>
            <label for="answer" class="form-label">Réponse 3: </label>
            <input name="answer3" onChange={this.handleAnswerChange} type="text" id="answer"/>
            <select className="select" class="form-select" aria-label="Default select example" onChange={this.handleAnswerValid3}>
                    <option value={numVrai} selected>Vrai/Faux?</option>
                    <option value={numVrai}>Vrai</option>
                    <option value={numFaux}>Faux</option>   
            </select>
            {this.state.hideButtonAnswer3
            ? 
            ""
            :
            <button type="submit" class="btn btn-danger">Enregistrer</button>
            }
        </form>
            :
            ""           
        }
            </>
        )
    }
}

export default CreateQA;