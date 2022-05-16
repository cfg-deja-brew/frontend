import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="container h-100 py-5 d-flex flex-column justify-content-center align-items-center text-center text-light">
      <h1 className="text-uppercase fw-bold main-heading">Espresso Yourself</h1>
      <h2 className="pb-5">Search small independent cafes in East Midlands</h2>
      <h3>Where do you want to go today?</h3>
      <div className="city-buttons">
        <Link to="/coffee-shop-search/leicester" className="btn btn-lg btn-outline-light">Leicester</Link>
        <Link to="/coffee-shop-search/nottingham" className="btn btn-lg btn-outline-light">Nottingham</Link>
        <Link to="/coffee-shop-search/derby" className="btn btn-lg btn-outline-light">Derby</Link>
      </div>
    </div>
    

  )
}

export default Home
