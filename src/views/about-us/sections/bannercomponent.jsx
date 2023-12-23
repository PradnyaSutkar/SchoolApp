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
                            <h1 className="title font-bold">About us</h1>
                            <h6 className="subtitle">We are working since 1982 in highly backward wide slum (Zopadpatti) area. We are giving high quality education to poor and undeveloped peoples belongs in this area. The institution started “Adult Education” with the help of Central social welfare board, with this class we wanted to literate  uneducated people also we stared to give them vocational classes to improve their skill. We successfully implemented Central Women and Child Welfare Board’s Creache (Aadarsh Palnaghar) Programme . Making healthy and nourishing development of every child. Family Counselling Center,  Balsadan. Now we are working in Nursery to Gradation section by providing affordable education in this slum (zopadpatti) area.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BannerComponent;
