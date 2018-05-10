import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div className='loading-container'>
        <img className='loading-gif' src='./kittyloading.gif' alt='loading' />
      </div>
    )
  }
}