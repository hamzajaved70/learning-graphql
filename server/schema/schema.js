const graphql = require('graphql');
var _ = require('lodash');

// dummy data
var usersData = [
    {id: '1', name: 'Jim', age: 21},
    {id: '2', name: 'Bill', age: 29},
    {id: '3', name: 'Bob', age: 28},
    {id: '4', name: 'Peter', age: 27},
    {id: '5', name: 'Sam', age: 25},
    {id: '6', name: 'Patrick', age: 23},
    {id: '7', name: 'Jack', age: 22},
]

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

//create types
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Documentation for user...',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Description',
    fields: () => ({
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
            }},
            resolve(parent, args) {
                return _.find(usersData, {id: args.id});
                // resolve with data
                // get and return data from a datasource
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});