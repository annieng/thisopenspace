import React, {Component} from 'react'

class PageNav extends Component {

  render() {

    const { spaces, currentPage, perPage, spacesTotal } = this.props
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(spacesTotal / perPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      console.log(pageNumbers)
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    }) 
    return(
      <div> 
        {renderPageNumbers}
      </div>
    )
  }
}

export default PageNav