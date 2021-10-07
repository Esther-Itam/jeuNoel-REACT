import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavbarTeam from '../Navbar/NavbarTeam';

class Categories extends React.Component{
    constructor(props){
        super(props)
        this.state={
  
            errors:[],
            categories:[],
            categorie:"",
        }
    }

componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/categorie')
        .then(res => {
            this.setState({categories:res.data.data})
            console.log(res.data.data[0])
            this.setState({index:res.data.data[0].length})
            
        })
        .catch(error => {
            console.log(error.response)
        })
    }
         

    render(){
     
        return(
            <>
                <NavbarTeam/>
                <div className="containerCategorie" >
                <div className="row justify-content-md-center">
                    <div className='row'>
                            <div className="col-12">
                           
                             {this.state.categories.map((categorie)=>
                            <>
                            {
                                categorie.is_used===1
                                ?
                                <button className="categorieButton" type="button" style={{backgroundColor:"grey"}}>{categorie.name}</button>
                                :
                                <Link className="categorieButton" type="button" value={categorie.name} to={`/categorieShow/${categorie.id}`}>{categorie.name}</Link>
                            }
                            </>
                            )} 
                             </div>
                             </div>
                        </div>
                </div>
            </>
        )
    }
}

export default Categories;