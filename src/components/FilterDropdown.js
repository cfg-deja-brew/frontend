import React from "react";
import './FilterDropdown.css';

const FilterDropdown = () => {
  return (
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle right" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Filters
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item">Vegan Friendly</a></li>
      <li><a class="dropdown-item">Wifi</a></li>
      <li><a class="dropdown-item">Dog Friendly</a></li>
    </ul>
  </div>
  );
};


export default FilterDropdown;



