import React from "react";
import { geolocated } from "react-geolocated";
import { Link } from 'react-router-dom';
import './Geo.css';
 
class Geo extends React.Component {
    componentDidMount() {
        console.log(this.props)
        
      }
      
      componentWillMount() {
        
      }
    
    
    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (

            <div className="search">
                <button className="search-button"> 
                
                <Link
                    to={{
                        pathname: `/results`,
                        coords: this.props.coords
                        }}
                > Use Current Location</Link></button>
                  
            </div>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}
 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Geo);

