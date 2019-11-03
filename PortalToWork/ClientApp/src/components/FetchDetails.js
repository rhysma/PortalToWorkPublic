import React, { Component } from 'react';
import './Details.css';
import DetailMap from './Merps';

export class FetchDetails extends Component {
  displayName = FetchDetails.name

  constructor(props) {
    super(props);
    this.state = { job: props.location.state.job };
    console.log(props.location.state.job);
    console.log(this.props.location.state.job.title);
  }


  static renderJobsTable(job) {
    return (
      <div className="detailsPage">
          {/* {jobs.map(job => */}
              <div className="details">
                <h2>{job.title}</h2>
              <hr/>
              <h4>{job.employer.name}</h4>
              <div className="description"
                  dangerouslySetInnerHTML={{__html: job.description }}>   
              </div>
              <form action={job.url} className="moreInfo" target="_blank">
                <button className="button more-button">More</button>
              </form>

              <div className="map">
                    <DetailMap job={job} />
              </div>
              <div className="clickMap">
                    <button className="button more-button" onClick={() => window.open("https://maps.google.com/maps/dir?api=1&origin=37.212044,-93.289887&destination=" + job.locations.data[0].lat + "," + job.locations.data[0].lng +"&amp;ll=", "Popup")}>Map</button>
                <div className="Address">
                  <div className="Address1">{job.locations.data[0].street}</div>
                  <div className="Address2">{job.locations.data[0].city} {job.locations.data[0].state}, {job.locations.data[0].zipcode}</div>
                </div>
              </div>
              <hr/>
              <div className="table">
                  <div>
                      <div className="left">Salary</div>
                      <div className="right">{job.pay_rate}</div>
                  </div>
      
                  <div>
                      <div className="left">Job Type</div>
                      <div className="right">{this.getPrettyType(job.job_type)}</div>
                  </div>
      
                  <div>
                      <div className="left">Education</div>
                      <div className="right">{this.getPrettyEdu(job.req_education)}</div>
                  </div>
      
              </div>
            </div>
      </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchDetails.renderJobsTable(
        this.state.job
        );

    return (
      <div>
        {contents}
      </div>
    );
  }

  static mapsSelector(lat, long) {
      let url = "https://maps.google.com/maps?daddr="+lat+","+long+"&amp;ll=";
      return url;
      //window.open("https://maps.google.com/maps?daddr=" +lat+ "," +long+"&amp;ll=");
  }


  static getPrettyType(jobtype){
    var prettyType = "";
    switch(jobtype) {
        case 'full_time':
            prettyType = 'Full Time';
          break;
        case 'part_time':
            prettyType = 'Part Time';
          break;
          case 'internship':
            prettyType = 'Internship';
          break;
          case 'casual':
            prettyType = 'Casual';
          break;
          case 'temporary':
            prettyType = 'Temporary';
          break;
          case 'contractor':
            prettyType = 'Contractor';
          break;
        default:
            prettyType = 'None';
      }
      return prettyType;

    }

    static getPrettyEdu(edu){

      var prettyEdu = "";
  
      switch(edu) {
          case 'high_school':
            prettyEdu = 'High School';
            break;
          case 'associate':
              prettyEdu = 'Associates';
            break;
            case 'bachelor':
              prettyEdu = 'Bachelors';
            break;
            case 'master':
              prettyEdu = 'Masters';
            break;
            case 'doctorate':
              prettyEdu = 'Doctorate';
            break;
          default:
              prettyEdu = 'None';
        }
        return prettyEdu;
      }
}
