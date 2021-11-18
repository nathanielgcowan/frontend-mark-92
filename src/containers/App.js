import React, { Component } from "react";
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

class App extends Component {
  state = {
    foods: {
      1: { id: 1, img_url: 'Hamburger', name: 'Hamburger' ,price:3 ,quantity:1 }
    }
  }

  render() {
    return (
        <div>
          <NavBar />
          <Outlet />
        </div>
    );
  }
}

export default App;