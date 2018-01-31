import React, { Component } from 'react';
import {
  Accounts
} from 'meteor/accounts-base'
import {
  withApollo
} from 'react-apollo';
import { Well } from 'react-bootstrap';
import { gamersData as gamer } from '../../api/gamers/gamersdata.js';
import '../App.css';
import { Link } from 'react-router-dom';


export default class GamersList extends Component{
  render(){
  return(
    <div className="gamerslist">
      <h1>{gamer[0].name}</h1>
          <Well className="singlegamercard">
            <div>
              <img src={gamer[0].picture} />
            </div>
            <div className="singlegamerinfo">
              <h5>What I play:</h5>
              <p>I go by {gamer[0].gamer_tag} on {gamer[0].game}, {gamer[0].platform}</p>
              <h5>What I have done:</h5>
              {gamer[0].accomplishments.map((accomplishment, i) => {
                return (
                  <div key={i}>
                    <h6>{accomplishment.name}</h6>
                    <p>{accomplishment.description}</p>
                  </div>
                )
              })}
              <h5>Here's my social media:</h5>
              <div className="gamersocial">
                {gamer[0].social.map((social, i) => {
                  return (
                    <a key={i} href={social.link}>Click here to go to my {social.platform}</a>
                  )
                })}
              </div>
              <h5>What I'm looking for</h5>
                {gamer[0].needs.map((need,i)=>{
                  return (
                    <div key={i} className="needslist">
                    <p>I need: {need.need}</p>
                    <p>It costs: {need.cost}</p>
                    <p>What you get: {need.return}</p>
                    </div>
                  )
                })}
            </div>
          </Well>
        )
      })}
    </div>
  )}
}
