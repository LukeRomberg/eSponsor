import React, {
  Component
} from 'react';
import {
  Accounts
} from 'meteor/accounts-base'
import {
  withApollo
} from 'react-apollo';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from 'react-bootstrap';
import Data from '../../api/sponsors/sponsordata.js'

export default class GamerLogin extends Component {

  login = (e) => {
    console.log(e)
    e.preventDefault()
    Meteor.loginWithPassword(this.email.value, this.password.value,
      (error) => {
        if (!error) {
          this.props.client.resetStore();
        }
        console.log(error);
      })
  }

  render() {
    return ( <
      form onSubmit = {
        this.login
      } >
      <
      input type = "email"
      ref = {
        (input) => this.email = input
      }
      /> <
      input type = "password"
      ref = {
        (input) => this.password = input
      }
      /> <
      button type = "submit" > Login User < /button> <
      /form>
      // <form>
      //   <FormGroup
      //     controlId="formBasicText"
      //     validationState={this.getValidationState()}
      //   >
      //     <ControlLabel>Working example with validation</ControlLabel>
      //     <FormControl
      //       type="text"
      //       value={this.state.value}
      //       placeholder="Enter text"
      //       onChange={this.handleChange}
      //     />
      //     <FormControl.Feedback />
      //     <HelpBlock>Validation is based on string length.</HelpBlock>
      //   </FormGroup>
      // </form>
    );
  }
}
