import { data1 } from "../productData/productData1.js";
import { data2 } from "../productData/productData2.js";
const status = async (req, res)=>{
    try {
        res.status(200).json({status:'Version 1.0!'});
    }
    catch (err){
        res.status(404).json({message:'Page not found'});
    }
};

const product1 = async (req, res)=>{
    try {
      res.status(200).json({data1});
    }
    catch (err){
      res.status(404).json({message:'Page not found'});
    }
};

const product2 = async (req, res)=>{
  try {
    res.status(200).json({data2});
  }
  catch (err){
    res.status(404).json({message:'Page not found'});
  }
};

export {status, product1, product2};