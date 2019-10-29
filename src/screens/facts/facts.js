import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* actions */
import { getFacts, setViewedFact, setFactsEmpty } from './facts-actions';
/* components */
import Search from '../../components/search/search';
import Card from '../../components/card/card';
import FactListItem from '../../components/fact-list-item/fact-list-item';

class Facts extends React.Component {
    componentWillUnmount() {
        this.props.setFactsEmpty();
    }

    render() {
        const isRandom = true;
        return (
            <div>
                <Search
                    onChange={(e) => this.props.getFacts(e.target.value)}
                    searchResults={this.props.facts}
                    onItemClick={(fact) => this.props.setViewedFact(fact)}
                />
                <Card
                    title={isRandom ? "We are showing random facts" : "Recently viewed facts"}
                    subtitle={isRandom ? "Try searching for some fact above" : "Last 10 results"}
                >
                    {this.props.viewedFacts.map(fact => <FactListItem key={fact.id} item={fact} onItemClick={() => {}} />)}
                </Card>
            </div>
        )
    }
}

Facts.propTypes = {
    facts: PropTypes.array.isRequired,
    getFacts: PropTypes.func.isRequired,
    setViewedFact: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        facts: state.factsReducer.facts,
        viewedFacts: state.factsReducer.viewedFacts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getFacts: (query) => getFacts(dispatch, query),
        setViewedFact: (fact) => setViewedFact(dispatch, fact),
        setFactsEmpty: () => setFactsEmpty(dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Facts);