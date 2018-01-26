import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const Header = ({data}) => {
  if(data.loading) return null;
return (
  <div>
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

export default Header;
