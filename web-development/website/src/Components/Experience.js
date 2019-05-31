import React, {Component} from 'react'
// import profile from '../assets/images/bwprofile.jpg';
import { Row, Col } from 'reactstrap';

class Experience extends Component {
    
    render() {
        const style = {flex:1, flexDirection: 'col', backgroundColor: "#darkgrey"}
        return (
            <section id="experience" style={style}>
                
                <Row>
                    <Col>.col</Col>
                    <Col>.col</Col>
                </Row>
                
                {/* <img src={profile} aria-hidden alt="Profile Picture" />; */}
            </section>
          );
    }
}

export default Experience