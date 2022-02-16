import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Lottie from 'react-lottie';
import * as animationData from '../assets/animations/empty-basket.json';

const CartEmpty = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid'
        }
      };

    return (
        <Container>
            <Row>
                <Col className="mt-5" style={{ textAlign: "center" }} md={{ span: 6, offset: 3}}>
                    <h4 style={{ marginTop: "10%" }}>Aún no agregas productos a tu carrito de compras</h4>
                    <Lottie options={defaultOptions}
                            height={250}
                            isStopped={false}
                            isPaused={false}/>                    
                </Col>
            </Row>
        </Container>
    )
}

export default CartEmpty;
