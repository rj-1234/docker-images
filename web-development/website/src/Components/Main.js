import React, {Component} from 'react';
import About from '../Components/About.js';
import Experience from '../Components/Experience.js';

class Main extends Component {
    
    render() {
        return (
            <div >
                <About />
                <Experience />
                {/* <Work />
                <Contact /> */}
            </div>
          );
    }
}

export default Main