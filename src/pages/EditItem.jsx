
import { Button, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import { collection, addDoc, setDoc, updateDoc, getDocs} from 'firebase/firestore';
import { db } from '../firebase';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';

const EditItem = () => {

    const { id } = useParams();
    const [image , setImage] = useState('');
    const [categories, setCategories] = useState([])
    const [ formValues, setFormValues ] = useState(
        {
            name: "",
            description: "",
            price: 0
        }
    )
    const onSubmit = (event) => {
        event.preventDefault();   
        const name = event.target.elements.name.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.value;
        //const category = event.target.elements.category.value;
        addToFirebase(name, description, price, "")
    }

    const addToFirebase = async (name, description, price, category) => {

        let imageUrl = ""
        if (typeof image !== 'undefined') {
            const storage = getStorage();
            const imageName = (+new Date).toString(36);
            const storageRef = ref(storage, `items/${imageName}`);

            const uploadTask = await uploadBytes(storageRef, image)
            imageUrl = await getDownloadURL(uploadTask.ref)
        }

        const docRef = doc(db, "items", id)
        //setDoc
        updateDoc(docRef, {
            name: name,
            description: description,
            price: price,
            category: category,
            url: imageUrl
        }).then(doc => {
            console.log("se actualizo el documento")
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        const docRef = doc(db, "items", id)
        getDoc(docRef)
        .then(doc => {
            console.log(doc.data())
            const document = doc.data()
            setFormValues({
                name: document.name,
                description: document.description,
                price: document.price                
            })
        })
        .catch(err => {
            console.log(err)
        })
    }, [id]);

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

    return (
        <Container>
            <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre del producto</Form.Label>
                <Form.Control defaultValue={formValues.name} type="text" placeholder="Ingrese el nombre del producto" />
                <Form.Text className="text-muted">
                        Agrega un nombre significativo para el producto
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control defaultValue={formValues.description} as="textarea" rows={3} />
            </Form.Group>            
            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Precio</Form.Label>
                <Form.Control defaultValue={formValues.price} type="text" placeholder="Precio" />
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

export default EditItem;
