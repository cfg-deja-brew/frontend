import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CafeMap from '../components/CafeMap';
import InfoCard from '../components/InfoCard';
import { getCities, getCafes } from '../api/api.js';
import './CafeSearch.css';
import FilterModal from '../components/FilterModal';

function CafeSearch({cityIndex = 0}) {
  const cities = getCities()
  const selectedCity = cities[cityIndex]
  const [cafes, setCafes] = useState([])
  const [selectedCafe, setSelectedCafe] = useState(null)

  useEffect(function() {
    setSelectedCafe(null)
    getCafes(selectedCity.name, {
      veganFriendly: false,
      accessible: false,
      dogFriendly: false,
      workFriendly: false,
      trendy: false,
      parking: false,
      dateFriendly: false,
    }).then(setCafes)
  }, [selectedCity.name])

  return (
    <div className="container h-100 py-5" style={{marginTop:`2rem`}}>
      <div className="row">
        <div className="col-md-8">
          <h1 className="d-flex justify-content-between display-6 text-light mb-4">
            <span className="d-flex align-items-center">
              Cafes in&ensp;
              <span className="dropdown">
                <button className="d-inline-flex align-items-center btn btn-lg btn-outline-light dropdown-toggle" type="button" id="cityDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <h1 className="display-6 mb-0">{selectedCity.name}&nbsp;</h1>
                </button>
                <div>
                </div>
                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="cityDropdown">
                  {cities.filter(city => selectedCity.name !== city.name)
                        .map(city => <li>
                                        <Link to={`/cafe-search/${city.name.toLowerCase()}`} className={`dropdown-item ${selectedCity.name === city.name ? 'active' : ''}`}>
                                          {city.name}
                                        </Link>
                                      </li>)}
                </ul>
              </span>
            </span>
            <button className="btn btn-lg btn-outline-light right" type="button" data-bs-toggle="modal" data-bs-target="#filterModal">
              <h1 className="display-6 mb-0">Filters <i className="bi bi-filter"></i></h1>
            </button>
          </h1>
          <FilterModal selectedCity={selectedCity} setSelectedCafe={setSelectedCafe} setCafes={setCafes} />
        </div>
      </div>
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


