import Typerwriter from '../../typewriter/Typewriter.js';
import { messages } from './news_messages.js'

const News = () => {
    return(
        <div className="content-backdrop content-blur">
            <Typerwriter messages={messages} heading={'News'} ></Typerwriter>
        </div>
    );
}

export default News