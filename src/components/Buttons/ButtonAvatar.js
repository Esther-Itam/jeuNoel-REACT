import React from 'react';
import axios from 'axios';

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

    axios.get('http://127.0.0.1:8000/api/avatar')
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