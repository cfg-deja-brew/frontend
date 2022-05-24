import React from "react";
import './FilterDropdown.css';

function FilterDropdown () {
  return (
  <div className="dropdown">
    <button className="btn btn-lg btn-secondary right" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      <h1 className="display-6 mb-0">Filters <i class="bi bi-filter"></i></h1>
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a className="dropdown-item">Vegan Friendly</a></li>
      <li><a className="dropdown-item">Wifi</a></li>
      <li><a className="dropdown-item">Dog Friendly</a></li>
    </ul>
  </div>
  );
};

export default FilterDropdown;
