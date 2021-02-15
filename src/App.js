import './App.css';
import './css/Navbar.css';
import './css/Content.css';
import './css/About.css';
import Navbar from './components/navbar/Navbar.js';
import {Router} from 'react-router-dom';
import About from './components/content/about/About.js'
import News from './components/content/news/News.js'
import Pool from './components/content/pool/Pool.js'
import Home from './components/content/Home.js'
import { useState, useEffect } from "react";

import {Switch, Route} from 'react-router-dom';

import { history } from "./helpers/history";

function App() {
  return (
    <Router history={history}>
        <div className="App">
            <Navbar />
            <div className="content-container">
                    <div className="content">
                        <Switch>
                            <Route exact path={["/", ""]} component={Home} />
                            <Route exact path={["/about"]} component={About} />
                            <Route exact path={["/news"]} component={News} />
                            <Route exact path={["/pool"]} component={Pool} />
                        </Switch>
                    </div>
                </div>
        </div>
    </Router>
  );
}

export default App;
