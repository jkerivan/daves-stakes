
import { useState, useEffect } from "react";
import Terminal from '../terminal/Terminal.js';
import About from './about/About.js'
import News from './news/News.js'
import Pool from './pool/Pool.js'
import {Router, Switch, Route, useLocation} from 'react-router-dom';


const Content = ()=> {
   const [showTerminal, setShowTerminal] = useState(true);
   const handleCallback = () =>{
        setShowTerminal(false);
   }

   useEffect(() => {
   }, []);

  return (
    <div className="content-container">
        <div className="content">
            <Switch>
                <Route exact path={["/about"]} component={About} />
                <Route exact path={["/news"]} component={News} />
                <Route exact path={["/pool"]} component={Pool} />
            </Switch>
        </div>
    </div>
  );
}

export default Content;
