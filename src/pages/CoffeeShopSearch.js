import { Link } from 'react-router-dom';
import CoffeeShopMap from '../components/CoffeeShopMap';
import InfoCard from '../components/InfoCard'
import { getCities } from '../api/api.js'
import './CoffeeShopSearch.css' 

function CoffeeShopSearch({cityIndex = 0}) {
  const cities = getCities()
  const selectedCity = cities[cityIndex]

  return (
    <div className="container h-100 py-5">
      <h1 className="d-flex align-items-center display-4 text-light mb-4">
        Coffee Shops in&ensp;
        <span className="dropdown">
          <button className="d-inline-flex align-items-center btn btn-lg btn-outline-light dropdown-toggle" type="button" id="cityDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <h1 className="display-4 mb-0">{selectedCity.name}&nbsp;</h1>
          </button>
          <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="cityDropdown">
            {cities.map((city) => <li>
              <Link to={`/coffee-shop-search/${city.name.toLowerCase()}`} className={`dropdown-item ${selectedCity.name === city.name ? 'active' : ''}`}>
                {city.name}
              </Link>
            </li>)}
          </ul>
        </span>
      </h1>
      <div className="row h-100">
        <div className="col-md-8">
          <CoffeeShopMap city={selectedCity} />
        </div>
        <div className="col-md-4">
          <InfoCard />
          <InfoCard />
        </div>
      </div>
    </div>
  )
}

export default CoffeeShopSearch


