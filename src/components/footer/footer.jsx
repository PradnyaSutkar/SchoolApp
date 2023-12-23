/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <div className="footer4 b-t spacer">
            <Container>
                <Row>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Address</h5>
                        <p>Sanjay Gandhi Nagar, Vijapur Road, Solapur - 413004</p>
                    </Col>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Phone</h5>
                        <p>Reception :  +91-7276187542</p>
                    </Col>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Email</h5>
                        <p>Office :  <a href="#" className="link">samrat.ashok.yuvak.<br/>mandal1982@gmail.com</a> <br />Site :  <a href="#" className="link"></a></p>
                    </Col>
                    <Col lg="3" md="6">
                        <h5 className="m-b-20">Social</h5>
                        <div className="round-social light">
                            <a href="#" className="https://www.facebook.com/samrat.ashok.yuvak.mandal?mibextid=ZbWKwL"><i className="fa fa-facebook"></i></a><br />
                            <a href="#" className="https://youtube.com/@samrat_shikshan?si=bfLXV8BVru0YGDJg"><i className="fa fa-youtube-play"></i></a><br />
                            <a href="#" className="https://www.instagram.com/yashodhara_campus?igsh=OGQ5ZDc2ODk2ZA=="><i className="fa fa-instagram"></i></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Footer;
