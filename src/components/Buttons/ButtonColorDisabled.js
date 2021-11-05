import React from 'react';

class ButtonColorDisabled extends React.Component{

    render(){

        return(
            <>

            <button className="color_button" onClick={this.props.onClickColor}  type="submit" style={{backgroundColor:"grey"}} ></button>

            </>
        )
    }
}

export default ButtonColorDisabled;