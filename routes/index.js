var express = require('express');
var router = express.Router();

/* GET home page. */


let products = [
{
  Name : "IPhone11",
  Category : "Mobile",
  Description : "bla",
  img : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-11-pro-gold-2019?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1611101491000"
},
{
  
  Name : "IPhone12",
  Category : "Mobile",
  Description : "bla",
  img : "https://www.reliancedigital.in/medias/Apple-Iphone12-Mobilephones-491901533-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NzE5fGltYWdlL2pwZWd8aW1hZ2VzL2g3Ny9oNzEvOTg2MzgzNTU4MjQ5NC5qcGd8NDEzYzUzZjg1YmE5ZmVjNDYyNjMxNmY4ODRlNjIyOGM2MDQ1NzRiNGFkYmZjMTlmOTUxMjIzY2MyMWFlMmJlMA"

},







]
router.get('/', function(req, res, next) {
  res.render('index', { products ,admin:true });
});

module.exports = router;
