import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter as Router } from "react-router-dom";

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
