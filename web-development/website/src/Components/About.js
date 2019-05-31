import React, {Component} from 'react'
import LeftAboutCol from './LeftABoutCol.js'
import RightAboutCol from './RightABoutCol.js'

import { Row, Col } from 'reactstrap';

class About extends Component {
    
    render() {
        const style = {flex:1, flexDirection: 'col'}
        return (
            <section id="about" style={style}>
                
                <Row>
                    {/* Left About Column  */}
                    <Col>
                        Left Column
                        <LeftAboutCol />
                    </Col>
                    {/* Right About column  */}
                    <Col>
                        Right Column
                        <RightAboutCol />
                    </Col>
                </Row>
                
                {/* <img src={profile} aria-hidden alt="Profile Picture" />; */}
            </section>
          );
    }
}

export default About