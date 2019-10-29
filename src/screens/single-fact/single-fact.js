import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from  'react-redux';
import { withRouter } from 'react-router';
/* actions */
import { getSingleFact, setSingleFactEmpty } from './single-fact-actions';

class SingleFact extends React.PureComponent {
    componentDidMount() {
        const { factId } = this.props.match.params;
        this.props.getSingleFact(factId);
    }

    componentWillUnmount() {
        this.props.setSingleFactEmpty();
    }

    render() {
        const { activeFact } = this.props;
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
        setSingleFactEmpty: () => setSingleFactEmpty(dispatch)
    };
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(SingleFact);
