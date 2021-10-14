import React from 'react';

class ButtonColorDisabled extends React.Component{

    render(){

        return(
            <>

            <button className="color_button" type="button" style={{backgroundColor:"grey"}} disabled></button>

            </>
        )
    }
}

export default ButtonColorDisabled;