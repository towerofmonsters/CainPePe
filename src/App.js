import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="center-body">
          <div className="loader-circle-48"></div>
        </div>
      );
    }

    return (
      <div className="App">
        <Router>
          <Navbar />
          <Home />
        </Router>
      </div>
    );
  }
}

export default App;
