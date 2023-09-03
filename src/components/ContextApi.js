import React from 'react'

const ContextApi = React.createContext({
  input: '',
  option: '',
  isRegistered: false,
  inputFunction: () => {},
})

export default ContextApi
