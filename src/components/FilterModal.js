import React, { useState } from 'react';
import { getCafes } from '../api/api.js';

function FilterModal({selectedCity, setSelectedCafe, setCafes}) {
  const [veganFriendly, setVeganFriendly] = useState(false)
  const [accessible, setAccessible] = useState(false)
  const [dogFriendly, setDogFriendly] = useState(false)
  const [workFriendly, setWorkFriendly] = useState(false)
  const [trendy, setTrendy] = useState(false)
  const [parking, setParking] = useState(false)
  const [dateFriendly, setDateFriendly] = useState(false)

  function submitFilters(e) {
    e.preventDefault()
    setSelectedCafe(null)
    getCafes(selectedCity.name, {
      veganFriendly,
      accessible,
      dogFriendly,
      workFriendly,
      trendy,
      parking,
      dateFriendly,
    }).then(setCafes)
  }

  return (
    <div className="modal fade" id="filterModal" tabIndex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
      <div className="modal-dialog d-flex align-items-center h-100 my-0">
        <div className="modal-content text-center text-dark">
          <button type="button" className="btn btn-close align-self-end m-3" data-bs-dismiss="modal" aria-label="Close"></button>
          <h4 id="filterModalLabel">Filters</h4>
          <form className="modal-body" onSubmit={submitFilters}>
            <div className="form-check d-inline-block">
              <input className="form-check-input" type="checkbox" value="" id="veganFriendly" onChange={(event) => setVeganFriendly(event.target.checked)} />
              <label className="form-check-label" htmlFor="veganFriendly">
                Vegan-friendly
              </label>
            </div>
            <br />
            <div className="form-check d-inline-block">
              <input className="form-check-input" type="checkbox" value="" id="accessibility" onChange={(event) => setAccessible(event.target.checked)} />
              <label className="form-check-label" htmlFor="accessibility">
                Accessible
              </label>
            </div>
            <br />
            <div className="form-check d-inline-block">
              <input className="form-check-input" type="checkbox" value="" id="dogFriendly" onChange={(event) => setDogFriendly(event.target.checked)} />
              <label className="form-check-label" htmlFor="dogFriendly">
                Dog-friendly
              </label>
            </div>
            <br />
            <div className="form-check d-inline-block">
              <input className="form-check-input" type="checkbox" value="" id="workFriendly" onChange={(event) => setWorkFriendly(event.target.checked)} />
              <label className="form-check-label" htmlFor="workFriendly">
                Suitable for working
              </label>
            </div>
            <br />
            <div className="form-check d-inline-block">
              <input className="form-check-input" type="checkbox" value="" id="trendy" onChange={(event) => setTrendy(event.target.checked)} />
              <label className="form-check-label" htmlFor="trendy">
                Instagrammable
              </label>
            </div>
            <br />
            <div className="form-check d-inline-block">
              <input className="form-check-input" type="checkbox" value="" id="parking" onChange={(event) => setParking(event.target.checked)} />
              <label className="form-check-label" htmlFor="parking">
                Has parking
              </label>
            </div>
            <br />
            <div className="form-check d-inline-block">
              <input className="form-check-input" type="checkbox" value="" id="dateFriendly" onChange={(event) => setDateFriendly(event.target.checked)} />
              <label className="form-check-label" htmlFor="dateFriendly">
                Good for dates
              </label>
            </div>
            <br />
            <button type="submit" className="btn btn-outline-dark align-self-center m-3"  data-bs-toggle="modal" data-bs-target="#filterModal">Search</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FilterModal
