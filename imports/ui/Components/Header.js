import React, {Component} from 'react';
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
              <Tab eventKey={1} title="Sponsors"></Tab>
              <Tab eventKey={2} title="Gamers"></Tab>
            </Tabs>
          </Nav>
          <Nav pullRight>
            {this.props.user._id ? (<NavItem eventKey={1} onClick={() => {
                    Meteor.logout()
                    this.props.client.resetStore();
                  }}>
                  Logout
                </NavItem>)
                : (<NavDropdown eventKey={3} title="Login" id="basic-nav-dropdown">
                  <GamerLogin client={this.props.client}/>
                </NavDropdown>)
            }
            {!this.props.user._id ? (
              <NavDropdown title="Create Account" id="basic-nav-dropdown">
                <GamerCreateAccount client={this.props.client}/>
              </NavDropdown>
            ) : <NavItem eventKey={1}>My Account</NavItem>}
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
