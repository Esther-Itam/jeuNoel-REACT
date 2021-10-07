import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateQA from './CreateQA';

class CreateQuiz extends React.Component{
    constructor(props){
        super(props)
        this.state={
  
            errors:[],
            quizzes:[],
            name:"",
            categorie:"",
            categories:[],
            displayQuestion:false,
        }
    }

componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/categorie')
    .then(res => {
        this.setState({categories:res.data.data})

    })
    .catch(error => {
        console.log(error.response)
    })

    }

handleNameChange= event =>{
    this.setState({name: event.target.value}, ()=>{
        console.log(this.state)
    })
}

handleCategorieChange= event =>{
    this.setState({categorie: event.target.value}, ()=>{
        console.log(this.state)
    })
}

handleSubmit = event =>{
    event.preventDefault()
    console.log("quiz enregistré")

    let bodyFormData = new FormData();
    bodyFormData.set('name', this.state.name)
    bodyFormData.set('categorie', this.state.categorie)

    axios.post('http://127.0.0.1:8000/api/quiz', bodyFormData)
            .then(res=>{
                console.log(res.data)
                localStorage.setItem('token', res.data.api_token)
                this.setState({redirect:true})
                this.setState({displayQuestion:true})

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



    render(){
        return(
            <>
    <Navbar/>
    <div className="containerCategorie" >
        <div>
        <h2 class="text-center my-5">Création d'un Quiz</h2>
            <form method="POST"  onSubmit={this.handleSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label">Nom</label>
                    <input onChange={this.handleNameChange} type="text" class={`form-control ${this.state.errors && this.state.errors.name ? "is-invalid" : ""}`} id="name"/>
                    {this.state.errors && this.state.errors.name ? <div class="text-danger invalide-feedback">{this.state.errors['name']}</div> : ''}
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Catégorie</label>
                    <select class="form-select" aria-label="Default select example" onChange={this.handleCategorieChange}>
                        <option selected>Choississez la catégorie</option>
                        {this.state.categories.map((categorie)=>
                        <option value={categorie.id}>{categorie.name}</option>
                        )}        
                    </select>
                    </div>
                    <button type="submit" className="btn btn-sucess">Ajouter des questions/réponses</button>
            </form>
            {this.state.displayQuestion
            ?
            <>
            <div class="container bg-white container_question">Question 1: <CreateQA/></div>
            <div class="container bg-white container_question">Question 2: <CreateQA/></div>
            <div class="container bg-white container_question">Question 3: <CreateQA/></div>
            <div class="container bg-white container_question">Question 4: <CreateQA/></div>
            <div class="container bg-white container_question">Question 5: <CreateQA/></div>
            <div class="container bg-white container_question">Question 6: <CreateQA/></div>
            <div class="container bg-white container_question">Question 7: <CreateQA/></div>
            <div class="container bg-white container_question">Question 8: <CreateQA/></div>
            <div class="container bg-white container_question">Question 9: <CreateQA/></div>
            <div class="container bg-white container_question">Question 10: <CreateQA/></div>
            <Link class="btn btn-danger" to="/summary">Enregistrer</Link>

            </>    
            :
            ""
            }
        
        </div>
    </div>
            </>
        )
    }
}

export default CreateQuiz;