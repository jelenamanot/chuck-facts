import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
/* actions */
import { getSingleFact, setSingleFactEmpty } from './single-fact-actions';

const SingleFact = ({ match, getSingleFact, setSingleFactEmpty, activeFact }) => {
    useEffect(() => {
        const { factId } = match.params;
        getSingleFact(factId);

        return () => {
            setSingleFactEmpty();
        };
    }, [match, getSingleFact, setSingleFactEmpty]);

    return (
        <div>
            {activeFact ?
                <div className="card">
                    <div className="card-header">
                        <img src={activeFact.icon_url} alt={activeFact.value} />
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>{activeFact.value}</p>
                        </blockquote>
                    </div>
                </div>
                : <div className="text-center">
                    <div className="spinner-border" role="status" />
                </div>
            }
        </div>
    );
};

SingleFact.propTypes = {
    activeFact: PropTypes.object,
    getSingleFact: PropTypes.func.isRequired,
    setSingleFactEmpty: PropTypes.func.isRequired
};

SingleFact.defaultProps = {
    activeFact: null
};

function mapStateToProps(state) {
    return {
        activeFact: state.singleFactReducer.activeFact
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getSingleFact: (factId) => getSingleFact(dispatch, factId),
        setSingleFactEmpty: () => setSingleFactEmpty(dispatch)
    };
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(SingleFact);