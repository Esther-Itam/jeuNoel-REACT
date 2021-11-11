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
            categorieUsed:[],
            results:[],
            teams:[]
        }
    }

componentDidMount(){
    let id = this.props.id;
    axios.get(`${LARAVEL_SERVER}/team_answers/index`)
        .then(res=>{this.setState({results:res.data.data.length})})  
        .catch(error => {console.log(error.response)}) 

    axios.get(`${LARAVEL_SERVER}/categorieUsed`)
    .then(res => {this.setState({categorieUsed:res.data.data[0].length})})
    .catch(error => {console.log(error.response) })

    axios.get(`${LARAVEL_SERVER}/teamPresentation`)
    .then(res=>{this.setState({teams:res.data.data.length})})  
    .catch(error => {console.log(error.response)}) 

}

    
render(){
        return(
            <>
            <TableShowQuiz id={this.props.id}/>
            {this.state.teams===2
            ?
            <>
               {this.state.categorieUsed===1 && this.state.results===20?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===2 && this.state.results===40?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===3 && this.state.results===60?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===4 && this.state.results===80?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===5 && this.state.results===100?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===6 && this.state.results===120?<Redirect to={`/result/${this.props.id}`}/>:null}
            </>
               :
               null
            }
             {this.state.teams===3
            ?
            <>
               {this.state.categorieUsed===1 && this.state.results===30?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===2 && this.state.results===60?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===3 && this.state.results===90?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===4 && this.state.results===120?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===5 && this.state.results===150?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===6 && this.state.results===180?<Redirect to={`/result/${this.props.id}`}/>:null}
            </>
               :
               null
            } 
             {this.state.teams===4
            ?
            <>
               {this.state.categorieUsed===1 && this.state.results===40?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===2 && this.state.results===80?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===3 && this.state.results===120?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===4 && this.state.results===160?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===5 && this.state.results===200?<Redirect to={`/result/${this.props.id}`}/>:null}
               {this.state.categorieUsed===6 && this.state.results===240?<Redirect to={`/result/${this.props.id}`}/>:null}
            </>
               :
               null
            }     
            </>
        )
    }
}

export default ResultCondition;