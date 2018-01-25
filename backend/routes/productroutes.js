const express = require("express");
const Product = require("../models/product");
const router = express.Router();
const cart = require("../models/cartmodel") 


router.get("/:id", (req, res) => {
    
    Product.findById(req.params.id, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });

});


router.post("/cart",(req,res)=>{
    cart.findOne({productid:req.body.productid},(cerror,cresult)=>{
        if(cerror)res.send(cerror);
        else {
            console.log(cresult)
            if(cresult==null){
                newObj = new cart({
                    productid :result._id,
                    productname:result.name,
                    productimage:result.image,
                    productprice:result.price,
                    quantity:1
                })
                newObj.save((error)=>{
                    if(error)res.send(error)
                    else res.json(newObj)
                        })
                    }else{
                        Obj={
                            quantity:cresult.quantity+1
                        }
                        cart.findOneAndUpdate({productid:req.body.productid},Obj,(error,result)=>{
                            if(error)res.send(error);
                            else{
                                res.json(result)
                            }
                        })
                    }
            }
        }
                              
    )      
})

router.get("/cart",(req,res)=>{
    cart.find({},(err,result)=>{
        if(err)res.json(err)
        else res.json(result)
    })
})


router.get("/", (req, res) => {

    Product.find({}, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });
});


router.get("/variant/:variant", (req, res) => {
    
    Product.find({variant:req.params.variant}, (error, result) => {
        if(error) res.send(error);
        else{
            res.json(result)
        }
    });

});


router.post("/post", (req, res) => {
    
    if (!req.files.image) {
        return res.status(400).send("No files were uploaded");
    }

    let image = req.files.image;
    let date = new Date();
    let imageName = date.getTime() + ".png"

    image.mv("./public/productdetail" + imageName, (error) => {
        
        if (error) return res.status(500).send(error);
        
        let newObj = new Product({
            name : req.body.name,
            description : req.body.description,
            variant : req.body.variant,
            price : req.body.price,
            color : req.body.color,
            image : "http://localhost:7000/productdetail" + imageName
        });
        
        newObj.save((error) => {
            if (error) {
                res.status(500).send(error);
            }
            else{
                res.json(newObj);
            }
        });

    });

});

module.exports = (function(){
    return router;
})();