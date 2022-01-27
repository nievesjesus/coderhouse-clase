import { useState, useEffect } from 'react';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';
import { getCategories, getProductsFromCategory } from '../../services/Products';
import ItemListContainer from '../Containers/ItemListContainer';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Categories = () => {

  const [categories, setCategories] = useState([])
  const [setLoading] = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true
    setLoading(true)
    getCategories("MLA").then(results => {
      if(mounted) {
        setCategories(results)
        setTimeout(() => {
          setLoading(false)
        }, 3000)
      }
    })
    return () => mounted = false;
  }, [])

  return (
    <Container className="mt-4">     
        <Row>
            {categories.map(category => { return (
                <Col className="mt-2" xs={2}>
                    <Card>
                        <Card.Title style={{ height: 80, paddingTop: 5 }}>{category.name}</Card.Title>
                        <Button variant="primary" onClick={ () => navigate(`/category/${category.id}`)}>Ver productos</Button>
                    </Card>
                </Col>
            )})}
        </Row>
    </Container>
  );
}

export default Categories;
