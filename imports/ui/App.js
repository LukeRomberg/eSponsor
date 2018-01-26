import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import Header from './Components/Header';
import Main from './Components/Main';

const App = ({data}) => {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }
  if(data.loading) return null;
return (
  <div>
    <Header />
    <Main />
    <GamerLogin stat={this.state}/>
    <ul>
      {data.resolutions.map(resolution => (
        <li key={resolution._id}>
          {resolution.name}
        </li>
      ))}
    </ul>
</div>
)};

const hiQuery = gql `
  {
    hi
    resolutions{
      _id
      name
    }
  }
`;

export default graphql(hiQuery)(App);
