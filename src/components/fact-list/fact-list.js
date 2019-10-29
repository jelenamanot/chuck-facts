import React from 'react';
import PropTypes from 'prop-types';
/* components */
import FactListItem from "../fact-list-item/fact-list-item";
/* styles */
import './fact-list.scss';

const FactList = ({ items, onItemClick }) => (
    <ul className="fact-list list-group overflow-auto">
        {items && items.map(item => <FactListItem key={item.id} item={item} onItemClick={onItemClick} />)}
    </ul>
);

FactList.propTypes = {
    items: PropTypes.array
};

export default FactList;