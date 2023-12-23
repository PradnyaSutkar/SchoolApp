/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const BannerComponent = () => {
    return (
        <div>
            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h4 className="title font-bold">Indian and foreign citizens can donate to 'Samrat Ashok Yuvak Mandal' via bank transfer or cheque. Please contact on the below e-mail or Phone number for further details.</h4>
                            <h6 className="subtitle">Samrat Ashok Yuvak Mandal Accounts Office, Sanjay Gandhi Nagar, Vijapur Road, Solapur - 413004.</h6>
                            <h6 className="subtitle">Contact: +91-7276187542</h6>
                            <h6 className="subtitle">Email: samrat.ashok.yuvak.mandal1982@gmail.com</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BannerComponent;
