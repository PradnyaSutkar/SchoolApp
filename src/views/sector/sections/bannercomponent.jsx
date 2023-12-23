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
                            <h1 className="title font-bold">Sector</h1>
                            <h6 className="subtitle">
                                - Nursary<br/>
                                - Pre primary<br/>
                                - Secondary<br/>
                                - Higher secondary<br/>
                                - Graduation<br/>
                                - Social Activities<br/>   
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BannerComponent;
