import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Shop from './Shop';
import './style.css';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gradient-to-b from-gray-100 to-gray-50">
      <div>
        <Header />
        <MainContent />
        <Shop />
      </div>
      <Footer />
    </div>
  );
}
