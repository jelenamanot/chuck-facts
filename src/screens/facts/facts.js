import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* actions */
import { getFacts, setViewedFact, setFactsEmpty, getViewedFacts } from './facts-actions';
/* components */
import Search from '../../components/search/search';
import Card from '../../components/card/card';
import FactListItem from '../../components/fact-list-item/fact-list-item';

class Facts extends React.Component {
    componentDidMount() {
        this.props.getViewedFacts();
    }

    componentWillUnmount() {
        this.props.setFactsEmpty();
        if (this.debounce) {
            clearTimeout(this.debounce);
        }
    }

    onChange = (e) => {
        const query = e.target.value;
        if (this.debounce) {
            clearTimeout(this.debounce);
        }
        if (query.length >= 3) {
            this.debounce = setTimeout(() => this.props.getFacts(query), 500);
        }
    };

    onItemClick = (fact) => {
        const currentLocalStorage = JSON.parse(localStorage.getItem('viewedFacts'));
        const updated =  currentLocalStorage ? [fact, ...currentLocalStorage] : [fact];
        localStorage.setItem('viewedFacts', JSON.stringify(updated));
    };

    render() {
        const isRandom = !localStorage.getItem('viewedFacts');
        return (
            <div>
                <Search
                    onChange={this.onChange}
                    searchResults={this.props.facts}
                    onItemClick={this.onItemClick}
                />
                <Card
                    title={isRandom ? "We are showing random facts" : "Recently viewed facts"}
                    subtitle={isRandom ? "Try searching for some fact above" : "Last 10 results"}
                >
                    {this.props.viewedFacts.map(fact => <FactListItem key={fact.id} item={fact} onItemClick={this.onItemClick} />)}
                </Card>
            </div>
        )
    }
}

Facts.propTypes = {
    facts: PropTypes.array.isRequired,
    getFacts: PropTypes.func.isRequired,
    setViewedFact: PropTypes.func.isRequired,
    getViewedFacts: PropTypes.func.isRequired
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
        getViewedFacts: () => getViewedFacts(dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Facts);