import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <Navbar />
            <Home />

          </Router>
        </div>
      </div>
    );
  }
}

export default App;
