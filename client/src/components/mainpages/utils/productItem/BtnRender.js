import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../../GlobalState';

function BtnRender({ product, deleteProduct }) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart
 
    return (
         <div className="row_btn">
             {
                 isAdmin ? 
                 <>
                    <Link id="btn_buy" to="#!" 
                    onClick={ () => deleteProduct(product._id, product.images.public_id) }>
                        Delete
                    </Link>
                    <Link id="btn_view" to={`/edit_detail/${product._id}`}>
                        Edit
                    </Link>
                </>
                : <>
                    <Link id="btn_buy" to="#!" onClick={() => addCart(product)}>
                        Add to Cart
                    </Link>
                    <Link id="btn_view" to={`/detail/${product._id}`}>
                        Product Details
                    </Link>
                </>
             }  
        </div>
    )
}

export default BtnRender;
