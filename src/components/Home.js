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
                <div className="container w-50 homeContainer">
                    <h1>Bienvenue au Quizz de Noël</h1>
                    <div className="container">
                    <button type="button" className="btn btn-danger"><Link to="/register">S'inscrire</Link></button>
                    <button type="button" className="btn btn-danger"><Link to="/login">Se connecter</Link></button>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;