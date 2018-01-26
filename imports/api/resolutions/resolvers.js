import Resolutions from './resolutions'

// Resolutions.insert({
//   name: "Test res"
// })

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    }
  }
}
