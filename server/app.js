// import express
const express = require('express');
// import express-graphql
const { graphqlHTTP } = require('express-graphql');

// initialize express
const app = express();

// create a graphql route
app.use('/graphql', graphqlHTTP({
    graphiql: true
}));

// set listening port with a callback function
app.listen('4000', () => {
    console.log('Listening for requests on port 4000!');
});