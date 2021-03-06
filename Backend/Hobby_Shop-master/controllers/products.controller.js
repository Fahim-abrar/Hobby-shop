const Products = require('../models/Products.model');

const createProducts= async(req,res)=>{
    const products=new Products({
        image: req.file.path,
        category: req.body.category,
        price: req.body.price,
        seller: req.body.seller,
        productName: req.body.productName,
        description: req.body.description,
        available: true,
      });
    try{
        await products.save();
    }catch(err){
        console.log(err);
        return res.status(504).json({success: false, message:'creating Products failed'});
    }
    return res.status(200).json({ success:true, message:'Products created' });
}

const getProducts= async(req,res)=>{
    let products
    try{
        products=await Products.find({});
    }catch(err){
        console.log(err);
        return res.status(504).json({success: false, message:'finding Products failed'});
    }
    return res.status(200).json({ success:true, message:'Products found',products });
}

const getAProduct= async(req,res)=>{
    let products
    try{
        products=await Products.findById(req.body.id).exec();
    }catch(err){
        console.log(err);
        return res.status(504).json({success: false, message:'finding Product failed'});
    }
    return res.status(200).json({ success:true, message:'Product found',products });

}

const deleteProducts= async(req,res)=>{
    let products
    try{
         await Products.findByIdAndRemove(req.body.id);
    }catch(err){
        console.log(err);
        return res.status(504).json({success: false, message:'deleting Products failed'});
    }

    return res.status(200).json({ success:true, message:'Product deleted'});
}

const updateProducts= async(req,res)=>{
    let products 
    try{
        products=await Products.findByIdAndUpdate(req.body.id,req.body)
    }catch(err){
        console.log(err);
        return res.status(504).json({success: false, message:'updating Products failed'});
    }
    return res.status(200).json({ success:true, message:'Product updated',products});
}

module.exports={createProducts,getProducts,getAProduct,deleteProducts,updateProducts};