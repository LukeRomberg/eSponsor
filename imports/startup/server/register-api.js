import {createApolloServer} from 'meteor/apollo';
import {makeExecutableSchema} from 'graphql-tools';
import merge from 'lodash/merge'

// This is an imported resolver that goes into resolvers.
import GoalsResolvers from '../../api/goals/resolvers'
import ResolutionsResolvers from '../../api/resolutions/resolvers'
import UsersResolvers from '../../api/users/resolvers'

// This is imported schema that goes to typeDefs
import GoalsSchema from '../../api/goals/Goal.graphql'
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import UsersSchema from '../../api/users/User.graphql';

//End of imports


//Declaring the typeDefs, must be typed this way
const typeDefs = [
  GoalsSchema,
  ResolutionsSchema,
  UsersSchema
];


//Merging the in-house and imported resolvers
const resolvers = merge(
  GoalsResolvers,
  ResolutionsResolvers,
  UsersResolvers
)

//prepare our schema for export into the apollo server
const schema = makeExecutableSchema({typeDefs, resolvers})

//export our schema into the apollo server
createApolloServer({schema});
