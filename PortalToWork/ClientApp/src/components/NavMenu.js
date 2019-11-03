import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import logo from '../images/logoClearLrg.png';

export class NavMenu extends Component {
    displayName = NavMenu.name

    

  render() {
      return (
         
          <Navbar inverse fixedTop fluid collapseOnSelect>
             
        <Navbar.Header>
                  <Navbar.Brand>
                      
                      <img src={logo} alt="logo" width="250" className="align-top"/>       
                       
                    
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/results'}>
              <NavItem>
                <Glyphicon glyph='education' /> Results
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/details'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Details
              </NavItem>
            </LinkContainer>
            {/* <LinkContainer to={'/fetchdata'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Fetch data
              </NavItem>
            </LinkContainer> */}
            <LinkContainer to={'/events'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Job Search Events
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/maps'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Maps
              </NavItem>
             </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
