import React, { Component } from 'react';
import { JobCard } from './JobCard';
import Filters from './Filters';
import './FetchResults.css';

export class FetchResults extends Component {
  displayName = FetchResults.name

  constructor(props) {
    super(props);
    this.state = { jobs: [], loading: true };

    if(props.location.coords != null){
      // eslint-disable-next-line
      let lat = props.location.coords.latitude;
      // eslint-disable-next-line
      let long = props.location.coords.longitude;
      console.log(props.location.coords);
    }

    if(this.props.location.state != null)
        {
          var propAddress = this.props.location.state.address;
          var propAddress2 = this.props.location.state.address2;
          var propCity = this.props.location.state.city;
          var propState = this.props.location.state.state;
          var propZip = this.props.location.state.zip  ;
          console.log(propAddress + " " + propAddress2 + " " +  propCity + " " + propState + " " +  propZip);
        }
        

  }

  static renderJobsTable(jobs) {
    return (
      <div className="results">
        
        <div className="filters">
          <Filters />
        </div>
            {jobs.map(job =>
                <JobCard key={job.id} job={job} />
  
          )}
      </div>

     
    );
    }

    componentDidMount() {
      
    }

    componentWillMount() 
    {
      fetch('api/Jobs/Jobs')
      .then(response => response.json())
      .then(data => {
        this.setState({ jobs: data, loading: false });
      });
    }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchResults.renderJobsTable(this.state.jobs);

    return (
      <div>
        {contents}
      </div>
    );
  }
}
