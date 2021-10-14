import React from 'react';
import Navbar from '../Navbar/Navbar';
import ButtonPlayer from '../Buttons/ButtonPlayer';


class PlayerScreen extends React.Component{

    render(){
        return(
            <>
                <Navbar/>
                <ButtonPlayer/>
            </>
        )
    }
}

export default PlayerScreen;