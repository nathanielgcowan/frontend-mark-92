import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  state = {
    foods: {
      1: { id: 1, img_url: 'Hamburger', name: 'Hamburger' ,price:3 ,quantity:1 }
    }
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
        </div>
      </Router>
    );
  }
}

export default App;