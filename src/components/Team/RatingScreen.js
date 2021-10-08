import React from 'react';
import NavbarTeam from '../Navbar/NavbarTeam';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ButtonReplay from '../Buttons/ButtonReplay';
import ButtonLeave from '../Buttons/ButtonLeave';
import TableResult from '../Tables/TableResult';


class RatingScreen extends React.Component{
    constructor(){
        super()
        this.state={
            results:[],
            categories:[]
        }
    }

    
componentDidMount(){

    axios.get('http://127.0.0.1:8000/api/results')
         .then(res=>{
            this.setState({results:res.data.data[0]})
             console.log(res.data.data[0])

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
        return(
            <>
                <NavbarTeam/>
                <div  className="containerCategorie">
                    <div>
                    <h1>Classement final des équipes</h1>
                     <TableResult/>  
                    </div>
                    <div>
                    <ButtonReplay/>   
                     <ButtonLeave/> 
                    </div>
 
                </div>
            </>
        )
    }
}

export default RatingScreen;