import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './style.css';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gradient-to-b from-blue-500 to-blue-300">
      <div>
        <Header />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}
