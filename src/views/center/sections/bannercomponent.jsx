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
                            <h1 className="title font-bold">Center</h1>
                            <h6 className="subtitle">
                               - Half acre dedicated educational campus<br/>
                               - More than 1500 students taking quality education<br/>
                               - 2 Floor RCC well Furnished Building with 21 classrooms<br/>
                               - Fresh School campus surrounded by trees<br/>
                               - 43 teaching - non teaching staff<br/>
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BannerComponent;
