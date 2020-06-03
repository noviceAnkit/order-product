const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

var Product = require('../models/product');

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'handling GET requests'
    });
});


    //const product = {
       // name = req.body.name,
       // price = req.body.price
    //};
       // res.status(201).json({
            //aproduct : product
       // })
   // })
   router.post('/',(req, res, next) => {
    var product = new Product() ;
        product._id = new mongoose.Types.ObjectId(),
        product.name = req.body.name,
        product.price = req.body.price
    
       
    product.save().then(result => {
        Console.log(result);
       
    }).catch( error =>
      {
        console.log(error);
    })

        res.status(201).json({
            message: 'handling POST requests',
            createdproduct: product
        })
        //res.status(500).json({
          //  err:err
        //})
    });
    
router.get('/:productid',(req, res, next) => {
    const id = req.params.productid;
    if(id === 'special')
    {
        res.status(200).json({
            message: 'specially invited'
        });
    }
    else
    {
        res.status(200).json({
            message: 'welcome!'
        })
    }
});
    
module.exports = router;