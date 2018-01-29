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
} from 'react-bootstrap';
import GamerLogin from './GamerLogin';
import GamerCreateAccount from './GamerCreateAccount';
import '../App.css';

export default class Header extends Component {

  render() {
    return (<div className="header">
      {/* <img src={myLogo} alt="eSponsor logo" /> */}
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a>eSponsor</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
               Sponsors
             </NavItem>
             <NavItem>
               Gamers
             </NavItem>
          </Nav>
          <Nav pullRight>
            {this.props.user ? (<NavItem eventKey={1} onClick={() => {
                    Meteor.logout()
                    this.props.client.resetStore();
                  }}>
                  Logout
                </NavItem>)
                : (<NavDropdown eventKey={3} title="Login" id="basic-nav-dropdown">
                  <GamerLogin client={this.props.client}/>
                </NavDropdown>)
            }
            {!this.props.user ? (
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
