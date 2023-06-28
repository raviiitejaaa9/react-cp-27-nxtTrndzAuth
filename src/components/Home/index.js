// Write your JS code here

import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="home-details-sec">
      <h1 className="home-head"> Clothes That Get You Noticed </h1>
      <p className="home-para"> Fashion is part of the daily air </p>
      <button className="shop-now-btn" type="button">
        {' '}
        Shop Now{' '}
      </button>
    </div>

    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
      alt="should be clothes that get you noticed"
      className="home-img"
    />
  </div>
)

export default Home
