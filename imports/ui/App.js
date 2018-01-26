import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import Header from './Components/Header';
import Main from './Components/Main';

const App = ({data}) => {
if(data.loading) return null;
return (
  <div>
    <Header />
    <Main />
    <ul>
      {data.resolutions.map(resolution => (
        <li key={resolution._id}>
          {resolution.name}
        </li>
      ))}
    </ul>
</div>
)}

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
