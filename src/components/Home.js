import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
            <>
              <div className="containerBodyHome">
                <div className="containerHome">
                    <h1>Bienvenue au Quizz de Noël</h1>
                    <div className="containerLinkHome">
                    <Link className="linkStandard" to="/register">S'inscrire</Link>
                    <Link className="linkStandard" to="/login">Se connecter</Link>
                    </div>
                </div>
            </div>

            </>
        )
    }
}

export default Home;