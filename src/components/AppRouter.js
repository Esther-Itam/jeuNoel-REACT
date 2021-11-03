import React from 'react';
import Home from './Home';
import RegisterScreen from './Authentification/RegisterScreen';
import LoginScreen from './Authentification/LoginScreen';
import AccountScreen from './Authentification/AccountScreen';
import PlayerScreen from './Game/PlayerScreen';
import StartGameScreen from './Game/StartGameScreen';
import Random from './Game/Random';
import CategoriesScreen from './Game/CategoriesScreen';
import CategorieShowScreen from './Game/CategorieShowScreen';
import WaitingScreen from './Game/WaitingScreen';
import RatingScreen from './Team/RatingScreen';

import TeamBuildingScreen from './Team/TeamBuildingScreen';
import TeamPresentationScreen from './Team/TeamPresentationScreen';
import TeamContinueGameScreen from './Team/TeamContinueGameScreen';
import ResultScreen from './Team/ResultScreen';
import ResultTeamsScreen from './Team/ResultTeamsScreen';

import SummaryScreen from './Quiz/Show/SummaryScreen';
import QuizControlScreen from './Quiz/Show/QuizControlScreen';
import CategorieControlScreen from './Quiz/Show/CategorieControlScreen';
import CreateQuizScreen from './Quiz/Create/CreateQuizScreen';
import CreateCategorieScreen from './Quiz/Create/CreateCategorieScreen';

import ShowQuizScreen from './Quiz/Show/ShowQuizScreen';
import IndexQuizScreen from './Quiz/Index/IndexQuizScreen';
import QuizUpdateScreen from './Quiz/Update/QuizUpdateScreen';
import CategorieUpdateScreen from './Quiz/Update/CategorieUpdateScreen';
import AuthentificationSocialite from './Authentification/AuthentificationSocialite';

import Websockets from '../Websockets';
import ButtonProposeLeave from './Buttons/ButtonProposeLeave';
import { Route, Switch } from 'react-router';


class AppRouter extends React.Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                {/* ************************AUTHENTIFICATION **************************/}
                <Route exact path="/register" component={RegisterScreen}/>
                <Route exact path="/login" component={LoginScreen}/>
                <Route exact path="/account/:id" component={AccountScreen}/>
                <Route path="/player/:provider/:token" component={AuthentificationSocialite}/>

                {/* ******************************GAME ********************************/}
                <Route exact path="/player" component={PlayerScreen}/>
                <Route exact path="/categorie" component={CategoriesScreen}/>
                <Route exact path="/categorieShow/:id" component={CategorieShowScreen}/>
                <Route exact path="/random" component={Random}/>
                <Route exact path="/startGame" component={StartGameScreen}/>
                <Route exact path="/waiting" component={WaitingScreen}/>
                <Route exact path="/proposeLeave" component={ButtonProposeLeave}/>

                {/* ******************************QUIZ ********************************/}
                    {/* *************************INDEX**************************** */}
                    <Route exact path="/quizIndex/:id" component={IndexQuizScreen}/>
                    {/* **************************SHOW**************************** */}
                    <Route exact path="/categorieControl" component={CategorieControlScreen}/>
                    <Route exact path="/quizControl" component={QuizControlScreen}/>
                    <Route exact path="/quizShow/:id" component={ShowQuizScreen}/>
                    <Route exact path="/summary" component={SummaryScreen}/>
                    {/* *************************CREATE*************************** */}
                    <Route exact path="/categorieCreate" component={CreateCategorieScreen}/>
                    <Route exact path="/quizCreate" component={CreateQuizScreen}/>      
                    {/* *************************UPDATE*************************** */}
                    <Route exact path="/categorieUpdate/:id" component={CategorieUpdateScreen}/>
                    <Route exact path="/quizUpdate/:id" component={QuizUpdateScreen}/>

                {/* ******************************TEAM ********************************/}
                <Route exact path="/rating" component={RatingScreen}/>
                <Route exact path="/result/:id" component={ResultScreen}/>
                <Route exact path="/resultTeams" component={ResultTeamsScreen}/>
                <Route exact path="/teamPresentation" component={TeamPresentationScreen}/>
                <Route exact path="/teamBuilding" component={TeamBuildingScreen}/>
                <Route exact path="/teamContinueGame" component={TeamContinueGameScreen}/>

                <Route path="/websocket" component={Websockets}/>
            </Switch>
        )
    }
}

export default AppRouter;