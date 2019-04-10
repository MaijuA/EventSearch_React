import React, { Component } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import SearchEvents from './components/SearchEvents';
import Jumbotron from './components/Jumbotron';
import { Container, Row, Col } from 'reactstrap';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
      area: "",
      filter: ""
    };
  }

  handleInputChange = (prop) => (event) => {
    let newState = {};
    newState[prop] = event.target.value;
    this.setState(newState);
    console.log(newState);
  }

  filterChangeHandler = (event) => {
    this.setState({ filter: event.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value, e.target[2].value)
    this.setState({ filter: e.target[0].value, area: e.target[1].value, language: e.target[2].value })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Navigation />
        <Jumbotron title={"Tapahtumat"} text={"Hae ajankohtaisia tapahtumia Helsingissä"}
          languageChangeHandler={this.handleInputChange("language")}
          areaChangeHandler={this.handleInputChange("area")}
          filterChangeHandler={this.filterChangeHandler}
          onSubmit={this.onSubmit} />
        <Container>
          <Row>
            <Col><SearchEvents language={this.state.language} area={this.state.area} filter={this.state.filter} /></Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
