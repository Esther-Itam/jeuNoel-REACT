import React from 'react';
import Navbar from '../../Navbar/Navbar';
import FormCreateQuiz from '../../Forms/FormCreateQuiz';

class CreateQuizScreen extends React.Component{

render(){
        return(
            <>
               <Navbar/>
               <FormCreateQuiz/>
            </>
        )
    }
}

export default CreateQuizScreen;