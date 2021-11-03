import axios from 'axios';
import React, {useEffect, useState} from 'react';
import LARAVEL_SERVER from '../Variable';

function Timer(props) {
    const [seconds, setSeconds] = useState(90);
    const [data, setData] = useState();
    const [redirect, setRedirect]=useState(false);

    useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setSeconds('FINI!');
        const getPosts = async () => {
          await axios.post(`${LARAVEL_SERVER}/team_answers`, {answer_id:props.answer_id,
          question_id:props.question_id})
          .then(res => {
            setData(res.data);
            setRedirect(true);
      
          }).catch(error => {
            console.log(error.response)
          });
        };
        getPosts();
      }
    });

   
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