import React from 'react';
import BtnRender from './BtnRender';

function BlogItem({ blog, isAdmin, deleteBlog, handleCheck }) {

    return (
        <div className="blog_card">
            {
                isAdmin && <input type="checkbox" checked={blog.checked} 
                onChange={() => handleCheck(blog._id)}/>
            }
            
            <img src={blog.images.url} alt="" />
 
            <div className="blog_box">
                <h2 title={blog.title}>{blog.title}</h2>
                {/* <span>${blog.price}</span> */}
                <p>{blog.description}</p>
                {/* <p>{blog.content}</p> */}
            </div>

            <BtnRender blog={blog} deleteBlog={deleteBlog}/>
        </div>
    )
}

export default BlogItem
