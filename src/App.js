import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      spaces = [],
      currentPage = 1,
      spacesPerPage = 6,
      //pagesTotal = Num
      isLoading = 'true'
    }
  }
  render() {
    return (
      <div className='results-container'>
        
      </div>
    );
  }
}

export default App;


