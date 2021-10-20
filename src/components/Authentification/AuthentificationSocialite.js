import React from 'react';
import { Redirect } from 'react-router';



class AuthentificationSocialite extends React.Component{

    constructor(){
        super()
        this.state={
            redirect:false,
            errors:[],
        }
    }
componentDidMount(){
    console.log(this.props.match.params)
    let userToken = this.props.match.params.token
    let provider = this.props.match.params.provider
    if(!userToken || !provider){
        this.setState({redirect:true})
    }

    localStorage.setItem('token', userToken)
    this.setState({redirect:true})
}

    render(){
        if(this.state.redirect){
            return(<Redirect to='/player'/>)
        }
        return(
            <>                
            </>
        )
    }
}

export default AuthentificationSocialite;