import React, { Component } from 'react';
import './App.css';
import Spaces from './components/Spaces.js'
import PageNav from './components/PageNav.js'

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

  pageNavigate = () => {
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
        isLoading: true,
        spacesTotal: data.total
      })
      this.setState({
        isLoading: false
      })
      console.log(this.state)
    }



  async componentDidMount() {
    await(this.fetchSpaces())
  }

  componentDidUpdate() {
    window.scrollTo(0,0)
  }

  render() {

    // const { spaces, currentPage, perPage, spacesTotal} = this.state
    // const pageNumbers = []
    // for (let i = 1; i <= Math.ceil(spacesTotal / perPage); i++) {
    //   pageNumbers.push(i);
    // }

    // const renderPageNumbers = pageNumbers.map(number => {
    //   console.log(pageNumbers)
    //   return (
    //     <li
    //       key={number}
    //       id={number}
    //       onClick={this.handleClick}
    //     >
    //       {number}
    //     </li>
    //   );
    // })

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
          
          <button onClick={()=>{this.pageNavigate('NEXT')}}>next</button>
        </div>
        <div> <PageNav {...this.state}/> </div>
      </div>
    )
  }
}

export default App;




