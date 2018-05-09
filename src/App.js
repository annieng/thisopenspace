import React, { Component } from 'react';
import './App.css';

// Components //
import Spaces from './components/Spaces.js'
import PageNav from './components/PageNav.js'
import Loading from './components/Loading.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      spaces : [],
      currentPage : 1,
      perPage : 10,
      spacesTotal: null,
      isLoading : true
    }
  }

  pageNavigate(prevOrNext) {
    console.log('nextOrPrev')
    
    this.setState(
      prevState => ({
        isLoading: true,
        currentPage: 
          prevOrNext === 'NEXT' 
            ? this.state.currentPage + 1
            : this.state.currentPage - 1
      }),
      this.fetchSpaces()
    )
  }

  jumpTo = (number) => {

    this.setState({
      currentPage: number,
      isLoading: true
    }),
      this.fetchSpaces()

  }

  async fetchSpaces() {
      let res = await fetch('https://thisopenspace.com/lhl-test?page=' + this.state.currentPage)
      let data = await res.json()
      this.setState({
        spaces: data.data,
        isLoading: true,
        spacesTotal: data.total
      }),
      this.setState({
        isLoading: false
      }),
      this.forceUpdate()
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

        
        {this.state.isLoading ? (
          <Loading />
        ) : (
        
          <Spaces 
            spaces={this.state.spaces} />
        )
      }
        <div className='pagination-nav'>
          <span>
            <button onClick={()=>{this.pageNavigate('PREV')}}>prev</button>
          </span>
       
          <PageNav 
            curentPage = {this.state.currentPage}
            perPage = {this.state.perPage}
            spacesTotal = {this.state.spacesTotal}
            jumpTo={this.jumpTo}        
          /> 
   
          <span>
            <button onClick={()=>{this.pageNavigate('NEXT')}}>next</button>
          </span>
        </div>
      </div>
    )
  }
}

export default App;




