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
import SponsorList from './Components/SponsorList';
import GamersList from './Components/GamersList';
// import myLogo from 'logo.png';


const App = ({ loading, resolutions, client, user }) => {
if(loading) return null;
return (
  <div>
    <Header client={client} user={user}/>
    <Main client={client}/>
    <SponsorList />
    <GamersList />
    {/* <ResolutionForm client={client}/>
    <ul>
      {resolutions.map((resolution, i) => (
        <li key={i}>
          {resolution.name}
          {resolution.goals.map((goal, i) => {
            return <GoalForm key={i} goal={goal}/>
          })}
        </li>
      ))}
    </ul> */}
</div>
)}

const resolutionsQuery = gql `
query Resolutions{
resolutions{
  _id
  name
  goals{
    _id
    name
    completed
  }
}
user{
  _id
  email
}
}
`;

export default graphql(resolutionsQuery,{
  props: ({data})=> ({...data})
})(withApollo(App));
