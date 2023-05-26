var express = require('express');
const mysql = require("./../config/config")
var router = express.Router();

/* GET users listing. */
router.post('/add', async function(req, res, next) {
  //res.send('respond with a resource');
  try{
    console.log(req.body)

    mysql.query('INSERT INTO teams SET ?', req.body, (err, result)=>{
      console.log(result, "result")
      if(err){
        return res.status(500).send({status:false, message: err.message || "Something went wrong"});
      }
      res.status(200).send({status:true,data:result, message:"Team added success fully"});
    });
    
    
  }catch(err){
    console.log(err, "err err")
    return res.status(500).send({status:false, message: err.message || "Something went wrong"});
  }
  
  
});

router.get('/list',(req, res, next)=>{
  try {
    mysql.query('SELECT * FROM teams WHERE is_deleted = ?', [0], (err, result)=>{
      console.log(result, "result")
      if(err){
        return res.status(500).send({status:false, message: err.message || "Something went wrong"});
      }
      res.status(200).send({status:true,data:result, message:"Team added success fully"});
    });
  } catch (error) {
    return res.status(500).send({status:false, message: err.message || "Something went wrong"});
  }
});



module.exports = router;
