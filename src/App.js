import React, { Component } from 'react';
import './App.css';
import Audio from './Audio';
import Footer from './Footer';
import Header from './Header';
import Hobbies from './Hobbies';
import Intro from './Intro';
import Projects from './Projects';
import WorkHistory from './WorkHistory';



class App extends Component {
    render() {
        return (
            <div className="App">
            <Audio />
            <Header />
                <main>
                    <Intro />
                    <WorkHistory />
                    <Projects />
                    <Hobbies />
                </main>
                <Footer />
            </div>
        )
    }
}

export default App;