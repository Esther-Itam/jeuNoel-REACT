import React from 'react';
import axios from 'axios';

class TableResult extends React.Component{

    constructor(){
        super()
        this.state={results:[]}
    }

componentDidMount(){

    axios.get('http://127.0.0.1:8000/api/results')
            .then(res=>{
            this.setState({results:res.data.data[0]})
            this.setState({numberTeam:res.data.data[0].length})
            })  
            .catch(error =>{console.log(error.response)})
}
    render(){
        return(
            <div>
               <table className="table bg-white table-bordered border-warning">
                    <thead className="table-warning">
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">🥇</th>
                        <th scope="col">🥈</th>
                        {this.state.numberTeam>2
                        ?
                        <th scope="col">🥉</th>
                        :
                        null
                        }
                        {this.state.numberTeam>3
                        ?
                        <th scope="col">🏅</th>
                        :
                        null
                        }
                        </tr>
                    </thead>
                    <tbody>
                     <tr>
                        </tr>
                        <tr>
                        <th  className="table-warning" scope="row">Equipe</th>
                       {this.state.results.map((result)=>
                        <td>{result.teamName}</td>
                        )}
                        </tr>
                        <tr>
                        <th  className="table-warning" scope="row">Score</th>
                       {this.state.results.map((result)=><td>{parseInt(result.userCount)} 🎁</td>)}
                        </tr> 
                    </tbody>
                    </table>
                    
            </div>
        )
    }
}

export default TableResult;