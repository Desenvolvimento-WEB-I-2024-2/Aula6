import React from 'react';
import '../styles/Card.css';

const Card = ({ data, type }) => {
    const renderContent = () => {
        switch (type) {
            case 'product':
                return (
                    <>
                        <h3>{data.name}</h3>
                        <p>Preço: R$ {data.price.toFixed(2)}</p>
                    </>
                );
            case 'news':
                return (
                    <>
                        <h3>{data.title}</h3>
                        <p>{data.summary}</p>
                    </>
                );
            case 'contact':
                return (
                    <>
                        <h3>{data.name}</h3>
                        <p>Email: {data.email}</p>
                    </>
                );
            default:
                return null;
        }
    };

    return <div className="card">{renderContent()}</div>;
};

export default Card;
