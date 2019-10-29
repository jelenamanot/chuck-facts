import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
/* styles */
import './search-results.scss';

const SearchResults = ({ items, onItemClick }) => (
    <ul className="list-group overflow-auto search-results">
        {items.map(item => (
            <li key={item.id} className="list-group-item">
                {item.value}
                <Link to={`/details/${item.id}`}>
                    <button
                        type="button"
                        className="btn btn-link"
                        onClick={onItemClick}
                    >
                        View more
                    </button>
                </Link>
            </li>)
        )}
    </ul>
);

SearchResults.propTypes = {
    items: PropTypes.array
};

export default SearchResults;