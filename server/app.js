// import express
const express = require('express');
// import express-graphql
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');

// initialize express
const app = express();

// create a graphql route
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
}));

// set listening port with a callback function
app.listen('4000', () => {
    console.log('Listening for requests on port 4000!');
});