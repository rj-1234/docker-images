import React, {Component} from 'react'
import profile from '../assets/images/bwprofile.jpg';
// import { Row, Col } from 'reactstrap';

class LeftAboutCol extends Component {
    
    render() {
        const style = {backgroundColor: "#ffc107"}
        return (
            <section id="leftaboutcol" style={style}>
                <div id="profilepicdiv">
                    <img class="profile-pic" src={profile} aria-hidden alt="Profile Picture" />;
                </div>
            </section>
          );
    }
}

export default LeftAboutCol