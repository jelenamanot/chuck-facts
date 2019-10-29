import React from 'react';
import PropTypes from 'prop-types';
/* components */
import SearchResults from '../search-results/search-results';
/* styles */
import './search.scss';

const Search = ({ onChange, searchResults, onItemClick }) => (
    <form className="search">
        <div className="form-group">
            <label htmlFor="fact">Search for facts</label>
            <input
                type="text"
                id="fact"
                className="form-control"
                placeholder="Type anything"
                // TODO Switch to onChange with debounce
                onBlur={onChange}
            />
        </div>
        {searchResults && <SearchResults items={searchResults} onItemClick={onItemClick} />}
    </form>
);

Search.propTypes = {
    onChange: PropTypes.func.isRequired,
    searchResults: PropTypes.array
};

Search.defaultProps = {
    searchResults: null
};

export default Search;