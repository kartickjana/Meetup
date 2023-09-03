import {Component} from 'react'

class NotFound extends Component {
  render() {
    return (
      <>
        <div className="css-notfound-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
            alt="not found"
            className="css-website-logo-itself"
          />
          <h1>Page Not Found</h1>
          <p>We are sorry, the page you requested could not be found</p>
        </div>
      </>
    )
  }
}

export default NotFound
