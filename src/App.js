import React from 'react';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Map from './components/map/Map';
import './App.css';

function App() {
  return (
    <div className="App">
      <Contact />
      <h1>Menu</h1>
      <ProductList />
      <Map />
    </div>
  );
}

export default App;
