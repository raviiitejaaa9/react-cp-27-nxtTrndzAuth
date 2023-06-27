// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-sec">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="website-logo"
    />
    <div className="link-items-container">
      <Link className="link-item" to="/">
        <p> Home </p>
      </Link>
      <Link className="link-item" to="/products">
        <p> Products </p>
      </Link>
      <Link className="link-item" to="/cart">
        <p> Cart </p>
      </Link>
      <button type="button" className="logout-btn">
        {' '}
        Logout{' '}
      </button>
    </div>
  </div>
)

export default Header
