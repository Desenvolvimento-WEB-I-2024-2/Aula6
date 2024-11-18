import React from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import products from './data/products';
import news from './data/news';
import contacts from './data/contacts';
import './styles/App.css';

const App = () => {
    return (
        <div className="app">
            <Header title="Painel de Cards Reutilizáveis" />
            <section>
                <h2>Produtos</h2>
                <CardList items={products} type="product" />
            </section>
            <section>
                <h2>Notícias</h2>
                <CardList items={news} type="news" />
            </section>
            <section>
                <h2>Contatos</h2>
                <CardList items={contacts} type="contact" />
            </section>
        </div>
    );
};

export default App;
