import { addDoc, collection } from 'firebase/firestore';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CheckCircle } from 'react-bootstrap-icons';
import { CartContext } from '../contexts/CarContext';
import { db } from '../firebase';
import { Link } from 'react-router-dom';

const Cart = () => {
    
    const { items } = useContext(CartContext);
    const [ success, setSuccess ] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [total, setTotal] = useState(0);

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
        }

    }, [items]);

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
                                {items.map(item => {
                                    return <li className="cart_item clearfix">
                                        <div className="cart_item_image"><img src={item.pictures[0].secure_url} alt="" style={{ height: 130}} /></div>
                                        <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                            <div className="cart_item_name cart_info_col">
                                                <div className="cart_item_title">Name</div>
                                                <div className="cart_item_text">{item.title}</div>
                                            </div>

                                            <div className="cart_item_quantity cart_info_col">
                                                <div className="cart_item_title">Quantity</div>
                                                <div className="cart_item_text">{item.qty}</div>
                                            </div>
                                            <div className="cart_item_price cart_info_col">
                                                <div className="cart_item_title">Price</div>
                                                <div className="cart_item_text">${item.price}</div>
                                            </div>
                                            <div className="cart_item_total cart_info_col">
                                                <div className="cart_item_title">Total</div>
                                                <div className="cart_item_text">200</div>
                                            </div>
                                        </div>
                                    </li>
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

export default Cart;
