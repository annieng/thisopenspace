import React, { Component } from 'react'
import '../App.css';

class Space extends Component {
  render() {
    return(
      <div className='space-listing'>
        <h3>{this.props.space.name}</h3>
        <img src={this.props.space.primary_photo_css_url_small} alt={this.props.space.name} />
        <h4>${this.props.space.daily_price}/day</h4>
        <h5>${this.props.space.hourly_price}/hour</h5>
        <p>{this.props.space.address}</p>
        <p>Capacity: {this.props.space.capacity}</p>

      </div>

    )
  }
}

export default Space