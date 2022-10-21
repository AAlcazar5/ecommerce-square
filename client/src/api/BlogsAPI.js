import { useState, useEffect } from 'react'
import axios from 'axios'

function BlogsAPI() {
    const [blogs, setBlogs] = useState([])
    const [callback, setCallback] = useState(false)
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)
 
    useEffect(() => {
        const getBlogs = async () => {
            const res = await axios.get(`/api/blogs?limit=${page*9}&${category}&${sort}&title[regex]=${search}`)
            // const res = await axios.get(`/api/blogs`)
            setBlogs(res.data.blogs)
            setResult(res.data.result)
        }

        getBlogs()
    },[callback, category, sort, search, page])
    
    return {
        blogs: [blogs, setBlogs],
        callback: [callback, setCallback],
        category: [category, setCategory],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult]
    }
}

export default BlogsAPI
