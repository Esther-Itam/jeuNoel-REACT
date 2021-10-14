import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';


class CategorieUpdate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            name:"",
            categories:[],
            redirect:false
        }
    }

componentDidMount(){
    let id = this.props.id;
    axios.get(`http://127.0.0.1:8000/api/categorieShow/${id}`)
        .then(res => {this.setState({categories:res.data.data[0]})})
        .catch(error => {console.log(error.response)}) 
}


handleSubmit= event =>{
    event.preventDefault()
    console.log("catégorie modifiée")
    let id = this.props.id;
    axios.put(`http://127.0.0.1:8000/api/categorie/${id}`, {name:this.state.name})
            .then(res=>{this.setState({redirect:true})})  
            .catch(error =>{console.log(error.response)}) 
}

handleNameChange= event =>{this.setState({name: event.target.value}, ()=>{})} 

render(){
    if(this.state.redirect){
        return(<Redirect to='/summary'/>)
    }
    return(
    <>
        <div className="containerCategorie" >  
            <div className="row justify-content-md-center">
            <> 
                <h1>Modification des catégories</h1>
            {this.state.categories.map((categorie)=>
                <>
                <div className="answerUpdate">
                    <form method="PUT"  onSubmit={this.handleSubmit}>
                    <input onChange={this.handleNameChange} placeholder={categorie.categorieName}/>
                    <button className="buttonValid" type="submit" className="btn">Modifier</button>
                </form>  
                </div>
            
                </>  
                )}
            </>  
            </div>
        </div>
    </>
        )
    }
}

export default CategorieUpdate;