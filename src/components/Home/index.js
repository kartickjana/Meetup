import {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  BgContainer,
  Navbar,
  RegisterJoinContainer,
  MeetupContainer,
  Button,
} from '../StyledComponents'
import ContextApi from '../ContextApi'

class Home extends Component {
  registerForm = () => {
    const {history} = this.props
    history.replace('/register')
  }

  render() {
    return (
      <ContextApi.Consumer>
        {value => {
          const {input, option, isRegistered} = value
          console.log(input, option, isRegistered)
          return (
            <BgContainer>
              <Navbar>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                />
              </Navbar>
              <RegisterJoinContainer>
                <MeetupContainer>
                  {!isRegistered ? (
                    <h1>Welcome to Meetup</h1>
                  ) : (
                    <h1>Hello {input}</h1>
                  )}
                  {!isRegistered ? (
                    <p>Please register for the topic</p>
                  ) : (
                    <p>Welcome to {option}</p>
                  )}
                  {!isRegistered && (
                    <Link to="/register">
                      <Button type="button">Register</Button>
                    </Link>
                  )}

                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                      alt="meetup"
                    />
                  </div>
                </MeetupContainer>
              </RegisterJoinContainer>
            </BgContainer>
          )
        }}
      </ContextApi.Consumer>
    )
  }
}

export default Home
