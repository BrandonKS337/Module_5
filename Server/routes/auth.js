const express = require('express');
const router = express.Router ()    //pulling out function from express package

router.get ('/login', (req, res) => {
    console.log('Request body:', req.query)
    res.send('Check the username and password')
})

router.get('/authorize', (req, res) => {
    res.send('Authorize User')
})

module.exports = router      // exports results as a module type... we are only exporting router in this example