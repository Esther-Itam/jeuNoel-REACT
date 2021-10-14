import React from 'react';


class ButtonColorChange extends React.Component{

    render(){

        return(
            <>
              <button className="color_button" onClick={this.props.onClickColor} type="submit" style={{backgroundColor:this.props.backgroundColor}} value={this.props.value}></button>
            </>
        )
    }
}

export default ButtonColorChange;