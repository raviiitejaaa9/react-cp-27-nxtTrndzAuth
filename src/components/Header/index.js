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
    <ul className="link-items-container">
      <Link className="link-item" to="/">
        <li> Home </li>
      </Link>
      <Link className="link-item" to="/products">
        <li> Products </li>
      </Link>
      <Link className="link-item" to="/cart">
        <li> Cart </li>
      </Link>
      <button type="button" className="logout-btn">
        {' '}
        Logout{' '}
      </button>
    </ul>
  </div>
)

export default Header
