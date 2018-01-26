import {createApolloServer} from 'meteor/apollo';
import {makeExecutableSchema} from 'graphql-tools';
import merge from 'lodash/merge'

// This is an imported resolver that goes into resolvers
import ResolutionsResolvers from '../../api/resolutions/resolvers'

// This is imported schema that goes to typeDefs
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

//End of imports


// An in-file test schema
const testSchema = `
  type Query {
    hi: String
    resolutions: [Resolution]
  }
`
//Declaring the typeDefs, must be typed this way
const typeDefs = [testSchema, ResolutionsSchema];

// An in-file test resolver
const TestResolver = {
  Query: {
    hi() {
      return 'GET FUCKED BITCH'
    }
  }
}

//Merging the in-house and imported resolvers
const resolvers = merge(
  TestResolver,
  ResolutionsResolvers
)

//prepare our schema for export into the apollo server
const schema = makeExecutableSchema({typeDefs, resolvers})
//export our schema into the apollo server
createApolloServer({schema});
