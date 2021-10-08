import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class ButtonReplay extends React.Component{
    constructor(){
        super()
        this.state={
            errors:[],
            redirect:false,
            _isMounted : false

        }
    }

handleSubmit = event =>{
    event.preventDefault()
    console.log("colonne is_used des catégories updatée")

    axios.put('http://127.0.0.1:8000/api/categorie', {is_used:0})
        .then(res => {this.setState(console.log(res))
                      this.setState({redirect:true})})
        .catch(error =>{
            if(error.response.status === 401){
                this.setState({errors: error.response.data.errors}, ()=>{console.log(this.state)})
            }
            console.log(error.response)
        }) 
}
        
    render(){
        if(this.state.redirect){
            return(<Redirect to="/teamPresentation"/>)
        }

        return(
            <>
                <div>
                    <button type="submit" onClick={this.handleSubmit} className="bouton">Rejouer</button> 
                </div>
                     
   
            </>
        )
    }
}

export default ButtonReplay;