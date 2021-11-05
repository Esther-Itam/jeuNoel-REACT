import './App.css';
import AppRouter from './components/AppRouter';
import Echo from 'laravel-echo';
import React, {useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from "./reducers/index";
import {initialState} from "./reducers/index";
import AppContext from "./Context";

window.Pusher = require('pusher-js'); 
window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'bcb7c6b9143d45ae9407',
  cluster: 'eu',
  forceTLS: true
});


function App(){

    const [state, dispatch ] = React.useReducer(rootReducer, initialState);

    const providerState = {
        state,
        dispatch
    }

useEffect(() => {
    window.Echo.channel('color-used').listen('.color-used', (data) =>{
         data.color.map((color) => {
             console.log('color updated by websockets')
            dispatch({type:color.colorName.toUpperCase(), value:color.colorUsed}) 
        }); 
    },1000)
  },[]);
  return (
    <AppContext.Provider value={providerState} >
          <Router>
              <AppRouter/>
          </Router>
    </AppContext.Provider>
  )
}


export default App;