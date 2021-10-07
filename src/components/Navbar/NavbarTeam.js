import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../pictures/logo.webp'

class NavbarTeam extends React.Component{
    constructor(){
        super()
        this.state={
            token:null,
            userInfos:[],
            name:'',

        }
    }
    componentDidMount(){
        let headers={
            headers:{
                'API_TOKEN':localStorage.getItem('token'),
                
            } }
    let id =localStorage.getItem('token');
    axios.get(`http://127.0.0.1:8000/api/show/${id}`, headers)
        .then(res => {
            this.setState({userInfos:res.data.data[0]})

        })
        .catch(error => {
            console.log(error.response)
        })       
    }
  
    
    logout = () =>{
        localStorage.setItem('token', '')
        localStorage.clear()
        this.setState({token:null})
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
                                <h1 style={{color:userInfo.teamColor}} className="titleNavTeam">Equipe {userInfo.teamName}</h1>

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