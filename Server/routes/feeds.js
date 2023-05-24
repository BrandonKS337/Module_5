const express = require('express');
const router = express.Router ()    //pulling out function from express package

router.get ('/feed', (req, res) => {
    console.log(req.query)
    if (req.query.username === "test") {
        res.status(200)
        res.json({
            // [
            //     {
            //         postId: 1,
            //         title: "This is the first post",
            //         content: "This is a comment in the post"
            //     },
            //     {
            //         postId: 12,
            //         title: "This is the second post",
            //         content: "This is a comment in the post"
            //     }
            // ]
        })
    }
    res.send('List the users main feed')
})

router.get('/group', (req, res) => {
    res.send('This points to a group')
})

module.exports = router      // exports results as a module type... we are only exporting router in this example