import React from 'react';
import axios from 'axios';

class ButtonColor extends React.Component{
    constructor(){
        super()
        this.state={
            errors:[],
            redirect:false,
            colorsDisabled:[],
            is_used:1,
            colors:{},
            _isMounted : false

        }
    }
componentDidMount(){
    this._isMounted = true;
    let id = this.props.idColor;
    axios.get(`http://127.0.0.1:8000/api/color/${id}`)
    .then(res => {
        this.setState({colorsDisabled:res.data})

    })
    .catch(error => {
        console.log(error.response)
    }) 
    axios.put(`http://127.0.0.1:8000/api/color/${id}`)
    .then(res => {
        this.setState({colorsDisabled:res.data})
    })
    .catch(error => {
        console.log(error.response)
    }) 
  }
handleIsUsedChange= event =>{
    this.setState({is_used: parseInt(event.target.value)}, ()=>{
        console.log(this.state)
    
    })
  
}
componentWillUnmount() {
    this._isMounted = false;
   
    
}

handleSubmit = event =>{
    let id = this.props.idColor;
    event.preventDefault()
    console.log("couleur updatée")

    axios.put(`http://127.0.0.1:8000/api/color/${id}`, {is_used:1})
        .then(res => {
            this.setState(console.log(res))
           
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
                <>

                <form method="PUT" onSubmit={this.handleSubmit}>
                    <button type="submit" onClick={this.handleIsUsedChange} value={1} className="bouton">Valider</button>
                    </form>    
                </>
                     
   
            </>
        )
    }
}

export default ButtonColor;