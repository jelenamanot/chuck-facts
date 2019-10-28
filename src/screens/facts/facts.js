import React from 'react';
import { connect } from 'react-redux';
import { getFacts } from './facts-actions';

class Facts extends React.Component {
    componentDidMount() {
        this.props.getFacts();
    }
    render() {
        return (
            <div>
                Facts
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        facts: state.factsReducer.facts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getFacts: () => getFacts(dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Facts);