import { useOutletContext, useParams } from "react-router-dom";
import { getProductDetail, getProductDescription } from "../../services/Products";
import { useEffect, useState } from 'react';
import ItemDetail from '../elements/ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const {setLoading} = useOutletContext();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        let mounted = true
        setLoading(true)
        Promise.all([ getProductDetail(id), getProductDescription(id) ])
        .then(results => {
            let item = results[0]
            item.description = results[1].plain_text
            if (mounted) {
                setProduct(item)
                setTimeout(() => {
                  setLoading(false)
                }, 3000)
            }
        })
        return () => mounted = false
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div className="item-detail-container">
            {product ? <ItemDetail product={product} />  : null }
        </div>
    )
}

export default ItemDetailContainer;