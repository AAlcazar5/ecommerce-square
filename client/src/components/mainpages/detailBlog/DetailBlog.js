import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import BlogItem from '../utils/blogItem/BlogItem';

function DetailBlog() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [blogs] = state.blogsAPI.blogs
    // const addCart = state.userAPI.addCart
    const [detailBlog, setDetailBlog] = useState([])
 
    useEffect(() => {
        console.log('re render')
        if(params.id) {
            blogs.forEach(blog => {
                if(blog._id === params.id) setDetailBlog(blog)
            });
        }
    }, [params.id, blogs])

    console.log(detailBlog)
    if (detailBlog.length === 0) return null;

    return (
        <>
            <div className="detail">
                <img src={detailBlog.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailBlog.title}</h2>
                        <p>{detailBlog.description}</p>
                        <p>{detailBlog.content}</p>
                    </div>
                    {/* <span>$ {detailBlog.price}</span> */}
                    {/* <p>Sold: {detailBlog.sold}</p> */}
                    {/* <Link to="/cart" className="cart"
                    onClick={() => addCart(detailBlog)}>Add to Cart</Link> */}
                </div>
            </div>

            <div>
                <h2>Related blogs</h2>
                <div className="blogs">
                    {
                        blogs.map(blog => {
                            return blog.category === detailBlog.category
                                ? <BlogItem key={blog._id} blog={blog} /> : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DetailBlog;