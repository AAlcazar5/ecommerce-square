const router = require('express').Router()
const blogCtrl = require('../controllers/blogCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.route('/blogs')
    .get(blogCtrl.getBlogs)
    .post(auth, authAdmin, blogCtrl.createBlog)

router.route('/blogs/:id')
    .delete(auth, authAdmin, blogCtrl.deleteBlog)
    .put(auth, authAdmin, blogCtrl.updateBlog)

module.exports = router