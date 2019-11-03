import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
class Map extends Component {
    constructor(props) {
        super(props);
        this.state = { job: props.job };
    }
    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: this.state.job.locations.data[0].lat, lng: this.state.job.locations.data[0].lng }}
                defaultZoom={18}
            >
                <Marker position={{ lat: this.state.job.locations.data[0].lat, lng: this.state.job.locations.data[0].lng }} />
            </GoogleMap>
        ));
        return (
            <div>
                <GoogleMapExample
                    containerElement={<div style={{ height: '250px', width: '300px' }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                />
            </div>
        );
    }
};
export default Map;