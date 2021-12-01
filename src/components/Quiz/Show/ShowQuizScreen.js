import React from 'react';
import NavbarTeam from '../../Navbar/NavbarTeam';
import ResultCondition from './ResultCondition';

class ShowQuizScreen extends React.Component{
render(){
    console.log(this.props.match.params.id);

        return(
            <>
                <NavbarTeam/>
                <ResultCondition  id={this.props.match.params.id}/>
            </>
        )
    }
}

export default ShowQuizScreen;