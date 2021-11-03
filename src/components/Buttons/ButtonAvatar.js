import React from 'react';
import axios from 'axios';
import LARAVEL_SERVER from '../Variable';

class ButtonAvatar extends React.Component{

constructor(props){
    super(props)
    this.state={
        errors:[],
        avatar:'',
        avatars:[]
    }
}

componentDidMount(){

    axios.get(`${LARAVEL_SERVER}/avatar`)
        .then(res => {this.setState({avatars:res.data.data})})
        .catch(error => {console.log(error.response)})  
}
    
    render(){

        return(
            <>
                {this.state.avatars.map((avatar)=>
                    <button key={avatar.id} className="avatar_button" onClick={this.props.onClickAvatar} type="button" value={avatar.avatar} style={{backgroundImage:`url(${avatar.avatar})`,  backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></button>
                )}
            </>
        )
    }
}

export default ButtonAvatar;