import { Container, Row } from "react-bootstrap";
import ItemList from "../elements/ItemList";

const ItemListContainer = ({ products }) => {
    return (
        <Container>
            <Row xs={2} md={4} className="g-4 mt-1">
                <ItemList products={products} />
            </Row>
        </Container>
    )
}

export default ItemListContainer;