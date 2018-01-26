import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import { Navbar, Nav, NavItem, NavDropdown, FormGroup, Form, FormControl, Button, MenuItem, Menu } from 'react-bootstrap'

const Header = ({data}) => {
return (
  <div>
    <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">eSponsor</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Gamers
      </NavItem>
      <NavItem eventKey={2} href="#">
        Sponsors
      </NavItem>
    <NavItem eventKey={3} href="#">
        My Account
    </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Log-In
      </NavItem>
      <NavItem eventKey={2} href="#">
        Create Account
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
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
