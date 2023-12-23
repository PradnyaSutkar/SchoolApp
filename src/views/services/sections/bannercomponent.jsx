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
                            <h1 className="title font-bold">Services</h1>
                            <h6 className="subtitle">- Samrat Ashok Balak Mandir (Pre-Primary section)<br />
                                                    - Samrat Ashok Marathi Vidyalay ( Primary Section )<br />
                                                    - Yashodhra Prashala (High School Section)<br />
                                                    - Yashodhara Junior Collage ( Science, Commarce and Arts)<br />
                                                    - Yashwantrao Chavan Open University Study Center ( B.A. , B.Com)<br />
                                                    - Competitive Exam Centre<br />
                                                    - Carrier guidance<br />
                                                    - Yashodhra Model School ( CBSE pattern )<br />
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BannerComponent;
