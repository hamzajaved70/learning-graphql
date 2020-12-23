const graphql = require('graphql');
var _ = require('lodash');

// dummy data
var usersData = [
    {id: '1', name: 'Jim', age: 21, height: 170},
    {id: '2', name: 'Bill', age: 29, height: 170},
    {id: '3', name: 'Bob', age: 28, height: 170},
    {id: '4', name: 'Peter', age: 27, height: 170},
    {id: '5', name: 'Sam', age: 25, height: 170},
    {id: '6', name: 'Patrick', age: 23, height: 170},
    {id: '7', name: 'Jack', age: 22, height: 170},
]

var hobbiesData = [
    {id: '1', title: 'Gaming'},
    {id: '2', title: 'Painting'},
    {id: '3', title: 'Joking'},
    {id: '4', title: 'Gambling'},
    {id: '5', title: 'Exercising'},
    {id: '6', title: 'Driving'},
    {id: '7', title: 'Reading'},
    {id: '8', title: 'Baking'},
    {id: '9', title: 'Cooking'},
]

var postData = [
    {id: '1', comment: 'Just another comment!'},
    {id: '2', comment: 'Just another comment!'},
    {id: '3', comment: 'Just another comment!'},
    {id: '4', comment: 'Just another comment!'},
    {id: '5', comment: 'Just another comment!'},
    {id: '6', comment: 'Just another comment!'},
    {id: '7', comment: 'Just another comment!'},
    {id: '8', comment: 'Just another comment!'},
    {id: '9', comment: 'Just another comment!'},
]

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLSchema } = graphql;

//create types
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Documentation for user...',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        height: {type: GraphQLInt},
    })
});

const HobbyType = new GraphQLObjectType({
    name: 'Hobby',
    description: 'Description for Hobbies',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
    })
});

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Description for Post',
    fields: () => ({
        id: {type: GraphQLID},
        comment: {type: GraphQLString},
    })
})

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Description',
    fields: () => ({
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return _.find(usersData, {id: args.id});
                // resolve with data
                // get and return data from a datasource
            }
        },
        hobby: {
            type: HobbyType,
            args: {
                id: {
                    type: GraphQLID,
                }
            },
            resolve(parent, args) {
                return _.find(hobbiesData, {id: args.id});
            }
        },
        post: {
            type: PostType,
            args: {
                id: {
                    type: GraphQLID,
                }
            },
            resolve(parent, args) {
                return _.find(postData, {id: args.id});
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});