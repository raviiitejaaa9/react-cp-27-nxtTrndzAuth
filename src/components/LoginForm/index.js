// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
  }

  onSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onFailure = error => {
    this.setState({errorMsg: error})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    // console.log(this.props)

    const url = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data.error_msg)
    // console.log(response)

    if (response.ok === true) {
      this.onSuccess()
    }
    this.onFailure(data.error_msg)
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg} = this.state

    // let loginError

    const loginError =
      errorMsg === '' ? null : <p className="login-error"> {errorMsg} </p>

    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-img"
        />

        <form className="form-sec" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website-logo"
            className="form-logo"
          />
          <div className="label-container">
            <label htmlFor="username" className="label-el">
              {' '}
              Username{' '}
            </label>
            <input
              type="input"
              className="input-el"
              id="username"
              placeholder="Username"
              onChange={this.onChangeUsername}
              value={username}
            />
          </div>

          <div className="label-container">
            <label htmlFor="password" className="label-el">
              Password
            </label>
            <input
              type="password"
              className="input-el"
              id="password"
              placeholder="Password"
              onChange={this.onChangePassword}
              value={password}
            />
          </div>

          <button type="submit" className="form-btn">
            {' '}
            Login{' '}
          </button>

          {loginError}
        </form>
      </div>
    )
  }
}

export default LoginForm
