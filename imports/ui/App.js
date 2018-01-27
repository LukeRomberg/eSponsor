import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import { Accounts } from 'meteor/accounts-base'
import { withApollo } from 'react-apollo';

//All those Components bein' imported.
import Header from './Components/Header';
import Main from './Components/Main';
import ResolutionForm from './Components/ResolutionForm'
import GamerLogin from './Components/GamerLogin'
import GamerCreateAccount from './Components/GamerCreateAccount'


const App = ({ loading, resolutions, client }) => {
if(loading) return null;
return (
  <div>
    <Header client={client}/>
    <Main client={client}/>
    <ResolutionForm client={client}/>
    <GamerLogin client={client}/>
    <GamerCreateAccount client={client}/>
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
})(withApollo(App));
