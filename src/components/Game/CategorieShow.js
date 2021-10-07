import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import NavbarTeam from '../Navbar/NavbarTeam';

class CategorieShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
  
            errors:[],
            categoriesShow:[],
            categorie:"",
            redirect:false
        }
    }

componentDidMount(){
    let id = this.props.match.params.id;
    console.log(id)
    axios.get(`http://127.0.0.1:8000/api/categorieShow/${id}`)
        .then(res => {
            this.setState({categoriesShow:res.data.data})
             console.log(res.data.data)
        })
        .catch(error => {
            console.log(error.response)
        })
    }

handleSubmit = event =>{
    event.preventDefault()
    console.log("catégorie disabled")
    let id = this.props.match.params.id;
     console.log(id)
   axios.put(`http://127.0.0.1:8000/api/categorie/${id}`, {is_used:1})
            .then(res=>{
                console.log(res.data)
               this.setState({redirect:true})

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
        let id = this.props.match.params.id;

        if(this.state.redirect){
            return(<Redirect to={`/quizShow/${id}`}/>)
        }

        return(
            <>
                <NavbarTeam/>
                <div className="containerCategorie" >
                <div class="row justify-content-md-center">
                    <div class='row'>
                            <div class="col-12">
                        
                             {this.state.categoriesShow.map((categorie)=>
                            <>
                            <h1>La catégorie choisie est {categorie[0].categorieName}</h1>
                            <form method="PUT" onSubmit={this.handleSubmit}>
                                    <button class="categorieButton" type="submit" value={categorie[0].categorieName}>Commencer</button>
                            </form>
                            </>
                            )} 
                             </div>
                             </div>
                        </div>
                </div>
            </>
        )
    }
}

export default CategorieShow;