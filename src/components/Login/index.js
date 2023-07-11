import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookie from 'js-cookie'

class Login extends Component {
  setCookieWithToken = jwtToken => {
    const {history} = this.props
    Cookie.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onClickLogion = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: 'praneetha', password: 'praneetha@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.setCookieWithToken(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookie.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <h1>Please Login</h1>
        <button type="button" onClick={this.onClickLogion}>
          Login with Sample Creds
        </button>
      </>
    )
  }
}

export default Login
