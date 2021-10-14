import React from 'react';
import axios from 'axios';
import ButtonColorDisabled from '../Buttons/ButtonColorDisabled';
import ButtonColorChange from '../Buttons/ButtonColorChange';
import ColorCheckManagement from './ColorCheckManagement';

class ColorManagement extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            colors:[],   
        }
    }

componentDidMount(){

    axios.get('http://127.0.0.1:8000/api/color')
        .then(res => {this.setState({colors:res.data.data})})
        .catch(error => {console.log(error.response)})

}
    render(){

        return(
            <>
            {this.state.colors.map((color)=>
                    <>
                    {color[this.props.index].colorUsed === 1 ? <ButtonColorDisabled/> : <ButtonColorChange onClickColor={this.props.onClickColor} backgroundColor={color[this.props.index].colorName} value={color[this.props.index].colorName}/>}
                    </>
                )}   
            </>
        )
    }
}

export default ColorManagement;