import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import { Accounts } from 'meteor/accounts-base'
import { withApollo } from 'react-apollo';

//All those Components bein' imported.
import Header from './Components/Header';
import Main from './Components/Main';
import ResolutionForm from './Components/ResolutionForm';
import GoalForm from './Components/GoalForm';


const App = ({ loading, resolutions, client, user }) => {
if(loading) return null;
return (
  <div>
    <Header client={client} user={user}/>
    <Main client={client}/>
    <ResolutionForm client={client}/>
    <ul>
      {resolutions.map(resolution => (
        <li key={resolution._id}>
          {resolution.name}
          <GoalForm resolutionId={resolution._id} />
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
    user {
      _id
    }
  }
`;

export default graphql(resolutionsQuery,{
  props: ({data})=> ({...data})
})(withApollo(App));
