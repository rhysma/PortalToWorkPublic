import React, { Component } from 'react';
import './FetchEvents.css';
import { EventCard } from './EventCard';

export class FetchEvents extends Component {
  displayName = FetchEvents.name

  constructor(props) {
    super(props);
      this.state = { evts: [], loading: true };

    fetch('api/Events/Events')
      .then(response => response.json())
      .then(data => {
        this.setState({ evts: data, loading: false });
      });
  }


  static renderEventsTable(evts) {
    return (
      <div className="results">
        
        <div className="filters">
        </div>
            {evts.map(evt =>
                <EventCard key={evt.id} evt={evt} />
  
          )}
      </div>

     
    );
    }
 


    render() {
      let contents = this.state.loading
        ? <p><em>Loading...</em></p>
          : FetchEvents.renderEventsTable(this.state.evts);
  
      return (
        <div>
          <h1>Upcoming Events</h1>
          <p>Local hiring and job search events</p>
          <hr/>
          {contents}
        </div>
      );
    }
}
