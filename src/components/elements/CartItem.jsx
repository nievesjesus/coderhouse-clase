import React from 'react';

const CartItem = ({ item }) => {
    return (
        <>
            <li className="cart_item clearfix">
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
        </>
    );
}

export default CartItem;
