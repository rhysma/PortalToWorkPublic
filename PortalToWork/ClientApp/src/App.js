import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Merps from './components/Merps';
import { FetchData } from './components/FetchData';
import { FetchDetails } from './components/FetchDetails';
import { FetchResults } from './components/FetchResults';
import { FetchEvents } from './components/FetchEvents';


export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/maps' component={Merps} />
        <Route path='/results' component={FetchResults} />
        <Route path='/details' component={FetchDetails} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/events' component={FetchEvents} />

        </Layout>
    );
  }
}
