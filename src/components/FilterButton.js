import React from "react";
import './FilterButton.css';


const FilterButton = () => {
  return (
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
    sagittis lacus vel augue laoreet rutrum faucibus.">
    Popover on bottom
    </button>
  );
};

export default FilterButton;