import React, { Component } from 'react'
import Space from './Space.js'
import '../App.css';

class Spaces extends Component {
  render() {
    const spaces = this.props.spaces.map((space, id) => {
      return <Space 
                space = {space}
                key= {id}/>
    })
    return (
      <div className='spaces-container'>
        {spaces}
      </div>
    )
  }
}

export default Spaces;