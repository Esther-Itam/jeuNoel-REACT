import React from 'react';


class ButtonGame extends React.Component{

    render(){

        return(
                <>
                <div className="containerButtonGame">
              
                <button type="submit" className="buttonGame">{this.props.titleButton}</button>

                </div>
                </>
        )
    }
}

export default ButtonGame;