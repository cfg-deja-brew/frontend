import React, { useState } from 'react';
import CoffeeShopMap from './CoffeeShopMap';
import { getCities } from './api/api.js'

function App() {
  const cities = getCities()
  const [selectedCity, setSelectedCity] = useState(cities[0])

  return (
    <div className="container h-100 py-5">
      <div className="dropdown">
        <button className="btn btn-outline-dark dropdown-toggle" type="button" id="cityDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          {selectedCity.name}
        </button>
        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="cityDropdown">
          {cities.map((city) => <li>
            <button className={`dropdown-item ${selectedCity.name === city.name ? 'active' : ''}`} onClick={() => setSelectedCity(city)}>
              {city.name}
            </button>
          </li>)}
        </ul>
      </div>
      <h1 className="display-4">Coffee Shops in {selectedCity.name}</h1>
      <CoffeeShopMap city={selectedCity} />
    </div>
  )
}

export default App
