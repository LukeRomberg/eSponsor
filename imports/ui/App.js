import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import Header from './Components/Header';
import Main from './Components/Main';
import ResolutionForm from './Components/ResolutionForm'

const App = ({ loading, resolutions }) => {
if(loading) return null;
return (
  <div>
    <Header />
    <Main />
    <ResolutionForm />
    <ul>
      {resolutions.map(resolution => (
        <li key={resolution._id}>
          {resolution.name}
        </li>
      ))}
    </ul>
</div>
)}

const resolutionsQuery = gql `
  query Resolutions {
    hi
    resolutions{
      _id
      name
    }
  }
`;

export default graphql(resolutionsQuery,{
  props: ({data})=> ({...data})
})(App);
