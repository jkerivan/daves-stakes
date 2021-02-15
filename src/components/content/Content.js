
import { useState, useEffect } from "react";
import Terminal from '../terminal/Terminal.js';
import About from './about/About.js'
import News from './news/News.js'
import Pool from './pool/Pool.js'
import Home from './Home.js'
import {Router, Switch, Route, useLocation} from 'react-router-dom';
import { history } from "../../helpers/history";


const Content = ()=> {
   const [showTerminal, setShowTerminal] = useState(true);
   const handleCallback = () =>{
        setShowTerminal(false);
   }

   useEffect(() => {
   }, []);

  return (
  <Router history={history}>
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
    </Router>
  );
}

export default Content;
