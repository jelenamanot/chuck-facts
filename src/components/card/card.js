import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, subtitle, title  }) => (
    <div className="card">
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
            {children}
        </div>
    </div>
);

Card.propTypes = {
    children: PropTypes.node,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

Card.defaultProps = {
    children: null
};

export default Card;