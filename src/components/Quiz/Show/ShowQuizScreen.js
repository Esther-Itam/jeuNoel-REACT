import React from 'react';
import NavbarTeam from '../../Navbar/NavbarTeam';
import ResultCondition from './ResultCondition';

class ShowQuizScreen extends React.Component{

   
render(){
  
        return(
            <>
                <NavbarTeam/>
                <ResultCondition  id={this.props.match.params.id}/>
            </>
        )
    }
}

export default ShowQuizScreen;