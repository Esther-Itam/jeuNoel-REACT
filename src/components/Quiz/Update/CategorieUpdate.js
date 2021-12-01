import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import ButtonStandard from '../../Buttons/ButtonStandard';
import LARAVEL_SERVER from '../../Variable';


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
    axios.get(`${LARAVEL_SERVER}/categorieShow/${id}`)
        .then(res => {this.setState({categories:res.data.data[0]})})
        .catch(error => {console.log(error.response)}) 
}


handleSubmit= event =>{
    event.preventDefault()
    console.log("catégorie modifiée")
    let id = this.props.id;
    axios.put(`${LARAVEL_SERVER}/categorie/${id}`, {name:this.state.name})
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
    <div className="containerSummaryUpdate" > 
        <div className="containerUpdate" >  
            <div className="row justify-content-md-center">
            <> 
                <h1>Modification des catégories</h1>
            {this.state.categories.map((categorie)=>
                <>
                <div className="categorieUpdate">
                    <form method="PUT"  onSubmit={this.handleSubmit}>
                    <textarea  className="inputUpdate" onChange={this.handleNameChange}>{categorie.categorieName}</textarea>
                    <div className="buttonStandardUpdate">
                    <ButtonStandard text={"Modifier"}/>
                    </div>
                </form>  
                </div>
           
                </>  
                )}
            </>  
            </div>
        </div>
        </div>
    </>
        )
    }
}

export default CategorieUpdate;