import React from 'react';
import { Link } from 'react-router-dom';
import {GoogleLoginButton} from 'react-social-login-buttons';


class Home extends React.Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        const googleStyle={
            width:285, 
            height:70, 
            borderRadius:5, 
            backgroundColor:'white', 
            color:'red', 
            boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'
        }
        return(
            <>
              <div className="containerBodyHome">
                <div className="containerHome">
                    <h1>Bienvenue au Quizz de Noël</h1>
                    <div className="containerLinkHome">
                    <Link className="linkStandard" to="/register">S'inscrire</Link>
                    <Link className="linkStandard" to="/login">Se connecter</Link>
                    <a className="linkGoogle" href="http://127.0.0.1:8000/auth/redirect/google"><GoogleLoginButton style={googleStyle}/></a>
                    </div>
                </div>
            </div>

            </>
        )
    }
}

export default Home;