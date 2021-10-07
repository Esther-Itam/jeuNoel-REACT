import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

class CategorieControl extends React.Component{
    constructor(props){
        super(props)
        this.state={
  
            errors:[],
            categories:[],
            categorie:'',
            redirect:false


        }
    }

componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/categorie')
        .then(res => {
           this.setState({categories:res.data.data})
            console.log(res.data.data)
        })
        .catch(error => {
            console.log(error.response)
        })
    }

handleSubmit = (event, id) =>{
    event.preventDefault()
    console.log("Catégorie supprimée")
    axios.delete(`http://127.0.0.1:8000/api/categorie/${id}`)
            .then(res=>{
                console.log(res.data)
                this.setState({redirect:true})
                window.location.reload(false);

            })  
            .catch(error =>{
                if(error.response.status === 401){
                    this.setState({errors: error.response.data.errors}, ()=>{
                    })
                }
                console.log(error.response)
            })
                
}            
    
            

    render(){
        
        if(this.state.redirect){
            return(<Redirect to='/summary'/>)
        }
        return(
            <>
               {this.state.categories.length===0
                ?
                <div className="no_categorie_show">Il n'y a pas encore de catégories créées</div>
                :
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Editer</th>
                        <th scope="col">Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.categories.map((categorie)=>
                        <tr>
                        <th scope="row" key={categorie.id}>{categorie.id}</th>
                        <td key={categorie.name}>{categorie.name}</td>
                        <td><Link to={`/categorieUpdate/${categorie.id}`} class="btn btn-success">Modifier</Link></td>
                        <td><button type='submit' onClick={(event) => this.handleSubmit(event, categorie.id)} class="btn btn-success">Supprimer</button></td>
                        </tr>   
                    )}     
                    </tbody>
                </table> 
                } 
                <div>
                {this.state.categories.length>5
                ?
                <div>Le nombre maximum de catégorie a été créé</div>
                :
                <Link type="button" class="btn btn-success" to='/categorieCreate'>Créer</Link>
                }
                </div> 
     
            </>
        )
    }
}

export default CategorieControl;