import {Component} from 'react'
import './index.css'

class AuthenticationRoute extends Component {
  state = {
    username: '',
    password: '',
    pUsername: '',
    pPassword: '',
    email: '',
    phoneNumber: '',
    profession: 'student',
    showAuthenticator: false,
    whatToShow: '',
    errorTxt: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePUsername = event => {
    this.setState({pUsername: event.target.value})
  }

  onChangePPassword = event => {
    this.setState({pPassword: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePhoneNumber = event => {
    this.setState({phoneNumber: event.target.value})
  }

  onChangeProfession = event => {
    this.setState({profession: event.target.value})
  }

  onSubmitLogin = event => {
    const {history} = this.props
    event.preventDefault()
    const {pUsername, pPassword} = this.state
    if (localStorage.getItem(pUsername) === null) {
      this.setState({errorTxt: "User did'nt exist"})
    } else {
      const details = JSON.parse(localStorage.getItem(pUsername))
      if (pPassword === details.password) {
        history.replace('/home')
      } else {
        this.setState({errorTxt: 'Incorrect Password'})
      }
    }
  }

  onSubmitSignup = event => {
    const {history} = this.props
    event.preventDefault()
    const {username, password, email, phoneNumber, profession} = this.state
    const userDetails = {
      username,
      password,
      email,
      phoneNumber,
      profession,
    }
    if (localStorage.getItem(username) === null) {
      localStorage.setItem(username, JSON.stringify(userDetails))
      history.push('/home')
    } else {
      this.setState({errorTxt: 'Username already exists'})
    }
  }

  renderLogin = () => {
    const {pUsername, pPassword} = this.state
    return (
      <form className="auth_form" onSubmit={this.onSubmitLogin}>
        <label htmlFor="username" className="label_el">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="input_el"
          placeholder="Username"
          onChange={this.onChangePUsername}
          value={pUsername}
        />
        <label htmlFor="password" className="label_el">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input_el"
          placeholder="Password"
          onChange={this.onChangePPassword}
          value={pPassword}
        />
        <button type="submit" className="auth_btn login_submit">
          Submit
        </button>
      </form>
    )
  }

  renderSignUp = () => {
    const {username, password, email, phoneNumber, profession} = this.state
    return (
      <form className="auth_form" onSubmit={this.onSubmitSignup}>
        <label htmlFor="username" className="label_el">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="input_el"
          placeholder="Username"
          onChange={this.onChangeUsername}
          value={username}
        />
        <label htmlFor="password" className="label_el">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input_el"
          placeholder="New Password"
          onChange={this.onChangePassword}
          value={password}
        />
        <label htmlFor="email" className="label_el">
          Email
        </label>
        <input
          type="text"
          id="email"
          className="input_el"
          placeholder="Email"
          onChange={this.onChangeEmail}
          value={email}
        />
        <label htmlFor="phone" className="label_el">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          className="input_el"
          placeholder="Phone Number"
          onChange={this.onChangePhoneNumber}
          value={phoneNumber}
        />
        <label htmlFor="profession" className="label_el">
          Profession
        </label>
        <select
          className="input_el"
          id="profession"
          onChange={this.onChangeProfession}
          value={profession}
        >
          <option value="student">Student</option>
          <option value="engineer">Engineer</option>
          <option value="analyst">Analyst</option>
        </select>
        <button type="submit" className="auth_btn login_submit">
          Submit
        </button>
      </form>
    )
  }

  onClickShowSignup = () => {
    this.setState({showAuthenticator: true, whatToShow: 'signUp'})
  }

  onClickShowLogin = () => {
    this.setState({showAuthenticator: true, whatToShow: 'login'})
  }

  render() {
    const {whatToShow, showAuthenticator, errorTxt} = this.state
    return (
      <div className="auth_bg_container">
        <div className="auth_container">
          <div className="auth_select_container">
            <button
              type="button"
              className="auth_btn"
              onClick={this.onClickShowSignup}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="auth_btn"
              onClick={this.onClickShowLogin}
            >
              Login
            </button>
          </div>
          {showAuthenticator &&
            (whatToShow === 'login' ? this.renderLogin() : this.renderSignUp())}
          {errorTxt !== null ? (
            <p className="error_txt">{`${errorTxt}`}</p>
          ) : null}
        </div>
      </div>
    )
  }
}

export default AuthenticationRoute
