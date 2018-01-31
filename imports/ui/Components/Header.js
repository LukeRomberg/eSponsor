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
import { Link } from 'react-router-dom'

// import logo from '../logo.png'


export default class Header extends Component {

  render() {
    return (<div className="header">

      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <img src="https://raw.githubusercontent.com/LukeRomberg/eSponsor-API/master/imports/ui/logo.png"/>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
              <Link to='/sponsors'>
                 Sponsors
               </Link>
             </NavItem>
             <NavItem>
               <Link to='/'>
                Gamers
               </Link>
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
                <MenuItem eventKey={1}><Link to='/gamers/signup'>I'm a Gamer</Link></MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={1}><Link to='/sponsors/signup'>I'm a Sponsor</Link></MenuItem>
                {/* <GamerCreateAccount client={this.props.client}/> */}
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
