import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {show: false}

  componentDidMount() {
    this.getApi()
  }

  getApi = async () => {
    const api = 'https://hoblist.com/api/movieList'
    const bodyDetails = {
      category: 'movies',
      language: 'kannada',
      genre: 'all',
      movie: 'Bond 25',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(bodyDetails),
    }
    const response = await fetch(api, options)
    const data = await response.json()
    console.log(data)
  }

  onClickChange = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  renderCompanyDetails = () => (
    <div className="company_details">
      <p className="p_white">
        <span className="p_bold">Company: </span>Geeksynergy Technologies Pvt
        Ltd
      </p>
      <p className="p_white">
        <span className="p_bold">Address: </span>Sanjayanagar, Bengaluru-56
      </p>
      <p className="p_white">
        <span className="p_bold">Phone: </span>XXXXXXXXX09
      </p>
      <p className="p_white">
        <span className="p_bold">Email: </span>XXXXXX@gmail.com
      </p>
    </div>
  )

  renderHeader = () => (
    <div className="home_container">
      <button type="button" className="auth_btn" onClick={this.onClickChange}>
        Company Info
      </button>
    </div>
  )

  render() {
    const {show} = this.state
    return (
      <div className="home_bg_container">
        {this.renderHeader()}
        <p className="home_el">Post api call</p>
        {show && this.renderCompanyDetails()}
      </div>
    )
  }
}

export default Home
