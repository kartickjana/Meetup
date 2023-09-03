import {Component} from 'react'
import {
  BgContainer,
  Navbar,
  RegisterJoinContainer,
  LetusJoinContainer,
  InputContainer,
  InputItself,
  SelectContainer,
  Button,
} from '../StyledComponents'
import ContextApi from '../ContextApi'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {id: 'ARTS_AND_CULTURE', displayText: 'Arts and Culture'},
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    inputName: '',
    optionSelected: topicsList[0].id,
    optionText: topicsList[0].displayText,
    errorMsg: false,
    isRegistered: true,
  }

  inputNameChange = event => {
    this.setState({inputName: event.target.value})
  }

  optionSelectedChange = event => {
    const displayText = event.target.value
    console.log(displayText)
    const filteredId = topicsList.filter(
      eachList => eachList.id === displayText,
    )
    console.log('hello')
    console.log(filteredId[0].id)
    this.setState({
      optionSelected: filteredId[0].id,
      optionText: filteredId[0].displayText,
    })
  }

  render() {
    return (
      <ContextApi.Consumer>
        {value => {
          const {
            inputName,
            optionSelected,
            optionText,
            errorMsg,
            isRegistered,
          } = this.state
          console.log(optionSelected)
          const {inputFunction} = value
          const submitForm = event => {
            event.preventDefault()
            if (inputName === '') {
              this.setState({errorMsg: true})
            } else {
              const {history} = this.props
              history.replace('/')
              const inputOption = {inputName, optionText, isRegistered}
              inputFunction(inputOption)
            }
          }
          return (
            <BgContainer>
              <Navbar>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                />
              </Navbar>
              <RegisterJoinContainer>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                </div>
                <LetusJoinContainer>
                  <h1>Let us join</h1>
                  <form onSubmit={submitForm}>
                    <InputContainer>
                      <label htmlFor="name">NAME</label>
                      <InputItself
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        value={inputName}
                        onChange={this.inputNameChange}
                      />
                    </InputContainer>
                    <InputContainer>
                      <label htmlFor="topics">TOPICS</label>
                      <SelectContainer
                        id="topics"
                        value={optionSelected}
                        onChange={this.optionSelectedChange}
                      >
                        {topicsList.map(eachList => (
                          <option key={eachList.id} value={eachList.id}>
                            {eachList.displayText}
                          </option>
                        ))}
                      </SelectContainer>
                    </InputContainer>
                    <Button type="submit">Register Now</Button>
                  </form>
                  {errorMsg && <p>Please enter your name</p>}
                </LetusJoinContainer>
              </RegisterJoinContainer>
            </BgContainer>
          )
        }}
      </ContextApi.Consumer>
    )
  }
}

export default Register
