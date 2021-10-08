import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../pictures/logo.webp'

class Navbar extends React.Component{
    constructor(){
        super()
        this.state={
            token:null,
            userInfos:[],
            name:'',
            userInfo:""
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
                                <Link className="nav-link active" aria-current="page" to="/player"><img src={logo} alt="" width="100px"/></Link>
                            </li>
                            <li className="nav-item">
                                <h1 classNameName="titleNav">Bienvenue au Quiz de Noël</h1>
                            </li>
                            <li className="nav-item" classNameName="identifiantNav">
                                {this.state.userInfos.map((userInfo)=>
                                <>
                                    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button" aria-expanded="false">Joyeux Noel {userInfo.userName}</Link>
                               
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={`/account/${userInfo.userId}`}>Compte</Link></li>
                                    
                                        {userInfo.userAdmin ===1
                                            ?
                                            <li><Link className="dropdown-item" to="/summary">Tableau de bord</Link></li>
                                            :
                                            null
                                        }
                                    <li><Link className='btn' onClick={()=>this.logout()} to="/">Déconnexion</Link></li>
                                </ul>
                                </>
                                )}
                            </li>
                        </>
                        :
                        <>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><img src={logo} alt="" width="100px"/></Link>
                            </li>
                        </>
                    }
                   
                </ul>
            </>
        )
    }
}

export default Navbar;