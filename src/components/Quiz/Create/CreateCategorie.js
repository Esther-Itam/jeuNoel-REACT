import React from 'react';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';
import { Redirect } from 'react-router';

class CreateCategorie extends React.Component{
    constructor(props){
        super(props)
        this.state={
  
            errors:[],
            quizzes:[],
            name:"",
            categorie:"",
            categories:[],
            redirect:false
        }
    }

handleNameChange= event =>{
    this.setState({name: event.target.value}, ()=>{
        console.log(this.state)
    })
}

handleSubmit = event =>{
    event.preventDefault()
    console.log("catégorie créée")

    let bodyFormData = new FormData();
    bodyFormData.set('name', this.state.name)
    bodyFormData.set('is_used', 0)

    axios.post('http://127.0.0.1:8000/api/categorie', bodyFormData)
            .then(res=>{
                console.log(res.data)
                this.setState({redirect:true})
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
        
        if(this.state.redirect){
            return(<Redirect to="/summary"/>)
        }

        return(
            <>
            <Navbar/>
            <div className="containerCategorie" >
                <div>
                <h2 class="text-center my-5">Création d'une catégorie</h2>
                    <form method="POST"  onSubmit={this.handleSubmit}>
                        <div class="mb-3">
                            <label for="name" class="form-label">Nom</label>
                            <input onChange={this.handleNameChange} type="text"id="name"/>
                        </div>
                            <button type="submit" className="btn btn-sucess">Valider</button>
                    </form>

                
                </div>
            </div>
            </>
        )
    }
}

export default CreateCategorie;