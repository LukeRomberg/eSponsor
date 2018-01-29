import React, { Component } from 'react';
import {
  Accounts
} from 'meteor/accounts-base'
import {
  withApollo
} from 'react-apollo';
import { Well } from 'react-bootstrap';
import {gamersData} from '../../api/gamers/gamersdata.js';
import '../App.css'

export default class GamersList extends Component{
  render(){
  return(
    <div className="gamerslist">
      <h1>Meet the Gamers</h1>
      {gamersData.map((gamer, i) => {
        return (
          <Well key={i} bsSize="large" className="gamercard">
            <img src={gamer.picture} />
            <div className="gamerinfo">
              <h3>{gamer.name}</h3>
              <h5>What I play.</h5>
              <p>I go by {gamer.gamer_tag} on {gamer.game}, {gamer.platform}</p>
              <h5>Here are my accomplishments</h5>
              {gamer.accomplishments.map((accomplishment, i) => {
                return (
                  <div key={i}>
                    <h6>{accomplishment.name}</h6>
                    <p>{accomplishment.description}</p>
                  </div>
                )
              })}
              <h5>Here's my social media:</h5>
              <div className="gamersocial">
                {gamer.social.map((social, i) => {
                  return (
                    <a key={i} href={social.link}>{social.platform}</a>
                  )
                })}
              </div>
            </div>
          </Well>
        )
      })}
    </div>
  )}
}
