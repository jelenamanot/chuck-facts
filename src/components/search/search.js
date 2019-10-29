import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
/* components */
import FactList from '../fact-list/fact-list';

const Search = ({ onChange, onItemClick, searchResults }) => {
    const [areResultsShown, setStateResultsShown] = useState(false);
    const node = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, false);
        return () => {
            document.addEventListener('mousedown', handleClickOutside, false);
        };
    }, []);

    const handleClickOutside = (e) => {
        if (node && node.current && node.current.contains(e.target)) {
            return;
        }
        setStateResultsShown(false);
    };

    const onFocus = () => setStateResultsShown(true);

    return (
        <form
            ref={node}
            className="search w-50 position-relative mx-auto"
        >
            <div className="form-group">
                <h3>Search for Chuck facts</h3>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Type anything"
                    onFocus={onFocus}
                    onChange={onChange}
                />
            </div>
            {areResultsShown && <FactList items={searchResults} onItemClick={onItemClick} />}
        </form>
    )
};

Search.propTypes = {
    onChange: PropTypes.func.isRequired,
    onItemClick: PropTypes.func.isRequired,
    searchResults: PropTypes.array
};

Search.defaultProps = {
    searchResults: null
};

export default Search;