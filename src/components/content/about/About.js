import Typerwriter from '../../typewriter/Typewriter.js';
import { messages } from './about_messages.js'


const About = () => {
    return (
       <div className="content-backdrop content-blur">
            <Typerwriter messages={messages} heading={'About'} ></Typerwriter>
       </div>
    );
}

export default About;
