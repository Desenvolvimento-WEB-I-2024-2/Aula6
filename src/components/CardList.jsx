import React from 'react';
import Card from './Card';
import '../styles/Card.css';

const CardList = ({ items, type }) => {
    return (
        <div className="card-list">
            {items.map((item) => (
                <Card key={item.id} data={item} type={type} />
            ))}
        </div>
    );
};

export default CardList;
