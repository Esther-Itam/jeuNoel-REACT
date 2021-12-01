import React from 'react';
import Navbar from '../../Navbar/Navbar';
import IndexQA from './IndexQA';


class IndexQuizScreen extends React.Component{

    render(){
        return(
            <>
                <Navbar/>
                <IndexQA id={this.props.match.params.id}/>        
            </>
        )
    }
}

export default IndexQuizScreen;