import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import CircleAnimation from './components/CircleAnimation';

function App() {
    return (
        <div className="App">
            <Navbar /><br></br>
            <Banner></Banner><br></br>
            <CircleAnimation />
        </div>
    );
}

export default App;
