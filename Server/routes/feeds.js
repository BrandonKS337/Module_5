const express = require('express');
const router = express.Router ()    //pulling out function from express package

router.get ('/feed', (req, res) => {
    res.send('List the users main feed')
})

router.get('/group', (req, res) => {
    res.send('This points to a group')
})

module.exports = router      // exports results as a module type... we are only exporting router in this example