import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';
import LARAVEL_SERVER from '../Variable';

class TableCategorie extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            categories:[],
            categorie:'',
            redirect:false
        }
    }

componentDidMount(){
    axios.get(`${LARAVEL_SERVER}/categorie`)
        .then(res => {this.setState({categories:res.data.data})})
        .catch(error => {console.log(error.response)})
    }

handleSubmit = (event, id) =>{
    event.preventDefault()
    console.log("Catégorie supprimée")
    axios.delete(`${LARAVEL_SERVER}/categorie/${id}`)
            .then(res=>{
                this.setState({redirect:true})
                window.location.reload(false);
            })  
            .catch(error =>{
                if(error.response.status === 401){this.setState({errors: error.response.data.errors}, ()=>{})
                }
                console.log(error.response)
            })
                
}            
    
render(){
        
        if(this.state.redirect){
            return(<Redirect to='/summary'/>)
        }
        return(
            <>
               {this.state.categories.length===0
                ?
                <>
                <div className="no_categorie_show">Il n'y a pas encore de catégories créées</div>
                <Link type="button" className="linkStandard" to='/categorieCreate'>Créer</Link>
                </>
                :
                <table className="table table-borderless">
                    <thead className='table-dark'>
                        <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Editer</th>
                        <th scope="col">Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.categories.map((categorie)=>
                        <tr>
                        <td className="table-light" key={categorie.name}>{categorie.name}</td>
                        <td className="table-dark"><Link  className="linkAdmin" to={`/categorieUpdate/${categorie.id}`}>Modifier</Link></td>
                        <td  className="table-dark"><button type='submit' onClick={(event) => this.handleSubmit(event, categorie.id)} className="buttonAdmin">Supprimer</button></td>
                        </tr>   
                    )}
                         
                    </tbody>
                    <tbody className="containerLinkCreateAdmin">
                        
                {this.state.categories.length>5
                ?
                <td colspan="4" >Le nombre maximum de catégorie a été créé</td>
                :
                <td colspan="4" ><Link type="button" className="linkAdminCreate" to='/categorieCreate'>Créer</Link></td>
                }
             

                    </tbody>
                </table> 
                } 
                 
     
            </>
        )
    }
}

export default TableCategorie;