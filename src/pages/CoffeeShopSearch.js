import { Link } from 'react-router-dom';
import CoffeeShopMap from '../components/CoffeeShopMap';
import { getCities } from '../api/api.js'
import './CoffeeShopSearch.css' 

function CoffeeShopSearch({cityIndex = 0}) {
  const cities = getCities()
  const selectedCity = cities[cityIndex]

  return (
    <div className="container h-100 py-5">
      <div className="dropdown">
        <button className="btn btn-outline-dark dropdown-toggle" type="button" id="cityDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          {selectedCity.name}
        </button>
        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="cityDropdown">
          {cities.map((city) => <li>
            <Link to={`/coffee-shop-search/${city.name.toLowerCase()}`} className={`dropdown-item ${selectedCity.name === city.name ? 'active' : ''}`}>
              {city.name}
            </Link>
          </li>)}
        </ul>
      </div>
      <h1 className="display-4">Coffee Shops in {selectedCity.name}</h1>
      <CoffeeShopMap city={selectedCity} />
    </div>
  )
}

export default CoffeeShopSearch
