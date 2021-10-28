import React from 'react';
import axios from 'axios';
import Echo from 'laravel-echo';
window._ = require('lodash');

window.io = require("socket.io-client");
/* window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    wsHost: window.location.hostname,
    wsPort: 6001,
    wssHost: window.location.hostname,
    wssPort: 6001,
    key: 'client',
    disableStats: true,
    enabledTransports: ['ws', 'wss'],
    forceTLS: false,
  });
   window.Echo.channel('channel').listen('.server.created', function (e) {
    console.log(e)
})   */
 /*  window.Echo.channel('channel').listen('App.Events.Websockets', (e)=>{
    console.log(e)
}) */

class Result extends React.Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
           <div><h1>Hi!</h1></div>
        )
    }
}

export default Result;