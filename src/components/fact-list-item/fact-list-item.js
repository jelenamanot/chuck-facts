import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const FactListItem = ({ item, onItemClick }) => (
    <li className="list-group-item">
        <div className="row d-flex align-items-center">
            <div className="col-2">
                <i><img src={item.icon_url} alt={item.value}/></i>
            </div>
            <div className="col-8">
                <div className="text-truncate">{item.value}</div>
            </div>
            <div className="col-2">
                <Link to={`/details/${item.id}`}>
                    <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => onItemClick(item)}
                    >
                        View more
                    </button>
                </Link>
            </div>
        </div>
    </li>
);

FactListItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default FactListItem;