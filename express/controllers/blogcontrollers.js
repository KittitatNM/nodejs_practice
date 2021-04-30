const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('index', { title: 'All blogs', blog: result })
        })
        .catch((err) => {
            console.log(err)
        })
}
const blog_detail = (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then(result => {
            res.render('details', { title: 'Details', blog: result })
        })
        .catch(err => { res.status(404).render('404', { title: 'Error' }) })
}

const blog_delete = (req, res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' })
        })
        .catch(err => { console.log(err) })

}

const blog_create_post = (req, res) => {
    // console.log(req.body)
    const blog = new Blog(req.body)
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch(err => console.log(err))
}

module.exports = { blog_index, blog_detail, blog_delete, blog_create_post }