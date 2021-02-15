import './App.css';
import './css/Navbar.css';
import './css/Content.css';
import './css/About.css';
import Navbar from './components/navbar/Navbar.js';
import Content from './components/content/Content.js';



const App = ()=> {
  return (
    <div className="App">
        <Content />
    </div>
  );
}

export default App;
