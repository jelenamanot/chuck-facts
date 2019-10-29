import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* actions */
import { getFacts } from './facts-actions';
/* components */
import Search from '../../components/search/search';

class Facts extends React.Component {
    render() {
        return (
            <div>
                <Search
                    onChange={(e) => this.props.getFacts(e.target.value)}
                    searchResults={this.props.facts && this.props.facts.result}
                    // TODO
                    onItemClick={() => {}}
                />
                <div style={{height: '20rem', border: '1px solid black'}}>placeholder content</div>
            </div>
        )
    }
}

Facts.propTypes = {
    facts: PropTypes.object,
    getFacts: PropTypes.func.isRequired
};

Facts.defaultProps = {
    facts: null
};

function mapStateToProps(state) {
    return {
        facts: state.factsReducer.facts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getFacts: (query) => getFacts(dispatch, query)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Facts);