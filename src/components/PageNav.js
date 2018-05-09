import React, {Component} from 'react'

class PageNav extends Component {

  render() {
    const { currentPage, perPage, spacesTotal } = this.props
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(spacesTotal / perPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      console.log(number)
      return (   
           
        <span className='page-number-container'>
          <button
          className='page-number-display'
          key={number}
          id={number}
          number={number}
          onClick={() => {this.props.jumpTo(number)}}     
        >
        {number}
        </button>
        </span>
      )
    }) 
    return(
      <div> 
        {renderPageNumbers}
      </div>
    )
  }
}

export default PageNav