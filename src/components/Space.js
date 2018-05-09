import React, { Component } from 'react'
import '../App.css';

class Space extends Component {
  render() {
    return(
      <div className='space-listing one-half column'>
        <img className='property-image' src={this.props.space.primary_photo_css_url_small} alt={this.props.space.name} />
        <h3 className='space-name'>{this.props.space.name}</h3>
        <h5 className='space-daily-price'>${this.props.space.daily_price}/day</h5>
        <h6 className='space-hourly-price'>${this.props.space.hourly_price}/hour</h6>
        <p className='space-address'>{this.props.space.address}</p>
        <span className='space-capacity'>Capacity: {this.props.space.capacity}</span>
        <span className='space-views'> Views: {this.props.space.views_count} </span>
      </div>

    )
  }
}

export default Space