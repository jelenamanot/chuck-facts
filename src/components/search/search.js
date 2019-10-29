import React from 'react';
import PropTypes from 'prop-types';
/* components */
import FactList from '../fact-list/fact-list';

class Search  extends React.PureComponent {
    state = {
        areResultsShown: false
    };
    render() {
        const { onChange, searchResults, onItemClick } = this.props;
        return(
            <form className="search w-50 position-relative mx-auto">
                <div className="form-group">
                    <h3>Search for Chuck facts</h3>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type anything"
                        onFocus={() => this.setState({ areResultsShown: true })}
                        // TODO Switch to onChange with debounce
                        onChange={onChange}
                    />
                </div>
                {this.state.areResultsShown && <FactList items={searchResults} onItemClick={onItemClick} />}
            </form>
        )
    }
}

Search.propTypes = {
    onChange: PropTypes.func.isRequired,
    searchResults: PropTypes.array
};

Search.defaultProps = {
    searchResults: null
};

export default Search;