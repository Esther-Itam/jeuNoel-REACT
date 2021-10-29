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
categorieReset=()=>{axios.put('http://127.0.0.1:8000/api/categorie', {is_used:0})
    .then(res => {this.setState(console.log(res))
                    this.setState({redirect:true})})
    .catch(error =>{console.log(error.response)})
} 
    
teamAnswersReset=()=>{axios.delete('http://127.0.0.1:8000/api/teamAnswersDelete')
    .then(res => {this.setState(console.log(res))
                    this.setState({redirect:true})})
    .catch(error =>{console.log(error.response)})
} 
    
handleSubmit = event =>{
    event.preventDefault()
    console.log("colonne is_used des catégories updatée")
    this.categorieReset();
    this.teamAnswersReset();
}
 

    render(){
        if(this.state.redirect){
            return(<Redirect to="/teamPresentation"/>)
        }

        return(
            <>
                <div>
                    <button type="submit" onClick={this.handleSubmit} className="buttonStandard">Rejouer</button> 
                </div>
                     
   
            </>
        )
    }
}

export default ButtonReplay;