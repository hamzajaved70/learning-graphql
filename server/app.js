// import express
const express = require('express');
// initialize express
const app = express();
// set listening port with a callback function
app.listen('4000', () => {
    console.log('Listening for requests on port 4000!');
});