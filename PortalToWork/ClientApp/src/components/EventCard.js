import React, { Component } from "react"
import './EventCard.css';

export class EventCard extends Component {
    constructor(props) {
        super(props);
        this.state = { evt: props.evt};
        console.log(this.state);
    }

     displayDates(startDate, endDate){
        let start = new Date(startDate);
        let end = new Date(endDate);

        let s_year = start.getFullYear();
        let s_month = (1 + start.getMonth()).toString().padStart(2, '0');
        let s_day = start.getDate().toString().padStart(2, '0');

        let prettyStart = s_month + '/' + s_day + '/' + s_year;

        let e_year = end.getFullYear();
        let e_month = (1 + end.getMonth()).toString().padStart(2, '0');
        let e_day = end.getDate().toString().padStart(2, '0');

        let prettyEnd = e_month + '/' + e_day + '/' + e_year;

        return prettyStart + " - " + prettyEnd;
    }

    render() {
        return (
            <div className="event-card">
              
                <div className="event-deets">
                    <div className="event-title">{this.state.evt.title}</div>
                    <div className="event_loc">{this.state.evt.location.name}</div>
                    <div className="event-date">
                        {this.displayDates(this.state.evt.date_begin, this.state.evt.date_end)}
                    </div >
                    <br/>
                    <div className="evt_desc">{this.state.evt.description}</div>
                    <br/>
                    <a href={this.state.evt.url} target="_blank">More Information</a>
                </div>
            </div>
        );
    }

   
}

