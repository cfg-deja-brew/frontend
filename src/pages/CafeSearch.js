import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CafeMap from '../components/CafeMap';
import InfoCard from '../components/InfoCard';
import { getCities, getCafes } from '../api/api.js';
import './CafeSearch.css'

function CafeSearch({cityIndex = 0}) {
  const cities = getCities()
  const selectedCity = cities[cityIndex]
  const [cafes, setCafes] = useState([])
  const [selectedCafe, setSelectedCafe] = useState(null)

  useEffect(function() {
    setSelectedCafe(null)
    getCafes(selectedCity.name).then(setCafes)
  }, [selectedCity.name])

  return (
    <div className="container h-100 py-5" style={{marginTop:`2rem`}}>
      <h1 className="d-flex align-items-center display-6 text-light mb-4">
        Cafes in&ensp;
        <span className="dropdown">
          <button className="d-inline-flex align-items-center btn btn-lg btn-outline-light dropdown-toggle" type="button" id="cityDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <h1 className="display-6 mb-0">{selectedCity.name}&nbsp;</h1>
          </button>
          <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="cityDropdown">
            {cities.filter(city => selectedCity.name !== city.name)
                   .map(city => <li>
                                  <Link to={`/cafe-search/${city.name.toLowerCase()}`} className={`dropdown-item ${selectedCity.name === city.name ? 'active' : ''}`}>
                                    {city.name}
                                  </Link>
                                </li>)}
          </ul>
        </span>
      </h1>
      <div className="row h-75">
        <div className="col-md-8 h-100">
          <CafeMap city={selectedCity} cafes={cafes} selectedCafe={selectedCafe} setSelectedCafe={setSelectedCafe}/>
        </div>
        <div className="col-md-4 pe-md-4 card-col h-100">
          {selectedCafe && <InfoCard highlighted={true} name={selectedCafe.CafeName} description={selectedCafe.CafeDescription} opening={selectedCafe.OpeningTimes}/>}
          {cafes.filter(cafe => selectedCity.name === cafe.City && selectedCafe?.Id !== cafe.Id)
                .map(cafe => <InfoCard highlighted={false} name={cafe.CafeName} description={cafe.CafeDescription} opening={cafe.OpeningTimes} onClick={() => setSelectedCafe(cafe)}/>)}
        </div>
      </div>
    </div>
  )
}

export default CafeSearch


