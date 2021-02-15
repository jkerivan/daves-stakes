import './App.css';
import './css/Navbar.css';
import './css/Content.css';
import './css/About.css';
import Navbar from './components/navbar/Navbar.js';
import Content from './components/content/Content.js';
import {Router} from 'react-router-dom';

import { history } from "./helpers/history";

const App = () => {
  return (
    <Router history={history}>
        <div className="App">
            <Navbar />
            <Content />
        </div>
    </Router>
  );
}

export default App;
