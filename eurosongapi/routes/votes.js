var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data =[];
    res.json(data);
    
    
  // res.send('respond with a resource');
});


module.exports = router;