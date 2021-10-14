import React from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import ButtonColor from '../Buttons/ButtonColor';
import ButtonColorDisabled from '../Buttons/ButtonColorDisabled';
import ButtonColorChange from '../Buttons/ButtonColorChange';
import ButtonAvatar from '../Buttons/ButtonAvatar';


class ColorCheckManagement extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            colors:[],   
        }
    }

componentDidMount(){

    axios.get('http://127.0.0.1:8000/api/color')
        .then(res => {this.setState({colors:res.data.data})
            console.log(res.data.data)})
        .catch(error => {console.log(error.response)})

}
    render(){

        return(
            <>
                {this.state.colors.map((color)=>
                    <>
                    {color.color=this.props.color && this.props.checked?<ButtonColor idColor={this.props.idColor}/>:null}
                    </>
                    )}
            </>
        )
    }
}

export default ColorCheckManagement;