import React, { Component } from 'react';
import Banner from './Banner';
import Geo from './Geo';
import AddressForm from './AddressForm';


export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
        <Banner />
        <Geo />
        <hr/>
        <p>Job Search By Address</p>
        <AddressForm />
      </div>
    
    );
  }
}
