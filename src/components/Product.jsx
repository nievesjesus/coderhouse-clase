import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const Product = ({ productName, brand, stock }) => {
    const [itemsQty, setItemsQty] = useState(0);

    const setRealStock = (qty) => {
        if (qty <= stock) {
            setItemsQty(qty)
        } 
    }

    const removeFromStock = (qty) => {
        if (qty >= 0) {
            setItemsQty(qty)
        }
    }

    return(
        <>
            <div style={{ marginTop: 30, marginBottom: 5, color: '#e1e1e1', fontSize: '3rem', lineHeight: "22px"}}>
                {productName} <br/><span style={{ fontSize: "1.5rem"}}>Brand: {brand}</span>
                <br/><span style={{ fontSize: "1.5rem"}}>Stock: {stock}</span>
            </div>
            <div style={{ marginBottom: 10}}>
                <Button onClick={ () => removeFromStock (itemsQty - 1 ) } variant="primary">-</Button>           
                <span style={{  margin: 10, fontSize: "3rem" }}>{itemsQty}</span>
                <Button onClick={ () => setRealStock (itemsQty + 1 ) } variant="primary">+</Button>
            </div>          
        </>
    )
     
}
export default Product;