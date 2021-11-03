import React from 'react';
import axios from 'axios';
import CreateQA from '../Quiz/Create/CreateQA';
import LARAVEL_SERVER from '../Variable';

class FormCreateQuiz extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            name:"",
            categorie:"",
            categories:[],
            displayQuestion:false,
            disabled:false
        }
    }

componentDidMount(){
    axios.get(`${LARAVEL_SERVER}/categorie`)
    .then(res => {this.setState({categories:res.data.data})})
    .catch(error => {console.log(error.response)})
}

handleNameChange= event =>{this.setState({name: event.target.value}, ()=>{})}
handleCategorieChange= event =>{this.setState({categorie: event.target.value}, ()=>{})}

handleSubmit = event =>{
    event.preventDefault()
    console.log("quiz enregistré")
    let bodyFormData = new FormData();
    bodyFormData.set('name', this.state.name)
    bodyFormData.set('categorie', this.state.categorie)
    axios.post(`${LARAVEL_SERVER}/quiz`, bodyFormData)
            .then(res=>{
                localStorage.setItem('token', res.data.api_token)
                this.setState({redirect:true})
                this.setState({displayQuestion:true})
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
        return(
            <>
     <div className="containerSummaryQACreate" > 
        <div className="containerQuizCreate" >  
            <div className="row justify-content-md-center">
            <h2 className="text-center my-5">Création d'un Quiz</h2>
            <div className="container bg-white container_question">
            <form method="POST"  onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label">Nom</label>
                    {this.state.disabled
                    ?
                    <>
                    <input className="createNameQuiz" disabled type="text" className={`form-control ${this.state.errors && this.state.errors.name ? "is-invalid" : ""}`} id="name"/>
                    <p className="indicationQuiz">Titre du quiz enregistré</p>
                    </>
                    :
                    <>
                    <input className="createNameQuiz" onChange={this.handleNameChange} type="text" className={`form-control ${this.state.errors && this.state.errors.name ? "is-invalid" : ""}`} id="name"/>
                    </>
                    }
                    {this.state.errors && this.state.errors.name ? <div className="text-danger invalide-feedback">{this.state.errors['name']}</div> : ''}
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Catégorie</label>
                    {this.state.disabled
                    ?
                    <>
                    <select className="form-select" disabled aria-label="Default select example" onChange={this.handleCategorieChange}>
                    <option selected>Choississez la catégorie</option>
                    {this.state.categories.map((categorie)=>
                    <option value={categorie.id}>{categorie.name}</option>
                    )}        
                    </select>
                    <p className="indicationQuiz">Catégorie choisie enregistrée</p>           
                    </>
                    :
                    <select className="form-select" aria-label="Default select example" onChange={this.handleCategorieChange}>
                        <option selected>Choississez la catégorie</option>
                        {this.state.categories.map((categorie)=>
                        <option value={categorie.id}>{categorie.name}</option>
                        )} 
                    </select>
                    }
                    </div>
                    {this.state.disabled
                    ?
                    ""
                    :
                    <button type="submit" className="btn btn-info">Ajouter des questions/réponses</button>
                    }
            </form>
            </div>
            {this.state.displayQuestion ? <CreateQA/> : "" }
        </div>
    </div>
    </div>
            </>
        ) 
    }
}

export default FormCreateQuiz;