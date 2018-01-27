import {createApolloServer} from 'meteor/apollo';
import {makeExecutableSchema} from 'graphql-tools';
import merge from 'lodash/merge'

// This is an imported resolver that goes into resolvers.
import ResolutionsResolvers from '../../api/resolutions/resolvers'
import UsersResolvers from '../../api/users/resolvers'

// This is imported schema that goes to typeDefs.
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import UsersSchema from '../../api/users/User.graphql';

//End of imports.


// An in-file test schema
const testSchema = `
  type Query {
    hi: String
    resolutions: [Resolution]
    user: User
  }
`
//Declaring the typeDefs, must be typed this way
const typeDefs = [
  testSchema,
  ResolutionsSchema,
  UsersSchema
];

// An in-file test resolver
const TestResolver = {
  Query: {
    hi() {
      return 'Welcome to the start of something huge!'
    }
  }
}

//Merging the in-house and imported resolvers
const resolvers = merge(
  TestResolver,
  ResolutionsResolvers,
  UsersResolvers
)

//prepare our schema for export into the apollo server
const schema = makeExecutableSchema({typeDefs, resolvers})

//export our schema into the apollo server
createApolloServer({schema});
