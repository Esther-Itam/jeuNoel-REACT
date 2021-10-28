import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Echo from 'laravel-echo';
import React, {useEffect} from 'react';

window.Pusher = require('pusher-js');      
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'bcb7c6b9143d45ae9407',
    cluster: 'eu',
    forceTLS: true,
   enabledTransports: ['ws', 'wss']
  });


function App(){
    useEffect(() => {
        console.log('websock')
        window.Echo.channel('my-channel').listen('.my-event', function(data) {
            console.log(data, 'ça fonctionne');
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