import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, title, subtitle }) => (
    <div className="card">
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
            {children}
        </div>
    </div>
);

Card.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

Card.defaultProps = {
    children: null
};

export default Card;