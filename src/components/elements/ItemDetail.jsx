import { Breadcrumb, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import ItemCount from "./ItemCount";
import { CartContext } from "../../contexts/CarContext";

const ItemDetail = ({ product }) => {

    const { addItem } = useContext(CartContext);
    
    const { title, description, price, sold_quantity, warranty, attributes, pictures, available_quantity} = product
    const [itemsQty, setItemsQty] = useState(0);

    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <Card className="mb-10">
                        <Card.Header>
                            <nav className="header-navigation">
                            <Link to="/" className="btn btn-link">Volver atras</Link>

                            <Breadcrumb>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>Ropa</Breadcrumb.Item>
                                <Breadcrumb.Item active>Remera</Breadcrumb.Item>
                            </Breadcrumb>

                            <div className="btn-group">
                                <Link to="/" className="btn btn-link btn-share">Compartir</Link>
                                <Link to="/" className="btn btn-link">Vender un producto como este</Link>
                            </div>
                            </nav>
                        </Card.Header>
                        <Card.Body className="store-body">
                            <Row>
                                <Col xs={7} className="product-info">
                                    <Col className="product-gallery">
                                        <Col className="product-gallery-thumbnails">
                                            <ol className="thumbnails-list list-unstyled">
                                                {pictures.slice(0, 6).map(picture => { return (<li> <img src={picture.secure_url} alt="" /></li>)})}
                                            </ol>
                                        </Col>
                                        <Col xs={10} className="product-gallery-featured">
                                            {pictures.length > 0 ? <img src={pictures[0].secure_url} alt="" /> : null}
                                        </Col>
                                    </Col>
                                    <Col classNa
                                    me="product-seller-recommended">
                                        <Col className="product-description mb-5" style={{textAlign: "left"}}>
                                            <h5 className="mt-3 mb-4">Lo que tenés que saber de este producto</h5>
                                            <dl className="row mb-5">
                                                {attributes.slice(0, 8).map(attribute => { return(<>
                                                    <dd className="col-sm-8">{attribute.name}</dd>
                                                <dt className="col-sm-4">{attribute.value_name}</dt>                                                
                                                </>) })}
                                            </dl>
                                            <h2 className="mb-5">Descripción</h2>
                                            {description}
                                        </Col>
                                    </Col>
                                </Col>
                                <Col className="product-payment-details">
                                    <p className="last-sold text-muted"><small>{sold_quantity} vendidos</small></p>
                                    <h4 className="product-title mb-2">{title}</h4>
                                    <h2 className="product-price display-4">$ {price}</h2>
                                    <p className="text-success"><i className="fa fa-credit-card"></i> 12x or  5x $ 5.00</p>
                                    <p className="mb-0"><i className="fa fa-truck"></i> Tipo de Garantia</p>
                                    <div className="text-muted mb-4"><small>{warranty}</small></div>                              
                                    <label for="quant">Cantidad</label>
                                    <div className="mb-3">
                                        <ItemCount itemsQty={itemsQty} available_quantity={available_quantity} setItemsQty={setItemsQty} />
                                    </div>
                                    <Button onClick={() => addItem(product, itemsQty)} variant="primary">Agregar al carrito</Button>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail;