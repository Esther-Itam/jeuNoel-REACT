import React from 'react';


class ButtonStandard extends React.Component{

    render(){
        return(
            <div className="containerButtonStandard">
            <button type="submit" className="buttonStandard">{this.props.text}</button>
            </div>
        )
    }
}

export default ButtonStandard;