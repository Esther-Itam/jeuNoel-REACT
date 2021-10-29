import React from 'react';
import FormCreateQuestion from '../../Forms/FormCreateQuestion';
import { Link } from 'react-router-dom';

class CreateQA extends React.Component{
 
    render(){
        return(
            <>
            <div class="container bg-white container_question">Question 1: <FormCreateQuestion/></div>
            <div class="container bg-white container_question">Question 2: <FormCreateQuestion/></div>
            <div class="container bg-white container_question">Question 3: <FormCreateQuestion/></div>
            <div class="container bg-white container_question">Question 4: <FormCreateQuestion/></div>
            <div class="container bg-white container_question">Question 5: <FormCreateQuestion/></div>
            <div class="container bg-white container_question">Question 6: <FormCreateQuestion/></div>
            <div class="container bg-white container_question">Question 7: <FormCreateQuestion/></div>
            <div class="container bg-white container_question">Question 8: <FormCreateQuestion/></div>
            <div class="container bg-white container_question">Question 9: <FormCreateQuestion/></div>
            <div class="container bg-white container_question">Question 10: <FormCreateQuestion/></div>
            <Link class="btn btn-success" to="/summary">Enregistrer</Link>
            </>
        )
    }
}

export default CreateQA;