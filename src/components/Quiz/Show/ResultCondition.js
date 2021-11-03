import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import LARAVEL_SERVER from '../../Variable';
import TableShowQuiz from '../../Tables/TableShowQuiz';

class ResultCondition extends React.Component{
    constructor(props){
        super(props)
        this.state={
  
            errors:[],
            quiz:"",
            quizzes:[],
            question_id:0,
            answer_id:0,
            quiz:0,
            team_answers:[],
            questions:[],
            userInfos:[]

        }
    }

componentDidMount(){
    let id = this.props.id;

    axios.get(`${LARAVEL_SERVER}/team_answers/inde`)
        .then(res=>{this.setState({results:res.data.data.length})})  
        .catch(error => {console.log(error.response)}) 

    axios.get(`${LARAVEL_SERVER}/categorieUsed`)
    .then(res => {this.setState({categorieUsed:res.data.data[0].length})
console.log(res.data.data[0].length)})
    .catch(error => {console.log(error.response) })
}

    
render(){
        return(
            <>
            <TableShowQuiz id={this.props.id}/>
               {this.state.categorieUsed===1 && this.state.results===10?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===2 && this.state.results===20?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===3 && this.state.results===30?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===4 && this.state.results===40?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===5 && this.state.results===50?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===6 && this.state.results===60?<Redirect to={`/result/${this.props.id}`}/>:null}

            </>
        )
    }
}

export default ResultCondition;