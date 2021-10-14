import React from 'react';
import Navbar from '../../Navbar/Navbar';
import UpdateQA from './UpdateQA';

class QuizUpdateScreen extends React.Component{

render(){
      
    return(
    <>
        <Navbar/>
        <UpdateQA id = {this.props.match.params.id}/>
    </>
        )
    }
}

export default QuizUpdateScreen;