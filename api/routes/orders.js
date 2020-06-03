const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'getting GET requests'
    });
});

router.post('/',(req, res, next) => {
    res.status(200).json({
        message: 'getting POST requests'
    });
});

router.get('/:orderid',(req, res, next) => {
    id = req.params.orderid;
    if(id === 'special')
    {
    res.status(200).json({
        message: 'best seller'
    });
    }
    else{
        res.status(200).json({
            message: 'order accepted'
        })
    }
});

module.exports = router;