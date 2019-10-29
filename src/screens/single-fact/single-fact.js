import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from  'react-redux';
import { withRouter } from 'react-router';
/* actions */
import { getSingleFact, getSingleFactEmpty } from './single-fact-actions';

class SingleFact extends React.PureComponent {
    componentDidMount() {
        const { factId } = this.props.match.params;
        this.props.getSingleFact(factId);
    }

    componentWillUnmount() {
        this.props.getSingleFactEmpty();
    }

    render() {
        const { activeFact } = this.props;
        return (
            <div className="jumbotron">
                {activeFact ?
                    <React.Fragment>
                        <img src={activeFact.icon_url} alt={activeFact.value}/>
                        <h3>{activeFact.value}</h3>
                    </React.Fragment>
                    : <div className="text-center">
                        <div className="spinner-border" role="status" />
                    </div>}
            </div>
        );
    }
}

SingleFact.propTypes = {
    activeFact: PropTypes.object,
};

function mapStateToProps(state) {
    return {
        activeFact: state.singleFactReducer.activeFact
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getSingleFact: (factId) => getSingleFact(dispatch, factId),
        getSingleFactEmpty: () => getSingleFactEmpty(dispatch)
    };
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(SingleFact);
