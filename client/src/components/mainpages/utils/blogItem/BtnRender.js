import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../../GlobalState';

function BtnRender({ blog, deleteBlog }) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    // const addCart = state.userAPI.addCart
 
    return (
         <div className="row_btn">
             {
                 isAdmin ? 
                 <>
                    <Link id="btn_buy" to="#!" 
                    onClick={ () => deleteBlog(blog._id, blog.images.public_id) }>
                        Delete
                    </Link>
                    <Link id="btn_view" to={`/edit_detail/${blog._id}`}>
                        Edit
                    </Link>
                </>
                : <>
                    {/* <Link id="btn_buy" to="#!" onClick={() => addCart(blog)}>
                        Add to Cart
                    </Link> */}
                    <Link id="btn_view" to={`blog/${blog._id}`}>
                        Read More
                    </Link>
                </>
             }  
        </div>
    )
}

export default BtnRender;
