const express = require('express')
const blogcontroller = require('./../controllers/blogcontrollers')
const router = express.Router()

// blog routes
router.get('/', blogcontroller.blog_index)

router.get('/:id', blogcontroller.blog_detail)

router.post('/', blogcontroller.blog_create_post)

router.delete('/:id', blogcontroller.blog_delete)

module.exports = router