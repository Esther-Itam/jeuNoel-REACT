import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import LARAVEL_SERVER from '../Variable';

class ButtonLeaveOk extends React.Component{
    constructor(){
        super()
        this.state={
            errors:[],
            redirect:false,
            _isMounted : false

        }
    }

handleSubmit = event =>{
    event.preventDefault();
    console.log("colonne is_used des catégories updatée et teams supprimées");
    this.usedUpdate();
    this.teamDelete();
}
usedUpdate = () =>{axios.put(`${LARAVEL_SERVER}/categorie`, {is_used:0})
.then(res => {this.setState(console.log(res))
              this.setState({redirect:true})
              window.location.reload(false);
            })
.catch(error =>{
    if(error.response.status === 401){
        this.setState({errors: error.response.data.errors}, ()=>{console.log(this.state)})
    }
    console.log(error.response)
})
}
teamDelete = () =>{axios.delete(`${LARAVEL_SERVER}/teamDelete`)
.then(res=>{console.log(res.data)})  
.catch(error =>{
    if(error.response.status === 401){
        this.setState({errors: error.response.data.errors}, ()=>{})
    }
    console.log(error.response)
})
}
    render(){
        if(this.state.redirect){
            return(<Redirect to="/player"/>)
        }

        return(
            <>
                <button type="submit" className="btn btn-warning" data-bs-dismiss="modal" onClick={this.handleSubmit}>OK</button> 
            </>
        )
    }
}

export default ButtonLeaveOk;