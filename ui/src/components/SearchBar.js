import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import Ionicon from 'react-ionicons';

/**
 * Container component for rendering the entire search bar along with it's
 * nested functionality (e.g. auto-suggested searching)
 *
 * @param {array}  runners                  array of all runner data.
 * @param {string} value                    the current value of the search box.
 * @param {string} placeholder              temp string of text for search box placeholder
 * @param {function} selectedRunnerChange   callback function to change activeRunner state.
 *
 * @docs https://github.com/moroshko/react-autosuggest#features
 * @docs https://github.com/zamarrowski/react-ionicons/
 */
function SearchBar(props) {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState(props.runners);
  const [placeholder, setPlaceholder] = useState(
    'Search by name or bib number'
  );
  const searchInputRef = React.createRef();

  const onChange = (event, { newValue }) => setValue(newValue);

  const onSuggestionsFetchRequested = ({ value }) =>
    setSuggestions(getSuggestions(value));

  const onSuggestionsClearRequested = () => setSuggestions([]);

  const onClearSearch = () => {
    props.selectedRunnerChange(null);
    setValue('');
  };

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : props.runners.filter(runner =>
          `${runner.name} ${runner.bib_number}`
            .toLowerCase()
            .includes(inputValue)
        );
  };

  /* element for styling each li in the suggestions dropdown */
  const renderSuggestion = suggestion => {
    return (
      <div className="suggested-result">
        <h3>{suggestion.name}</h3>
        <i className="suggested-result-location">
          {suggestion.city}, {suggestion.state}
        </i>{' '}
        <i className="suggested-result-bib">Bib No: {suggestion.bib_number}</i>
      </div>
    );
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion.
  const getSuggestionValue = suggestion => {
    props.selectedRunnerChange(suggestion);
    return suggestion.name;
  };

  const clearPlaceholder = value => {
    setPlaceholder('');
    return value;
  };

  return (
    <div className="search-bar">
      <div className="search-box" onClick={clearPlaceholder}>
        <Ionicon
          className="search-button"
          icon="md-search"
          fontSize="26px"
          color="white"
        />
        <Autosuggest
          className="search"
          ref={searchInputRef}
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{ placeholder, value, onChange }}
        />
        {value === '' ? (
          ''
        ) : (
          <Ionicon
            className="close-circle"
            icon="md-close-circle"
            fontSize="26px"
            color="#fff"
            onClick={onClearSearch}
          />
        )}
      </div>
    </div>
  );
}

export default SearchBar;
