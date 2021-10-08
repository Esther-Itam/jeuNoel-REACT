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
                console.log(res.data.data[0])

            })  
            .catch(error =>{
                if(error.response.status === 401){
                    this.setState({errors: error.response.data.errors}, ()=>{
                        console.log(this.state)
                    })
                }
                console.log(error.response)
            })
}
    render(){
        return(
            <div>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">🥇</th>
                        <th scope="col">🥈</th>
                        <th scope="col">🥉</th>
                        <th scope="col">😟</th>
                        </tr>
                    </thead>
                    <tbody>
                     <tr>
                        <th scope="row"></th>
                        </tr>
                        <tr>
                        <th scope="row">Equipe</th>
                       {this.state.results.map((result)=>
                        <td>{result.teamName}</td>
                        )}
                        </tr>
                        <tr>
                        <th scope="row">Score</th>
                       {this.state.results.map((result)=><td>{result.userCount/3}/20</td>)}
                        </tr> 
                    </tbody>
                    </table>
                    
            </div>
        )
    }
}

export default TableResult;