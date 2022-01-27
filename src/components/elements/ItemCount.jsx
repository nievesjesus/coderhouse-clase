import { Button } from "react-bootstrap"

const ItemCount = ({ itemsQty, available_quantity, setItemsQty}) => {

    const setRealStock = (qty) => {
        if (qty <= available_quantity) {
            setItemsQty(qty)
        } 
    }

    const removeFromStock = (qty) => {
        if (qty >= 0) {
            setItemsQty(qty)
        }
    }

    return(
        <div>
            <Button onClick={ () => removeFromStock (itemsQty - 1 ) } variant="primary">-</Button>           
            <span style={{  margin: 10, fontSize: "1.2rem" }}>{itemsQty}</span>
            <Button onClick={ () => setRealStock (itemsQty + 1 ) } variant="primary">+</Button> 
            <div>
                <small style={{ color: "#a1a1a1" }}>{available_quantity} disponibles</small>
            </div>            
        </div>
    )
}

export default ItemCount