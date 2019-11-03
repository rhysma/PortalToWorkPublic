import React, { Component } from "react"
import './JobCard.css';
import { Link } from 'react-router-dom';

export class JobCard extends Component {
    constructor(props) {
        super(props);
        this.state = { job: props.job};
        console.log(this.state);
    }

    render() {
        return (
            <Link
                to={{
                    pathname: `/details`,
                    state: { job: this.state.job }
                    }}
            >
            <div className="job-card">
              
                <div className="circle">{this.state.job.id}</div>
                <div className="job-deets">
                    <div className="job-title">{this.state.job.title}</div >
                    <div  className="employer">{this.state.job.employer.name}</div >
                    <div className="icons">
                        <div className="walkDist">
                            <i className="fas fa-walking"></i>
                            <div id="walkval">20</div>
                        </div>
                        <div className="driveDist">
                            <i className="fas fa-car"></i>
                            <div id="driveval">5</div>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        );
    }
}
