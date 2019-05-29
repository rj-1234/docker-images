import React, {Component} from 'react'
import logo from '../assets/images/bwprofile.jpg';

class About extends Component {
    
    render() {
        const style = {backgroundColor:"#5D5D5D"}
        return (
            <section id="about" style={style}>
                <img src={logo} alt="Profile Picture" />;
            </section>
          );
    }
}

export default About