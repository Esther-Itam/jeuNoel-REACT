import React from 'react';
import axios from 'axios';
import ButtonColor from '../Buttons/ButtonColor';
import LARAVEL_SERVER from '../Variable';

class ColorCheckManagement extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            colors:[],   
        }
    }

componentDidMount(){

    axios.get(`${LARAVEL_SERVER}/color`)
        .then(res => {this.setState({colors:res.data.data})})
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