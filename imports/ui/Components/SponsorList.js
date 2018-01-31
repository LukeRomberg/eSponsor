import { sponsorList } from '../../api/sponsors/sponsordata.js';
import React, { Component } from 'react';
import {
  Accounts
} from 'meteor/accounts-base'
import {
  withApollo
} from 'react-apollo';
import { Well } from 'react-bootstrap';
import '../App.css'

const SponsorList = () => (
    <div className="sponsorslist">
      <h1>Meet the sponsors</h1>
      {sponsorList.sponsors.map((sponsor,i) => {
        return (
          <Well key={i} bsSize="large" className="sponsorcard">
            <img src={sponsor.picture} />
            <div className="sponsorinfo">
              <h3>{sponsor.name}</h3>
              <h5>What we are.</h5>
              <p>{sponsor.WYD}</p>
              <h5>What we are looking for.</h5>
              <p>{sponsor.WYLF}</p>
            </div>
          </Well>
        )
      })}
    </div>
)

export default SponsorList;
