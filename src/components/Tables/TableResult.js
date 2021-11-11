import React, { useState, useEffect} from 'react';
import axios from 'axios';
import LARAVEL_SERVER from '../Variable';
import { useAppContext } from '../../Context';

function TableResult(){

    const { state, dispatch } = useAppContext();
   const [numberTeam, setNumberTeam] =useState([]);

   useEffect(() => {
        axios.get(`${LARAVEL_SERVER}/results`)
        .then(res => {
            console.log(res.data.data[0].length)
             setNumberTeam(res.data.data[0].length);
        },1000)
        },[]); 
console.log(state.results)
        return(
            <div>
               <table className="table bg-white table-bordered border-warning">
                    <thead className="table-warning">
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">🥇</th>
                        <th scope="col">🥈</th>
                        {numberTeam>2 ? <th scope="col">🥉</th> : null}
                        {numberTeam>3 ? <th scope="col">🏅</th> : null}
                        </tr>
                    </thead>
                    <tbody>
                     <tr>
                        </tr>
                        <tr>
                        <th  className="table-warning" scope="row">Equipe</th>
                       {state.results.map((result)=>
                        <td>{result.teamName}</td>
                        )}
                        </tr>
                        <tr>
                        <th  className="table-warning" scope="row">Score</th>
                       {state.results.map((result)=><td>{parseInt(result.userCount)} 🎁</td>)}
                        </tr> 
                    </tbody>
                    </table>
                    
            </div>
        )
}

export default TableResult;