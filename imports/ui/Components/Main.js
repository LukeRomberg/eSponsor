import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import { PageHeader } from 'react-bootstrap'
import '../App.css'


const Main = ({data}) => {
return (
  <PageHeader className="welcome">
    Welcome to eSponsor<br />
    <small>Where success meets talent</small>
  </PageHeader>
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

export default Main;
