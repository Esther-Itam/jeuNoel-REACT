import React from 'react';
import NavbarTeam from '../../Navbar/NavbarTeam';
import TableShowQuiz from '../../Tables/TableShowQuiz';

class ShowQuizScreen extends React.Component{
 
render(){
        return(
            <>
                <NavbarTeam/>
                <TableShowQuiz id={this.props.match.params.id}/>
            </>
        )
    }
}

export default ShowQuizScreen;