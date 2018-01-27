import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  FormGroup,
  Form,
  FormControl,
  Button,
  MenuItem,
  Menu,
  Tab,
  Tabs
} from 'react-bootstrap'
import GamerLogin from './GamerLogin'
import GamerCreateAccount from './GamerCreateAccount'

export default class Header extends Component {

  render() {
    return (<div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">eSponsor</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Gamers"></Tab>
              <Tab eventKey={2} title="Gamers"></Tab>
              <Tab eventKey={3} title="My Account"></Tab>
            </Tabs>
          </Nav>
          <Nav pullRight>
            { this.props.user._id ? (
            <NavItem eventKey={1} onClick={() => {
                Meteor.logout()
                this.props.client.resetStore();
              }}>
              Logout
            </NavItem>
          ) : (
            <GamerLogin client={this.props.client} />
          ) }
            <NavItem eventKey={2} href="#">
              Create Account
            </NavItem>
            <GamerCreateAccount client={this.props.client} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>)
  };
}

const hiQuery = gql `
  {
    hi
    resolutions{
      _id
      name
    }
  }
`;
