
import { Button, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useEffect } from 'react';

const AddItem = () => {

    const [image , setImage] = useState('');
    const [categories, setCategories] = useState([])

    const onSubmit = (event) => {
        event.preventDefault();   
        const name = event.target.elements.name.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.value;
        addToFirebase(name, description, price)
    }

    const addToFirebase = async (name, description, price) => {

        let imageUrl = ""
        if (typeof image !== 'undefined') {
            const storage = getStorage();
            const imageName = (+new Date).toString(36);
            const storageRef = ref(storage, `items/${imageName}`);

            const uploadTask = await uploadBytes(storageRef, image)
            imageUrl = await getDownloadURL(uploadTask.ref)
        }

        addDoc(collection(db, "items"), {
            name: name,
            description: description,
            price: price,
            category: "",
            url: imageUrl
        }).then(doc => {
            console.log("se creo el documento con el id",doc.id)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getDocs(collection(db, "categories"))
        .then(docs => {
            let preCategories = []
            docs.forEach(doc => {
                preCategories.push({id: doc.id, ...doc.data()})
            })
            setCategories(preCategories)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);    

    //<input name="fileblabla" onChange={(e)=>{setImage(e.target.files[0])}}  type="file" />
    return (
        <Container>
            <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre del producto</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el nombre del producto" />
                <Form.Text className="text-muted">
                        Agrega un nombre significativo para el producto
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>            
            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="text" placeholder="Precio" />
            </Form.Group>
            <Form.Select controlId="category" aria-label="Selecciona una categoria">
                <option>Selecciona una categoria</option>
                {categories.map(category => {
                    return  <option value={category.id}>{category.name}</option>
                })}
            </Form.Select>            
            <Form.Group controlId="file" onChange={(e)=>{setImage(e.target.files[0])}} className="mb-3">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" />
            </Form.Group>            
            <Button variant="primary" type="submit">
                Agregar
            </Button>
            </Form>
        </Container>
    );
}

export default AddItem;
