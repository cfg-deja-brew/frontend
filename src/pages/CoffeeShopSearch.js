import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CoffeeShopMap from '../components/CoffeeShopMap';
import InfoCard from '../components/InfoCard'
import { getCities, getCoffeeShops } from '../api/api.js'
import './CoffeeShopSearch.css'

function CoffeeShopSearch({cityIndex = 0}) {
  const cities = getCities()
  const selectedCity = cities[cityIndex]
  const [coffeeShops, setCoffeeShops] = useState([])

  useEffect(function() {
    getCoffeeShops(selectedCity.name).then(setCoffeeShops)
  }, [selectedCity.name])

  return (
    <div className="container h-100 py-5" style={{marginTop:`2rem`}}>
      <h1 className="d-flex align-items-center display-6 text-light mb-4">
        Coffee Shops in&ensp;
        <span className="dropdown">
          <button className="d-inline-flex align-items-center btn btn-lg btn-outline-light dropdown-toggle" type="button" id="cityDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <h1 className="display-6 mb-0">{selectedCity.name}&nbsp;</h1>
          </button>
          <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="cityDropdown">
            {cities.filter(city => selectedCity.name !== city.name)
                   .map(city => <li>
                                  <Link to={`/coffee-shop-search/${city.name.toLowerCase()}`} className={`dropdown-item ${selectedCity.name === city.name ? 'active' : ''}`}>
                                    {city.name}
                                  </Link>
                                </li>)}
          </ul>
        </span>
      </h1>
      <div className="row h-75">
        <div className="col-md-8 h-100">
          <CoffeeShopMap city={selectedCity} coffeeShops={coffeeShops}/>
        </div>
        <div className="col-md-4 pe-md-4 card-col h-100">
          {coffeeShops.filter(coffeeShop => selectedCity.name === coffeeShop.City)
                      .map(coffeeShop => <InfoCard name={coffeeShop.CafeName} address={coffeeShop.Address} city={coffeeShop.City} postcode={coffeeShop.PostCode}/>)}
        </div>
      </div>
    </div>
  )
}

export default CoffeeShopSearch


