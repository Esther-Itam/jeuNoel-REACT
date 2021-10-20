import React from 'react';
import bonnet from '../../pictures/bonnet.png';
import { Link } from 'react-router-dom';


class LinkGame extends React.Component{

    render(){

        return(
                <>
                    <img className="bonnet" src={bonnet} alt="" width="160px"/>
                    <Link className="linkGame" to={this.props.link}>{this.props.titleLink}</Link>
                </>
        )
    }
}

export default LinkGame;