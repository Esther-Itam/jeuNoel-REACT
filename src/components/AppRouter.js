import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Home';
import Register from './Authentification/Register';
import Login from './Authentification/Login';
import Account from './Authentification/Account';

import Player from './Game/Player';
import StartGame from './Game/StartGame';
import Random from './Game/Random';
import Categories from './Game/Categories';
import CategorieShow from './Game/CategorieShow';
import Waiting from './Game/Waiting';

import TeamBuilding from './Team/TeamBuilding';
import TeamPresentation from './Team/TeamPresentation';
import Result from './Team/Result';
import ResultTeams from './Team/ResultTeams';

import Summary from './Quiz/Show/Summary';
import QuizControl from './Quiz/Show/QuizControl';
import CategorieControl from './Quiz/Show/CategorieControl';
import CreateQuiz from './Quiz/Create/CreateQuiz';
import CreateCategorie from './Quiz/Create/CreateCategorie';

import ShowQuiz from './Quiz/Show/ShowQuiz';
import IndexQuiz from './Quiz/Show/IndexQuiz';
import QuizUpdate from './Quiz/Update/QuizUpdate';
import CategorieUpdate from './Quiz/Update/CategorieUpdate';



class AppRouter extends React.Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/player" component={Player}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/teamBuilding" component={TeamBuilding}/>
                <Route exact path="/teamPresentation" component={TeamPresentation}/>
                <Route exact path="/startGame" component={StartGame}/>
                <Route exact path="/random" component={Random}/>
                <Route exact path="/categorie" component={Categories}/>
                <Route exact path="/waiting" component={Waiting}/>
                <Route exact path="/account" component={Account}/>
                <Route exact path="/quizIndex/:id" component={IndexQuiz}/>
                <Route exact path="/quizUpdate/:id" component={QuizUpdate}/>
                <Route exact path="/categorieUpdate/:id" component={CategorieUpdate}/>
                <Route exact path="/quizCreate" component={CreateQuiz}/>
                <Route exact path="/categorieCreate" component={CreateCategorie}/>
                <Route exact path="/quizShow/:id" component={ShowQuiz}/>
                <Route exact path="/result/:id" component={Result}/>
                <Route exact path="/resultTeams" component={ResultTeams}/>
                <Route exact path="/categorieShow/:id" component={CategorieShow}/>
                <Route exact path="/summary" component={Summary}/>
                <Route exact path="/categorieControl" component={CategorieControl}/>
                <Route exact path="/quizControl" component={QuizControl}/>


            </Switch>
        )
    }
}

export default AppRouter;