import React, { Component } from 'react';
import './App.css';
import Spaces from './components/Spaces.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      spaces : [],
      currentPage : 1,
      perPage : 10,
      //pagesTotal : null,
      isLoading : true
    }
  }

  pageNavigate = () => {
    // write function to change state of current page to either
    // next or previous page (++ or --)
    console.log('next')
    this.setState(
      prevState => ({
        currentPage: this.state.currentPage + 1
      }),
      () => this.fetchSpaces()
    )
  }

  pageNavigate(prevOrNext) {
    console.log('nextOrPrev')
    
    this.setState(
      prevState => ({
        currentPage: 
          prevOrNext === 'NEXT' 
            ? prevState.currentPage + 1
            : prevState.currentPage - 1

      })
    )
  }
 async fetchSpaces(page, perPage) {
      let res = await fetch('https://thisopenspace.com/lhl-test?page=' + this.state.currentPage)
      let data = await res.json()
      this.setState({
        spaces: data.data,
        isLoading: true
      })
      this.setState({
        isLoading: false
      })
      console.log(this.state.spaces)
      console.log(this.state)
    }

    getTotalPages() {
      const { spaces, currentPage, perPage } = this.state
      let pagesTotal = []
      
      for (let i = 1; i < spaces.length / perPage; i++) {
        pagesTotal.push(i)
      }

      pagesTotal.map(number => {
        return (
          <li
            key={number}
            id ={number} >
            {number}
          </li>
        )
      })
    }

  componentDidMount() {
    this.fetchSpaces()
  }

  componentDidUpdate() {
    window.scrollTo(0,0)
  }

  render() {

    return (
      
      <div className='App'>

        <div className='header'>
          <img className='openspace-logo' src='./logo.jpg' alt='logo' />
          <img className='openspace-header' src='./header.png' alt='png' />
        </div>

        <div className='spaces-container'>
          <Spaces 
            spaces={this.state.spaces} />
        </div>

        <div className='pagination-nav'>
          <button onClick={()=>{this.pageNavigate('PREV')}}>prev</button>
          {this.getTotalPages}
          <button onClick={()=>{this.pageNavigate('NEXT')}}>next</button>
        </div>

      </div>
    )
  }
}

export default App;




