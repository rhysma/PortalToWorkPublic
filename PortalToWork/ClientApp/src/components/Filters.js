import React from "react"
import './Filter.css';

function Filters() {
  return (
    <div className="main">
        
        <div className="filters">
     
             <form className="form-inline">  
                  
                      <label htmlFor="jobtype">Job Type </label>
                      <select name="type" className="form-control form-control-sm mb-2" id="jobtype">
                        <option value="ft">Full Time</option>
                        <option value="pt">Part Time</option>
                        <option value="in">Internship</option>
                        <option value="cas">Casual</option>
                        <option value="temp">Temporary</option>
                        <option value="con">Contractor</option>
                       </select>
                   
                  
                  
                      <label htmlFor = "education">Education </label>
                      <select name="education" id="eduction" className="form-control form-control-sm mb-2">
                        <option value="none">No Minimum Education</option>
                        <option value="hs">High School Diploma</option>
                        <option value="as">Associate's Degree</option>
                        <option value="bs">Bachelor's Degree</option>
                        <option value="ms">Master's Degree</option>
                        <option value="dr">Doctorate Degree</option>
                      </select>
                  
                   <label htmlFor ="distance">Distance</label> 
                  <select id="distanct" name="distance" className="form-control form-control-sm mb-2">
                    <option value="15">15 Minutes</option>
                    <option value="30">30 Minutes</option>
                    <option value="45">45 Minutes</option>
                    <option value="60">60 Minutes</option>
                </select>
            </form>
        <hr/>
    </div></div>
  )
}

export default Filters