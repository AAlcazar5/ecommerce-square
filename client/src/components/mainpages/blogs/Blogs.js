import React, { useContext, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import BlogItem from '../utils/blogItem/BlogItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import Filters from './Filters'
import LoadMore from './LoadMore'

function Blogs() {
    const state = useContext(GlobalState) 
    const [blogs, setBlogs] = state.blogsAPI.blogs
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.blogsAPI.callback
    console.log(blogs)
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const handleCheck = (id) => {
        blogs.forEach(blog => {
            if(blog._id === id) blog.checked = !blog.checked
        })
        setBlogs([...blogs]) 
    }

    const deleteBlog = async(id, public_id) => {
        console.log({ id, public_id })
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', { public_id }, {
                headers: { Authorization: token }
            })
            const deleteBlog = axios.delete(`/api/blogs/${id}`, {
                headers: { Authorization: token }
            })
    
            await destroyImg
            await deleteBlog
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () => {
        blogs.forEach(blog => {
            blog.checked = !isCheck
        })
        setBlogs([...blogs])
        setIsCheck(!isCheck)
    }

    const deleteAll = () => {
        blogs.forEach(blog => {
            if (blog.checked) deleteBlog(blog._id, blog.images.public_id)
        })
    }
   
    if (loading) return <div><Loading /> </div>
    return (
        <>
        <Filters />
        {
            isAdmin && 
            <div className="delete-all">
                <span>Select all</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} />
                <button onClick={deleteAll}>Delete All</button>
            </div>
        }
            <div className="blogs">
                {
                    blogs.map(blog => {
                        return <BlogItem key={blog._id} blog={blog}
                        isAdmin={isAdmin} deleteBlog={deleteBlog} 
                        handleCheck={handleCheck} />
                    })
                }
            </div>

            <LoadMore />
            {blogs.length === 0 && <Loading />}
        </>
    )
}

export default Blogs
