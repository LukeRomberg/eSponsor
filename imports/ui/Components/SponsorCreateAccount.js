import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base'
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';
import '../App.css'


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
      <div className="gamersignup">
        <form onSubmit={this.registerUser}>
          {/* <input type="email" ref={(input) => this.email = input} />
          <input type="password" ref={(input) => this.password = input} />
          <button type="submit">Register User</button> */}
          <FormGroup controlId="formBasicText">
            <h1>Fill out the form below to create your account and profile.</h1>
            <HelpBlock>Enter your e-mail below</HelpBlock>
            <FormControl      onSubmit={this.registerUser}
              type="email"
              placeholder="Example@place.com"
              ref={(input) => this.email = input}
            />
            <HelpBlock>Enter a password</HelpBlock>
            <FormControl type="password"
              placeholder="Password" ref={(input) => this.password = input}  />
            <HelpBlock>What name do you want to be associated with your account?</HelpBlock>
            <FormControl type="text"
              placeholder="G2 eSports" ref={(input) => this.game = input}  />
            <HelpBlock>What type of sponsor are you?</HelpBlock>
            <FormControl type="text"
                placeholder="I have multiple teams, accross several games and platforms." ref={(input) => this.platform = input}  />
            <HelpBlock>What kind of gamers are you looking for?</HelpBlock>
            <FormControl type="text"
              placeholder="Fun ones that kick butt!" ref={(input) => this.gamer_tag = input}  />
          </FormGroup>
          <Button bsStyle="success" type="submit" className="gamerregisterbutton">Register</Button>
        </form>
      </div>
    );
  }
}

export default GamerLogin;
