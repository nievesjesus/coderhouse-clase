import { addDoc, collection } from 'firebase/firestore';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CheckCircle } from 'react-bootstrap-icons';
import { CartContext } from '../contexts/CarContext';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import CartItem from '../components/elements/CartItem';
import CartEmpty from '../components/elements/CartEmptyState';

const Cart = () => {
    
    const { items } = useContext(CartContext);
    const [ success, setSuccess ] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [total, setTotal] = useState(0);
    const [isCartEmpty, setIsCartEmpty] = useState(true)

    // { buyer: {name, phone, email}, items: [id: title price], total}
    const checkout = () => {
        console.log(items)
        if (items.length === 0 ) {
            alert("no tienes itemes en el carrito")
            return
        }
        const itemsToBuy = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                qty: item.qty
            }
        })

        const buyer = {
            name: "Jesus Nieves",
            phone: "2932389283",
            email: "yo@nievesjesus.com"
        }

        const totalGlobal = items.reduce((a, b) => {
            return (a.qty * a.price) + (b.qty * b.price)
        })

        const order = { buyer: buyer, items: itemsToBuy, total: totalGlobal}

        addDoc( collection(db, "orders"), order)
        .then(doc => {
            setOrderId(doc.id)
            setSuccess(true)
            console.log("esto es muy sencillo, el id de mi orden creada es", doc.id)
        })
        .catch(err => {
            console.log("algo muy malo paso", err)
        })

    }


    useEffect(() => {
        if (items.length > 0) {
            const totalGlobal = items.reduce((a, b) => {
                return (a.qty * a.price) + (b.qty * b.price)
            })
            setTotal(totalGlobal)
            setIsCartEmpty(false)
        }

    }, [items]);

    if (isCartEmpty) {
        return <CartEmpty />
    } else {
        return (
            <div className="cart_section text-xs-left" style={{position: "relative"}}>
                <Container fluid>
                    <Row>
                        <Col lg={{ span: 10, offset: 1}}>
                            <div className="cart_container">    
                                <div className="cart_title">Carrito de compras<small> ({items.length} articulos en tu carrito) </small></div>
                            </div>
                            <div className="cart_items">
                                <ul className="cart_list">
                                    {items.map((item, index) => {
                                        return <CartItem key={index} item={item} />
                                    })}
                                </ul>
                            </div>   
                            <div className="order_total">
                                <div className="order_total_content text-md-right">
                                    <div className="order_total_title">Order Total:</div>
                                    <div className="order_total_amount">${total}</div>
                                </div>
                            </div>
                            <div className="cart_buttons"> 
                                <Button variant="primary">Continuar comprando</Button>                        
                                <Button style={{ marginLeft: 10}} variant="success" onClick={checkout}>Finalizar compra</Button>
                            </div>                                             
                        </Col>
                    </Row>
                </Container>
    
            {success ? 
                <div style={{ 
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100v%",
                    background: "rgb(76 175 80 / 90%)",
                    textAlign: "center",
                    color: "white",
                    paddingTop: "25%"
                }}>
                    <CheckCircle style={{ fontSize: 78}} />
                    <h1>Tu compra se ha realizado con exito</h1>
                    <p>Puedes hacer seguimiento con el siguiente id {orderId}</p>
                    <Button as={Link} to="/">Seguir comprando</Button>
                </div>
            :
                null
            }
            </div>
        );        
    }
}

export default Cart;
