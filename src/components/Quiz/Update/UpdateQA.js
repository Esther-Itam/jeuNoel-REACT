import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import IndexUpdateQA from './IndexUpdateQA';


class UpdateQA extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            quiz:"",
            quizzes:[],
        }
    }

componentDidMount(){
  let id = this.props.id;
    axios.get(`http://127.0.0.1:8000/api/quiz/${id}`)
    .then(res => {
        this.setState({quizzes:res.data.data})
        this.setState({index:res.data.data[0][1].length})
        })
        .catch(error => {console.log(error.response) })}

render(){
      
        return(
    <>
     <div className="containerSummaryQA" > 
        <div className="containerCategorie" >  
            <div className="row justify-content-md-center">
                {this.state.quizzes.map((quiz)=>
                <>
                        <h1>Quiz: {quiz[0][0].quizName}</h1>
                                           <IndexUpdateQA numberQuestion={1} questionIndex={0} answerIndex1={0} answerIndex2={1} answerIndex3={2} id = {this.props.id}/>
                    {this.state.index >1 ? <IndexUpdateQA numberQuestion={2} questionIndex={1} answerIndex1={3} answerIndex2={4} answerIndex3={5} id = {this.props.id}/> : null}
                    {this.state.index >2 ? <IndexUpdateQA numberQuestion={3} questionIndex={2} answerIndex1={6} answerIndex2={7} answerIndex3={8} id = {this.props.id}/> : null}
                    {this.state.index >3 ? <IndexUpdateQA numberQuestion={4} questionIndex={3} answerIndex1={9} answerIndex2={10} answerIndex3={11} id = {this.props.id}/> : null}
                    {this.state.index >4 ? <IndexUpdateQA numberQuestion={5} questionIndex={4} answerIndex1={12} answerIndex2={13} answerIndex3={14} id = {this.props.id}/> : null}
                    {this.state.index >5 ? <IndexUpdateQA numberQuestion={6} questionIndex={5} answerIndex1={15} answerIndex2={16} answerIndex3={17} id = {this.props.id}/> : null}
                    {this.state.index >6 ? <IndexUpdateQA numberQuestion={7} questionIndex={6} answerIndex1={18} answerIndex2={19} answerIndex3={20} id = {this.props.id}/> : null}
                    {this.state.index >7 ? <IndexUpdateQA numberQuestion={8} questionIndex={7} answerIndex1={21} answerIndex2={22} answerIndex3={23} id = {this.props.id}/> : null}
                    {this.state.index >8 ? <IndexUpdateQA numberQuestion={9} questionIndex={8} answerIndex1={24} answerIndex2={25} answerIndex3={26} id = {this.props.id}/> : null}
                    {this.state.index >9 ? <IndexUpdateQA numberQuestion={10} questionIndex={9} answerIndex1={27} answerIndex2={28} answerIndex3={29} id = {this.props.id}/> : null}
                </>
                )} 
            <Link type="button" className="btn btn-success" to='/summary'>Retour au sommaire</Link>  
            </div>
        </div>
        </div>
    </>
        )
    }
}

export default UpdateQA;