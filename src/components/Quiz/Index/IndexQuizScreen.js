import React from 'react';
import NavbarTeam from '../../Navbar/NavbarTeam';
import IndexQA from './IndexQA';


class IndexQuizScreen extends React.Component{

    render(){
        return(
            <>
                <NavbarTeam/>
                <IndexQA id={this.props.match.params.id}/>        
            </>
        )
    }
}

export default IndexQuizScreen;