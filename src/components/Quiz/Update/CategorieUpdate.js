import React from 'react';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
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
  let id = this.props.match.params.id;

        axios.get(`http://127.0.0.1:8000/api/categorieShow/${id}`)
        .then(res => {
            this.setState({categories:res.data.data[0]})
             console.log(res.data.data)

         })
         .catch(error => {
             console.log(error.response)
         }) 
    }


handleSubmit= event =>{
    event.preventDefault()
    console.log("catégorie modifiée")
    let id = this.props.match.params.id;

    axios.put(`http://127.0.0.1:8000/api/categorie/${id}`, {name:this.state.name})
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

handleNameChange= event =>{
    this.setState({name: event.target.value}, ()=>{
        console.log(this.state)
    })
}    
    render(){
        if(this.state.redirect){
            return(<Redirect to='/summary'/>)
        }
        return(
<>
    <Navbar/>

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