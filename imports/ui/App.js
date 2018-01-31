import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import { Accounts } from 'meteor/accounts-base'
import { withApollo } from 'react-apollo';

//All those Components bein' imported.
import Header from './Components/Header';
import ResolutionForm from './Components/ResolutionForm';
import GoalForm from './Components/GoalForm';
import SponsorList from './Components/SponsorList';
import GamersList from './Components/GamersList';
import GamerCreateAccount from './Components/GamerCreateAccount';
import SponsorCreateAccount from './Components/SponsorCreateAccount';
import { Switch, Route } from 'react-router-dom'
import GamerInfo from './Components/GamerInfo'


const App = ({ loading, resolutions, client, user }) => {
if(loading) return null;
return (
  <div className="center">
    <Header />
    <Switch>
      <Route exact path="/" component={GamersList} />
      <Route exact path="/sponsors" component={SponsorList} />
      <Route exact path="/sponsors/signup" component={SponsorCreateAccount} />
      <Route exact path="/gamers/signup" component={GamerCreateAccount} />
      <Route exact path="/gamers/rizzo" component={GamerInfo} />
    </Switch>
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
