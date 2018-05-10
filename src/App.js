import React, { Component } from 'react'
import './skeleton/css/skeleton.css'
import './App.css'

// Components //
import Spaces from './components/Spaces.js'
import PageNav from './components/PageNav.js'
import Loading from './components/Loading.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      spaces: [],
      currentPage: 1,
      perPage: 10,
      spacesTotal: null,
      isLoading: true
    }
  }

  pageNavigate(prevOrNext) {
    this.setState({
      isLoading: true,
      currentPage:
        prevOrNext === 'NEXT'
          ? this.state.currentPage + 1
          : this.state.currentPage - 1
    }),
      console.log(this.state.currentPage + 'navigating')
  }

  jumpTo = (number) => {
    console.log(number)
    this.setState({
      currentPage: number,
      isLoading: true
    }),
      console.log(this.state.currentPage + 'jump')
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
    })
  }

  componentDidMount() {
    this.fetchSpaces()
    console.log(this.state.currentPage + 'component mount')
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
      this.fetchSpaces()
      window.scrollTo(0, 0)
      console.log(this.state.currentPage + 'component update')
    }
  }


  render() {

    return (

      <div className='App'>

        <div className='header'>
          <img className='openspace-logo' src='./logo.jpg' alt='logo' />
          <img className='openspace-header' src='./header.png' alt='png' />
        </div>

        {this.state.isLoading ?
          (
            <Loading />
          ) :
          (
            <Spaces
              spaces={this.state.spaces} />
          )
        }
        <div className='pagination-nav'>
          <span>
            <button className='nav-button' onClick={() => { this.pageNavigate('PREV') }} disabled={this.state.currentPage === 1}>&#9001;&#9001;</button>
          </span>
          
        {this.state.isLoading? (
          <div>
          </div>
        ):
            <PageNav
              curentPage={this.state.currentPage}
              perPage={this.state.perPage}
              spacesTotal={this.state.spacesTotal}
              jumpTo={this.jumpTo}
            />
        }
  
          <span>
            <button className='nav-button' onClick={() => { this.pageNavigate('NEXT') }} disabled={this.state.currentPage === 4}>&#9002;&#9002;</button>
          </span>
        </div>
        
      </div>
    )
  }
}

export default App;




