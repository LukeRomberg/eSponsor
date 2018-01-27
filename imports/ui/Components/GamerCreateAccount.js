import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

class GamerLogin extends Component {

  registerUser = (e) => {
    console.log(e)
    e.preventDefault()
    Accounts.createUser({
      email: this.email.value,
      password: this.password.value
    }, (error) => {
      if(!error){
        this.props.client.resetStore();
      }
      console.log(error);
    })
  }

  render() {
    return (
      <form onSubmit={this.registerUser}>
        <input type="email" ref={(input) => this.email = input} />
        <input type="password" ref={(input) => this.password = input} />
        <button type="submit">Register User</button>
      </form>
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

export default GamerLogin;
