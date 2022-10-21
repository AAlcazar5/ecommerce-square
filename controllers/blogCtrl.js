const Blogs = require('../models/blogModel')

// Filter, sorting and paginating

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }

    filtering() {
       const queryObj = {...this.queryString} //queryString = req.query

       const excludedFields = ['page', 'sort', 'limit']
       excludedFields.forEach(el => delete(queryObj[el]))
       
       let queryStr = JSON.stringify(queryObj)
       queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
       this.query.find(JSON.parse(queryStr))
         
       return this;
    }

    sorting() {
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating() {
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const blogCtrl = {
    getBlogs: async(req, res) => {
        try {
            const features = new APIfeatures(Blogs.find(), req.query)
            .filtering().sorting().paginating()

            const blogs = await features.query

            res.json({
                status: 'success',
                result: blogs.length,
                blogs: blogs
            })
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    createBlog: async(req, res) => {
        try {
            const {
                    blog_id, 
                    title, 
                    // price, 
                    description, 
                    content, 
                    images, 
                    category
                } = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            const blog = await Blogs.findOne({blog_id})
            if(blog)
                return res.status(400).json({msg: "This blog already exists."})

            const newBlog = new Blogs({
                blog_id, 
                title: title.toLowerCase(), 
                // price, 
                description, 
                content, 
                images, 
                category
            })

            await newBlog.save()
            res.json({msg: "Created a blog"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    deleteBlog: async(req, res) =>{
        try {
            await Blogs.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Blog"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    updateBlog: async(req, res) => {
        try {
            const {
                title, 
                // price, 
                description, 
                content, 
                images, 
                category
            } = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            await Blogs.findOneAndUpdate({_id: req.params.id}, {
                title: title.toLowerCase(), 
                // price, 
                description, 
                content, 
                images, 
                category
            })

            res.json({msg: "Updated a Blog"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = blogCtrl