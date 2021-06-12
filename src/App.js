import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Facts from "./Facts";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" class="app">
      <Header />
      <div class="main">
        <Facts />
      </div>
      <Footer />
    </div>
  );
}

export default App;