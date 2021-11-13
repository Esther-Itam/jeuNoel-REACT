import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../pictures/logo.webp'
import LARAVEL_SERVER from '../Variable';

class NavbarTeam extends React.Component{

constructor(){
    super()
    this.state={
        userInfos:[],
        errors:[]
    }
}
componentDidMount(){
    let headers={headers:{'API_TOKEN':localStorage.getItem('token')}}
    let id =localStorage.getItem('token');
    axios.get(`${LARAVEL_SERVER}/teamShow/${id}`, headers)
        .then(res => {this.setState({userInfos:res.data.data[0]})
    console.log(res.data.data[0]) })
        .catch(error => {console.log(error.response)})       
}
    
    render(){

        return(
            <>
                <ul className="nav justify-content-end" className="nav">
                    {
                        localStorage.getItem('token')
                        ?
                        <>
                            <li className="nav-item">
                                <img src={logo} alt="" width="100px"/>
                            </li>
                            <li className="nav-item">
                                {this.state.userInfos.map((userInfo)=>
                                <>
                                <div className="itemNavTeam">
                                    <div className="avatar_button_nav" style={{backgroundImage:`url(${userInfo.teamAvatar})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
                                    <h1 style={{color:userInfo.teamColor}} className="titleNavTeam">Equipe {userInfo.teamName}</h1>
                                </div>
                                </>
                                )}
                            </li>
                        </>
                        :
                        <>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page"  to="/player"><img src={logo} alt="" width="100px"/></Link>
                            </li>
                        </>
                    }
                 
                </ul>
            </>
        )
    }
}

export default NavbarTeam;