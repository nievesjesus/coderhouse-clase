import { Button, Card, Col, Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({products}) => {
    return (
        <>
            {products.map((product) => (
                <Col key={product.id}>
                    <Item key={product.id} product={product} />
                </Col>
            ))}
        </>
    )
}

export default ItemList;