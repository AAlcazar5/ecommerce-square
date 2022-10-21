const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    blog_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    title:{
        type: String,
        trim: true,
        required: true
    },
    // price:{
    //     type: Number,
    //     trim: true,
    //     required: true
    // },
    description:{
        type: String,
        required: false
    },
    content:{
        type: String,
        required: true
    },
    images:{
        type: Object,
        required: true
    },
    category:{
        type: String,
        required: false
    },
    checked:{
        type: Boolean,
        default: false
    },
    // sold:{
    //     type: Number,
    //     default: 0
    // }
}, {
    timestamps: true //important
})

module.exports = mongoose.model("Blogs", blogSchema)
