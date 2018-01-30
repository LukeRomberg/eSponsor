import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import { PageHeader } from 'react-bootstrap'
import '../App.css'


const Main = ({data}) => {
return (
  <div className="welcome">
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

export default Main;
