import { useContext } from 'react';
import { Cart3 } from 'react-bootstrap-icons';
import { CartContext } from '../../contexts/CarContext';

const CartWidget = () => {
    
    const { items } = useContext(CartContext);
    
    return(
        <div style={{position: "relative", marginLeft: 6}}>
            <Cart3 />
            <div style={{color: "#fff", 
            marginLeft: 6, 
            fontWeight: "bold", 
            position: "absolute", 
            left: 6, 
            top: -2, 
            fontSize: "0.6rem", 
            backgroundColor: "#ba000d", 
            paddingTop: "2px", 
            paddingBottom: "2px", 
            paddingLeft: "5px", 
            paddingRight: "4px", 
            borderRadius: "20%"}}>{items.length}</div>
        </div>
    )
}

export default CartWidget