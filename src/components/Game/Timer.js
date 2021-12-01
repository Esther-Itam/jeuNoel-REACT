import axios from 'axios';
import React, {useEffect, useState} from 'react';
import LARAVEL_SERVER from '../Variable';

function Timer(props) {
    const [seconds, setSeconds] = useState(30);
    const [data, setData] = useState();
    const [redirect, setRedirect]=useState(false);

    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }else{
    setSeconds('FINI!');
    setRedirect(true);
   }  
   
useEffect(() => {

    axios.post(`${LARAVEL_SERVER}/team_answers`, {answer_id:props.answer_id,
    question_id:props.question_id})
    .then(res => {
      setData(res.data);
      
  },1000)
  },[]);   

   
/*     if(redirect){
      return( window.location.reload(false))
  }  */

    return (
     
      <div className="App">
        <div>
            <div className="timer">
                <p>{seconds}</p>
            </div>
        </div>
      </div>
    );
  }
export default Timer;