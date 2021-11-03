import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import ButtonGame from './ButtonGame';
import LARAVEL_SERVER from '../Variable';

class ButtonColor extends React.Component{
    constructor(){
        super()
        this.state={
            errors:[],
            redirect:false,
            colorsDisabled:[],
            is_used:1,
            colors:{},
            redirect:false,
            _isMounted : false

        }
    }
componentDidMount(){
    this._isMounted = true;
    let id = this.props.idColor;
    axios.get(`${LARAVEL_SERVER}/color/${id}`)
        .then(res => {this.setState({colorsDisabled:res.data})})
        .catch(error => {console.log(error.response)})

    axios.put(`${LARAVEL_SERVER}/color/${id}`)
        .then(res => {this.setState({colorsDisabled:res.data})})
        .catch(error => { console.log(error.response)})}

handleIsUsedChange= event =>{this.setState({is_used: parseInt(event.target.value)}, ()=>{})}
componentWillUnmount() {this._isMounted = false;}

handleSubmit = event =>{
    let id = this.props.idColor;
    console.log(id)
    event.preventDefault()
    console.log("couleur updatée")
    this.setState({redirect:true})
    axios.put(`${LARAVEL_SERVER}/color/${id}`, {is_used:1})
        .then(res => {this.setState(res)
        console.log(res)
        })
        .catch(error =>{console.log(error.response)}) 
}

    render(){
        if(this.state.redirect){
            return(<Redirect to="/TeamPresentation"/>)
        }

        return(
                <>
                <form method="PUT" onSubmit={this.handleSubmit}>
                    <ButtonGame onClick={this.handleIsUsedChange} titleButton={"Valider"}/>
                </form>    
                </>
        )
    }
}

export default ButtonColor;