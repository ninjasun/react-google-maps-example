import React, { Component } from 'react';
import { Grid, Row, Col, Tab, Nav, NavItem, } from 'react-bootstrap';
import GoogleMapsWrapper from './Components/GoogleMapsWrapper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Grid>
          <Tab.Container id="about-maps-section" defaultActiveKey="first">
            <Row className="clearfix">
              <Col sm={12}>
                <Nav className="tabs-nav">
                  <NavItem eventKey="first">About</NavItem>
                  <NavItem eventKey="second">Contact</NavItem>
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content animation>

                  <Tab.Pane eventKey="first">

                    <Row>
                      <Col xs={12}>
                        <h1> About Us </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non posuere neque. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis venenatis ut justo semper molestie. Nunc non vulputate nulla, venenatis porta nisl. Nulla facilisi. Sed quis orci dolor. Integer lobortis risus id convallis cursus. Sed non enim libero. Maecenas tincidunt odio vel arcu tristique pharetra. Vestibulum eu nulla nibh. Duis eu dui ex. Nunc dapibus finibus magna, in laoreet ligula suscipit sed. Maecenas eu magna nec lectus vestibulum dictum id nec dolor. Aliquam erat volutpat.</p>
                        <p>Praesent nec orci dictum, vehicula turpis in, ullamcorper magna. Vestibulum aliquam justo nec mauris posuere tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras auctor convallis ex quis suscipit. Nullam condimentum bibendum commodo. Nullam ut laoreet sem. Mauris sodales imperdiet tellus nec convallis. Nullam hendrerit leo sit amet odio porttitor, vitae maximus enim vestibulum. In sed commodo nisl. Ut molestie mauris tempor lacus rutrum faucibus. Ut et consectetur ante. Vivamus quam leo, rutrum non vehicula vel, rhoncus quis eros.</p>
                      </Col>
                    </Row>

                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <Row>
                      <Col xs={12} md={6}>
                          <h1>Contact Us</h1>
                      </Col>
                      <Col xs={12} md={6}>
                          <GoogleMapsWrapper zoom={7} center={{ lat: 44.49650533109348, lng: 11.342010498046877 }} markerPosition={{ lat: 44.71087814987583, lng: 11.406426429748535 }} />
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Grid>
      </div>
    );
  }
}

export default App;
