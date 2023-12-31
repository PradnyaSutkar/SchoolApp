import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

const HeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="subtitle">Samrat Ashok Yuvak Mandal, Solapur.</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner;
