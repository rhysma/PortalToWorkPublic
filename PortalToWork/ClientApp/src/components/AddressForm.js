import React, { Component } from 'react';
//import logo from  '../images/logoClearLrg.png';
import  '../banner.css';
import { Link } from 'react-router-dom';
import '../AddressForm.css';

class AddressForm extends Component {

    constructor() {
        super()
        this.state = {
            address: "",
            address2: "",
            city: "",
            state: "",
            zip: ""
           
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
      const{name, value, type, checked} = event.target
        
      type === "checkbox" ? this.setState({[name] : checked}) : this.setState({[name]: value})
    }

    
    
    render() {
        return (
     
            <form>
                 <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input className="form-control" 
                        type="text" 
                        value={this.state.address} 
                        name="address" 
                        placeholder="Address" 
                        onChange={this.handleChange}
                    />
                    <label htmlFor="address2">Address Line 2</label>
                    <input className="form-control" 
                        type="text" 
                        value={this.state.address2} 
                        name="address2" 
                        placeholder="Address Line 2" 
                        onChange={this.handleChange}
                    />
                    <label htmlFor="city">City</label>
                    <input className="form-control" 
                        type="text" 
                        value={this.state.city} 
                        name="city" 
                        placeholder="City" 
                        onChange={this.handleChange}
                    />
                    <label htmlFor="state">State</label>
                    <input className="form-control" 
                        type="text" 
                        value={this.state.state} 
                        name="state" 
                        placeholder="State" 
                        onChange={this.handleChange}
                    />
               
                    <label htmlFor="zip">Zip Code</label>
                    <input className="form-control" 
                        type="text" 
                        value={this.state.zip} 
                        name="zip" 
                        placeholder="Zip Code" 
                        onChange={this.handleChange}
                    />
                </div>
                
                <div className="more">
                    <button className="button more-button"> <Link
                        to={{
                            pathname: `/results`,
                            state: this.state
                        }}
                    > Search</Link></button>
                   
                </div>
            </form>
            
        );
    }

}
export default AddressForm