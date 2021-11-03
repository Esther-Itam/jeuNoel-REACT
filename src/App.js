import './App.css';
import AppRouter from './components/AppRouter';
import Echo from 'laravel-echo';
import React, {useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {useDispatch} from 'react-redux';

window.Pusher = require('pusher-js'); 
window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'bcb7c6b9143d45ae9407',
  cluster: 'eu',
  forceTLS: true
});


function App(){
    const dispatch = useDispatch();
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        console.log('websock');

        window.Echo.channel('status-liked').listen('.status-liked', function(data) {
            console.log(data, 'React receive the event');
            disptach({type:"updateBlue", data:""})
          });
        })
  return (
      <>
          <Router>
              <AppRouter/>
          </Router>
      </>
  )
}


export default App;