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
            <HelpBlock>Which game do you want associated with your profile?</HelpBlock>
            <FormControl type="text"
              placeholder="Rocket League" ref={(input) => this.game = input}  />
            <HelpBlock>Which platform do you play on?</HelpBlock>
            <FormControl type="text"
                placeholder="PC" ref={(input) => this.platform = input}  />
            <HelpBlock>What is your gamertag in that game?</HelpBlock>
            <FormControl type="text"
              placeholder="TheDutchDragon" ref={(input) => this.gamer_tag = input}  />
            <HelpBlock>Which platform do you play on?</HelpBlock>
            <FormControl type="text"
                placeholder="PC" ref={(input) => this.platform = input}  />
          </FormGroup>
          <Button bsStyle="success" type="submit" className="gamerregisterbutton">Register</Button>
        </form>
      </div>
    );
  }
}

export default GamerLogin;
