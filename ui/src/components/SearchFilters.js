import React, { useState } from 'react';

function SearchFilters(props) {
  const [activeButton, setActiveButton] = useState('default');

  onClickFilterItem = button => {
    setActiveButton(button);
  };

  toggleDefaultFilter = () => {
    setActiveButton('default');
    props.filterChange('default');
  };

  toggleAwardsFilter = () => {
    setActiveButton('awards');
    props.filterChange('awards');
  };

  togglePlaceFilter = () => {
    setActiveButton('place');
    props.filterChange('place');
  };

  toggleStandingsFilter = () => {
    setActiveButton('age');
    props.filterChange('age');
  };

  return (
    <div className="filters">
      <p>filter by:</p>
      <button
        onClick={this.toggleDefaultFilter}
        className={`filter-btn ${
          activeButton === 'default' ? 'active-btn' : null
        }`}>
        default view
      </button>
      <button
        onClick={this.toggleAwardsFilter}
        className={`filter-btn ${
          activeButton === 'awards' ? 'active-btn' : null
        }`}>
        results by awards
      </button>
      <button
        onClick={this.togglePlaceFilter}
        className={`filter-btn ${
          activeButton === 'place' ? 'active-btn' : null
        }`}>
        results by place
      </button>
      <button
        onClick={this.toggleStandingsFilter}
        className={`filter-btn ${
          activeButton === 'age' ? 'active-btn' : null
        }`}>
        age group standings
      </button>
    </div>
  );
}

export default SearchFilters;
