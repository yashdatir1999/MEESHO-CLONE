var express = require('express');
var router = express.Router();
const countrylist = require("country-list")
const DATABASE = require("../module/usermodel")
const USER = require("../module/customermodel")
const passport = require("passport")
const LocalStrategy = require("passport-local");
passport.use(new LocalStrategy(USER.authenticate()));
const nodemailer = require("nodemailer")
const idpass = require("../idpasswordhide")

var totalprice 
var productname

function orderid(){
  return Math.floor(Math.random()*10000000000000)
}
const productlist = [
  {product: "WomenEthnic"},
  {product: "WomenWestern"},
  {product: "Men"},
  {product: "HomeKitchen"},
  {product: "BeautyHealth"},
  {product: "JewelleryAccessories"},
  {product: "BagsFootwere"},
  {product: "Electronics"}
]

/* GET home page. */
router.get('/', async function(req, res, next) {

  try {
    const product = await DATABASE.find()
    product.reverse()
    product.splice(50)
    res.render('index', { product , admin: req.user});
      
  } catch (error) {
    res.send(error)    
  }
});

//Women Ethnic  ///============== START

//Women Ethnic (SAREES) ============== START
router.get('/WomenEthnic/AllSarees', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "allSarees"){
        product.push(pro)
      }
    })
    res.render('allsarees', { product , admin: req.user});
  } catch (error) {
    res.send(error)
  }
});

router.get('/WomenEthnic/SilkSarees', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "silksarees"){
        product.push(pro)
      }
    })
    res.render('silksarees', { product , admin: req.user});
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenEthnic/CottonSilkSarees', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "cottonsilksarees"){
        product.push(pro)
      }
    })
    res.render('cottonsilksarees', { product , admin: req.user});
  } catch (error) {
    res.send(error)
  }
});

router.get('/WomenEthnic/CottonSarees', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "cottonsarees"){
        product.push(pro)
      }
    })
    res.render('cottonsarees', { product , admin: req.user});
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenEthnic/GeorgetteSarees', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "georgettesarees"){
        product.push(pro)
      }
    })
    res.render('georgettesarees', { product , admin: req.user});
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenEthnic/ChiffonSarees', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "chiffonsarees"){
        product.push(pro)
      }
    })
    res.render('chiffonsarees', { product , admin: req.user});
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenEthnic/SatinSarees', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "satinsarees"){
        product.push(pro)
      }
    })
    res.render('satinsarees', { product , admin: req.user});
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenEthnic/EmbroideredSarees', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "embroideredsarees"){
        product.push(pro)
      }
    })
    res.render('embroideredsarees', { product, admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Women Ethnic (SAREES) ============== END
//Women Ethnic (KURTIS) ============== START

router.get('/WomenEthnic/AllKurtis', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "allkurtis"){
        product.push(pro)
      }
    })
    res.render('allkurtis', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenEthnic/AnarkaliKurtis', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "anarkalikurtis"){
        product.push(pro)
      }
    })
    res.render('anarkalikurtis', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenEthnic/RayonKurtis', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "rayonkurtis"){
        product.push(pro)
      }
    })
    res.render('rayonkurtis', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenEthnic/CottonKurtis', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "cottonkurtis"){
        product.push(pro)
      }
    })
    res.render('cottonkurtis', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenEthnic/EmbroideredKurtis', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "embroideredkurtis"){
        product.push(pro)
      }
    })
    res.render('embroideredkurtis', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Women Ethnic (KURTIS) ============== END
//Women Ethnic (KURTA SETS) ============== START

router.get('/WomenEthnic/AllKurtaSets', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "allkurtasets"){
        product.push(pro)
      }
    })
    res.render('allkurtasets', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Women Ethnic (KURTA SETS) ============== END
//Women Ethnic (SUITS & DRESS MATERIAL) ============== START

router.get('/WomenEthnic/AllSuitsDressMaterial', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "allsuitsdressmaterial"){
        product.push(pro)
      }
    })
    res.render('allsuitsdressmaterial', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenEthnic/CottonSuits', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "cottonsuits"){
        product.push(pro)
      }
    })
    res.render('cottonsuits', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenEthnic/EmbroideredSuits', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "embroideredsuits"){
        product.push(pro)
      }
    })
    res.render('embroideredsuits', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenEthnic/ChanderiSuits', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "chanderisuits"){
        product.push(pro)
      }
    })
    res.render('chanderisuits', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Women Ethnic (SUITS & DRESS MATERIAL) ============== END

//Women Ethnic (OTHER ETHNIC) ============== START

router.get('/WomenEthnic/Blouses', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "blouses"){
        product.push(pro)
      }
    })
    res.render('blouses', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenEthnic/Dupattas', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "dupattas"){
        product.push(pro)
      }
    })
    res.render('dupattas', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenEthnic/Lehanga', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "lehanga"){
        product.push(pro)
      }
    })
    res.render('lehanga', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenEthnic/Gown', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "gown"){
        product.push(pro)
      }
    })
    res.render('gown', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenEthnic/EthnicBottomwear', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "ethnicbottomwear"){
        product.push(pro)
      }
    })
    res.render('ethnicbottomwear', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Women Ethnic (OTHER ETHNIC) ============== END
//Women Ethnic  ///============== END

//Women Western  ///============== START
//Women Western (TOPWERE) ============== START

router.get('/WomenWestern/Tops', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "tops"){
        product.push(pro)
      }
    })
    res.render('tops', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/WomenWestern/Dresses', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "dresses"){
        product.push(pro)
      }
    })
    res.render('dresses', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenWestern/Sweaters', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "sweaters"){
        product.push(pro)
      }
    })
    res.render('sweaters', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenWestern/Jumpsuits', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "jumpsuits"){
        product.push(pro)
      }
    })
    res.render('jumpsuits', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Women Ethnic (TOPWERE) ============== END
//Women Ethnic (BOTTOM WERE) ============== START

router.get('/WomenWestern/Jeans', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "jeans"){
        product.push(pro)
      }
    })
    res.render('jeans', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenWestern/Jeggings', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "jeggings"){
        product.push(pro)
      }
    })
    res.render('jeggings', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenWestern/Palazzos', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "palazzos"){
        product.push(pro)
      }
    })
    res.render('palazzos', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenWestern/Shorts', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "shorts"){
        product.push(pro)
      }
    })
    res.render('shorts', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenWestern/Skirts', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "skirts"){
        product.push(pro)
      }
    })
    res.render('skirts', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Women Ethnic (BOTTOM WERE) ============== END
//Women Ethnic (INNERWERE) ============== START

router.get('/WomenWestern/Bra', async function(req, res, next) {
var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "bra"){
        product.push(pro)
      }
    })
    res.render('bra', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenWestern/Briefs', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "briefs"){
        product.push(pro)
      }
    })
    res.render('briefs', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Women Ethnic (INNERWERE) ============== END
//Women Ethnic (SLEEPWERE) ============== START

router.get('/WomenWestern/Nightsuits', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "nightsuits"){
        product.push(pro)
      }
    })
    res.render('nightsuits', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/WomenWestern/Babydolls', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "babydolls"){
        product.push(pro)
      }
    })
    res.render('babydolls', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Women Ethnic (SLEEPWERE) ============== END
//Women Western  ///============== END

//Men  ///============== START
//Men (TOP WERE) ============== START

router.get('/Men/AllTopWear', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "alltopwear"){
        product.push(pro)
      }
    })
    res.render('alltopwear', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Men/Tshirts', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "tshirts"){
        product.push(pro)
      }
    })
    res.render('tshirts', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Men/Shirts', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "shirts"){
        product.push(pro)
      }
    })
    res.render('shirts', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Men (TOP WERE) ============== END
//Men (BOTTOM WERE) ============== START

router.get('/Men/TrackPants', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "trackpants"){
        product.push(pro)
      }
    })
    res.render('trackpants', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Men/Jeans', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "silksarees"){
        product.push(pro)
      }
    })
    res.render('Mjeans', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Men/Trousers', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "trousers"){
        product.push(pro)
      }
    })
    res.render('trousers', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Men (BOTTOM WERE) ============== END
//Men (Men Accessories) ============== START

router.get('/Men/AllMenAccessories', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "allmenaccessories"){
        product.push(pro)
      }
    })
    res.render('allmenaccessories', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Men/Watches', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "watches"){
        product.push(pro)
      }
    })
    res.render('watches', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Men/Belts', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "belts"){
        product.push(pro)
      }
    })
    res.render('belts', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/Men/Wallets', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "wallets"){
        product.push(pro)
      }
    })
    res.render('wallets', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Men/Jewellery', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "jewellery"){
        product.push(pro)
      }
    })
    res.render('jewellery', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Men/Sunglasses', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "sunglasses"){
        product.push(pro)
      }
    })
    res.render('sunglasses', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Men/Bags', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "bags"){
        product.push(pro)
      }
    })
    res.render('bags', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Men (Men Accessories) ============== END
//Men (Men Footwere) ============== START

router.get('/Men/CasualShoes', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "casualshoes"){
        product.push(pro)
      }
    })
    res.render('casualshoes', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Men/SportsShoes', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "sportsshoes"){
        product.push(pro)
      }
    })
    res.render('sportsshoes', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Men/Sandals', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "sandals"){
        product.push(pro)
      }
    })
    res.render('sandals', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Men/FormalShoes', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "formalshoes"){
        product.push(pro)
      }
    })
    res.render('formalshoes', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Men (Men Footwere) ============== END
//Men (Ethnic Wear) ============== START

router.get('/Men/MenKurtas', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "menkurtas"){
        product.push(pro)
      }
    })
    res.render('menkurtas', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Men/EthnicJackets', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "ethnicjackets"){
        product.push(pro)
      }
    })
    res.render('ethnicjackets', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Men (Ethnic Wear) ============== END
//Men (Inner & Sleep Wear) ============== START

router.get('/Men/AllInnerSleepWear', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "allinnersleepwear"){
        product.push(pro)
      }
    })
    res.render('allinnersleepwear', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Men/Vests', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "vests"){
        product.push(pro)
      }
    })
    res.render('vests', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Men (Inner & Sleep Wear) ============== END
//Men  ///============== END
//Kids  ///============== START
//Kids (Boys & Girls 2+ Years) ============== START

router.get('/Kids/Dresses', async function(req, res, next) {
var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "dresses"){
        product.push(pro)
      }
    })
    res.render('Kdresses', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Kids (Boys & Girls 2+ Years) ============== END
//Kids (Infant 0-2 Years) ============== START

router.get('/Kids/Rompers', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "rompers"){
        product.push(pro)
      }
    })
    res.render('rompers', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Kids (Infant 0-2 Years) ============== END
//Kids (Toys & Accessories) ============== START

router.get('/Kids/SoftToys', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "softtoys"){
        product.push(pro)
      }
    })
    res.render('softtoys', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Kids/Footwear', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "footwear"){
        product.push(pro)
      }
    })
    res.render('footwear', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Kids/Stationery', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "stationery"){
        product.push(pro)
      }
    })
    res.render('stationery', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Kids/Watches', async function(req, res, next) {
var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "watches"){
        product.push(pro)
      }
    })
    res.render('Kwatches', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/Kids/BagsBackpacks', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "bagsbackpacks"){
        product.push(pro)
      }
    })
    res.render('bagsbackpacks', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Kids (Toys & Accessories) ============== END
//Kids (Baby Care) ============== START

router.get('/Kids/AllBabyCare', async function(req, res, next) {
var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "allbabycare"){
        product.push(pro)
      }
    })
    res.render('allbabycare', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Kids (Baby Care) ============== END
//Kids  ///============== END
//Home & Kitchen  ///============== START
//Home & Kitchen (Home Furnishing) ============== START

router.get('/HomeKitchen/Bedsheets', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "bedsheets"){
        product.push(pro)
      }
    })
    res.render('bedsheets', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/HomeKitchen/Doormats', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "doormats"){
        product.push(pro)
      }
    })
    res.render('doormats', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/HomeKitchen/CurtainsSheers', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "curtainssheers"){
        product.push(pro)
      }
    })
    res.render('curtainssheers', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/HomeKitchen/CushionsCushionCovers', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "cushionscushioncovers"){
        product.push(pro)
      }
    })
    res.render('cushionscushioncovers', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/HomeKitchen/MattressProtectors', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "mattressprotectors"){
        product.push(pro)
      }
    })
    res.render('mattressprotectors', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Home & Kitchen (Home Furnishing) ============== END
//Home & Kitchen (Home Decor) ============== START

router.get('/HomeKitchen/AllHomeDecor', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "allhomedecor"){
        product.push(pro)
      }
    })
    res.render('allhomedecor', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/HomeKitchen/Stickers', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "stickers"){
        product.push(pro)
      }
    })
    res.render('stickers', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/HomeKitchen/Clocks', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "clocks"){
        product.push(pro)
      }
    })
    res.render('clocks', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/HomeKitchen/Showpieces', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "showpieces"){
        product.push(pro)
      }
    })
    res.render('showpieces', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Home & Kitchen (Home Decor) ============== END
//Home & Kitchen (Kitchen & Dining) ============== START

router.get('/HomeKitchen/KitchenStorage', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "kitchenstorage"){
        product.push(pro)
      }
    })
    res.render('kitchenstorage', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/HomeKitchen/CookwareBakeware', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "cookwarebakeware"){
        product.push(pro)
      }
    })
    res.render('cookwarebakeware', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Home & Kitchen (Kitchen & Dining) ============== END
//Home & Kitchen  ///============== END

//Beauty & Health  ///============== START
//Beauty & Health (Make up) ============== START

router.get('/BeautyHealth/Face', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "face"){
        product.push(pro)
      }
    })
    res.render('face', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/BeautyHealth/Eyes', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "eyes"){
        product.push(pro)
      }
    })
    res.render('eyes', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/BeautyHealth/Lips', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "lips"){
        product.push(pro)
      }
    })
    res.render('lips', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/BeautyHealth/Nails', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "nails"){
        product.push(pro)
      }
    })
    res.render('nails', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Beauty & Health (Make up) ============== END
//Beauty & Health (Wellness) ============== 

router.get('/BeautyHealth/Sanitizers', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "sanitizers"){
        product.push(pro)
      }
    })
    res.render('sanitizers', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/BeautyHealth/OralCare', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "oralcare"){
        product.push(pro)
      }
    })
    res.render('oralcare', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

router.get('/BeautyHealth/FeminineHygiene', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "femininehygiene"){
        product.push(pro)
      }
    })
    res.render('femininehygiene', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Beauty & Health (Wellness) ============== END
//Beauty & Health (Skincare) ============== START

router.get('/BeautyHealth/Deodorants', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "deodorants"){
        product.push(pro)
      }
    })
    res.render('deodorants', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }

});

//Beauty & Health (Skincare) ============== END
//Beauty & Health  ///============== END

//Jewellery & Accessories  ///============== START
//Jewellery & Accessories (Jewellery) ============== START

router.get('/JewelleryAccessories/JewellerySet', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "jewelleryset"){
        product.push(pro)
      }
    })
    res.render('jewelleryset', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/JewelleryAccessories/Earrings', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "earrings"){
        product.push(pro)
      }
    })
    res.render('earrings', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/JewelleryAccessories/Mangalsutras', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "mangalsutras"){
        product.push(pro)
      }
    })
    res.render('mangalsutras', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/JewelleryAccessories/Studs', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "studs"){
        product.push(pro)
      }
    })
    res.render('studs', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/JewelleryAccessories/Bangles', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "bangles"){
        product.push(pro)
      }
    })
    res.render('bangles', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/JewelleryAccessories/Necklaces', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "necklaces"){
        product.push(pro)
      }
    })
    res.render('necklaces', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/JewelleryAccessories/Rings', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "rings"){
        product.push(pro)
      }
    })
    res.render('rings', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/JewelleryAccessories/Anklets', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "anklets"){
        product.push(pro)
      }
    })
    res.render('anklets', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

//Jewellery & Accessories (Jewellery) ============== START
//Jewellery & Accessories (Women Accessory) ============== START

router.get('/JewelleryAccessories/Bags', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "jbags"){
        product.push(pro)
      }
    })
    res.render('Jbags', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/JewelleryAccessories/Watches', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "jwatches"){
        product.push(pro)
      }
    })
    res.render('Jwatches', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/JewelleryAccessories/HairAccessories', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "hairaccessories"){
        product.push(pro)
      }
    })
    res.render('hairaccessories', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/JewelleryAccessories/Sunglasses', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "jsunglasses"){
        product.push(pro)
      }
    })
    res.render('Jsunglasses', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/JewelleryAccessories/Socks', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "socks"){
        product.push(pro)
      }
    })
    res.render('socks', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});


//Jewellery & Accessories (Women Accessory) ============== END
//Jewellery & Accessories  ///============== END

//Bags & Footwere  ///============== START
//Bags & Footwere (Women Bags) ============== START

router.get('/BagsFootwere/AllWomenBags', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "allwomenbags"){
        product.push(pro)
      }
    })
    res.render('allwomenbags', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/BagsFootwere/Handbags', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "handbags"){
        product.push(pro)
      }
    })
    res.render('handbags', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }});

router.get('/BagsFootwere/Clutches', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "clutches"){
        product.push(pro)
      }
    })
    res.render('clutches', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }});

router.get('/BagsFootwere/Slingbags', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "slingbags"){
        product.push(pro)
      }
    })
    res.render('slingbags', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

//Bags & Footwere (Women Bags) ============== END
//Bags & Footwere (Men Bags) ============== START

router.get('/BagsFootwere/AllMenBags', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "allmenbags"){
        product.push(pro)
      }
    })
    res.render('allmenbags', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/BagsFootwere/MenWallets', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "menwallets"){
        product.push(pro)
      }
    })
    res.render('menwallets', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

//Bags & Footwere (Men Bags) ============== END
//Bags & Footwere (Men Footwear) ============== START

router.get('/BagsFootwere/SportsShoes', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "bsportsshoes"){
        product.push(pro)
      }
    })
    res.render('bsportsshoes', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/BagsFootwere/CasualShoes', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "bcasualshoes"){
        product.push(pro)
      }
    })
    res.render('bcasualshoes', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/BagsFootwere/FormalShoes', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "bformalshoes"){
        product.push(pro)
      }
    })
    res.render('bformalshoes', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }});

router.get('/BagsFootwere/Sandals', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "bsandals"){
        product.push(pro)
      }
    })
    res.render('bsandals', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }});

//Bags & Footwere (Men Footwear) ============== END
//Bags & Footwere (Women Footwear) ============== START

router.get('/BagsFootwere/Flats', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "flats"){
        product.push(pro)
      }
    })
    res.render('flats', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/BagsFootwere/Bellies', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "bellies"){
        product.push(pro)
      }
    })
    res.render('bellies', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/BagsFootwere/Juttis', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "juttis"){
        product.push(pro)
      }
    })
    res.render('juttis', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }});

//Bags & Footwere (Women Footwear) ============== END
//Bags & Footwere  ///============== END

//Electronics  ///============== START
//Electronics (Mobile & Accessories) ============== END

router.get('/Electronics/AllMobileAccessories', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "allmobileaccessories"){
        product.push(pro)
      }
    })
    res.render('allmobileaccessories', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/Electronics/Smartwatches', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "smartwatches"){
        product.push(pro)
      }
    })
    res.render('smartwatches', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/Electronics/MobileHolders', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "mobileholders"){
        product.push(pro)
      }
    })
    res.render('mobileholders', { product, admin: req.user  });
  } catch (error) {
    res.send(error)
  }
});

router.get('/Electronics/Mobilecasesandcovers', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "mobilecasesandcovers"){
        product.push(pro)
      }
    })
    res.render('mobilecasesandcovers', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

//Electronics (Mobile & Accessories) ============== END
//Electronics (Appliances) ============== START

router.get('/Electronics/AllAppliances', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "allappliances"){
        product.push(pro)
      }
    })
    res.render('allappliances', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/Electronics/Grooming', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "grooming"){
        product.push(pro)
      }
    })
    res.render('grooming', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});

router.get('/Electronics/HomeAppliances', async function(req, res, next) {
  var product=[]
  try {
    const allproduct = await DATABASE.find()
    allproduct.forEach(function(pro){
      if(pro.subcatagory == "homeappliances"){
        product.push(pro)
      }
    })
    res.render('homeappliances', { product , admin: req.user });
  } catch (error) {
    res.send(error)
  }
});


//Electronics (Appliances) ============== END

//Electronics  ///============== END
// ============= ============ ======== USER ======= ============= ================

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', async function(req, res, next) {
try {
  USER.register({
    username: req.body.username,
    mobile: req.body.mobile,
    email: req.body.email,
    address: req.body.address
  },req.body.password)  
  res.redirect("/signin")
} catch (error) {
  res.send(error)
}
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

router.post('/signin', passport.authenticate("local" , {
  successRedirect: "/",
  failureRedirect: "/signin"
}) ,function(req, res, next) {
});

function isLoggedIn(req , res , next){
  if(req.isAuthenticated()){
    next()
  }else{
    res.redirect("/signin")
  }
}

router.get("/signout" , isLoggedIn, function(req, res, next){
  req.logout(() => {
    res.redirect("/signin")
  })
})


// ============= ============ ======== USER START ======= ============= ================

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', async function(req, res, next) {
try {
  USER.register({
    username: req.body.username,
    mobile: req.body.mobile,
    email: req.body.email,
    address: req.body.address
  },req.body.password)  
  res.redirect("/signin")
} catch (error) {
  res.send(error)
}
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

router.post('/signin', passport.authenticate("local" , {
  successRedirect: "/",
  failureRedirect: "/signin"
}) ,function(req, res, next) {
});

function isLoggedIn(req , res , next){
  if(req.isAuthenticated()){
    next()
  }else{
    res.redirect("/signin")
  }
}

router.get("/forget" , function(req, res, next){
  res.render("forget")
})

router.post("/otp" , async function(req, res, next){
  try {
    const user = await USER.findOne({email: req.body.email})  
    if(!user) return res.send("no user found")

    otphandler(req , res , user)
  } catch (error) {
    res.send(error)
  }
})

function otphandler (req,res,user){
  const otp = Math.floor(100000+ Math.random() * 900000)


// admin mail address, which is going to be the sender
const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: idpass.gmail,
    pass: idpass.password,
},
});

// receiver mailing info
const mailOptions = {
  from: "Meesho Pvt. Ltd.<yashdatir1999@gmail.com>",
  to: user.email,
  subject: "Important: Account Recovery Assistance for Your Meesho Account",
  // text: req.body.message,
  html: `<h1> Dear ${user.username}, </h1> 
  
  <br><br>
  We hope this email finds you well. Our records indicate that there may be an issue with accessing your Meesho account. We understand the importance of a seamless experience, and we are committed to assisting you in resolving this matter promptly.
  <br><br>
  To facilitate the account recovery process, we request your cooperation in verifying your identity. Please find attached a One-Time Password <strong> ${otp} </strong> that will enable you to regain access to your Meesho account. It is crucial to keep this OTP confidential and not share it with anyone.
  <br><br>
  If you encounter any difficulties during this process or have concerns about the security of your account, please do not hesitate to contact our customer support team at meeshoclone@gmail.com , 0755-3189303. We are here to assist you and ensure a smooth resolution.
  <br><br>
  At Meesho, we take the security of your account seriously, and your privacy is our priority.<br> Thank you for your understanding and cooperation in this matter.
  <br><br>
  We appreciate your trust in Meesho, and we look forward to continuing to serve you.
  <br><br><br>
  Best regards,
  <br><br>
  MEESHO
  <br>
  Online Shopping Site for Fashion, Electronics, Home & More | Meesho
  <br><br>
  Meesho Customer Service Team
  meeshooclone@gmail.com
  <br>
  0755-3189303
  </h1>` ,
};

// actual object which intregrate all info and send mail
transport.sendMail(mailOptions, (err, info) => {
  if (err) return res.send(err);
  console.log(info);
  user.otp = otp
  user.save()
  res.render("enterotp" ,{email: user.email , admin: req.user})
});

}

router.post("/enterotp/:email" , async function(req, res, next){
  try {
    const user = await USER.findOne({email: req.params.email})
    if(user.otp == req.body.otp)
    user.otp = -1
    await user.save()
    res.render("resetpassword" , {user})
  } catch (error) {
    res.send(error)
  }
})

router.post("/resetpassword/:email" , async function(req, res, next){
  try {
    if(req.body.newpassword == req.body.cnfpassword){
      const user = await USER.findOne({email: req.params.email})
      await user.setPassword(req.body.newpassword)
      await user.save()
      res.redirect("/signin")
    }
  } catch (error) {
    res.send(error)
  }
})

router.get("/accountsetting/:id" , isLoggedIn, function(req, res, next){
  res.render("accountsetting" , {admin: req.user})
})

router.get("/updateaccount/:id" , isLoggedIn, function(req, res, next){
  res.render("updateaccount" , {admin: req.user})
})

router.post("/updateaccount/:id" , isLoggedIn, async function(req, res, next){
  try {
    await USER.findByIdAndUpdate(req.params.id , 
      {username: req.body.username ,
       mobile: req.body.mobile , 
       email: req.body.email ,
       address: req.body.address})
    res.redirect("/accountsetting/req.params.id")    
  } catch (error) {
   res.send("error") 
  }
})

router.get("/updatepassword" , isLoggedIn, function(req, res, next){
  res.render("updatepassword" , {admin: req.user})
})

router.post("/updatepassword/:id" , isLoggedIn, async function(req, res, next){
try {
  if(req.body.newpassword == req.body.cnfpassword){
    const data = await USER.findById(req.params.id)
    
      data.changePassword(req.body.oldpassword , req.body.newpassword)
      await data.save()
      res.redirect("/signin")
  
  }else{
    res.send("NEW PASSWORD AND CONFORM PASSWORD NOT MATCH")
  }
} catch (error) {
  res.send(error)
}
})

router.get("/deleteaccount/:id" , isLoggedIn, async function(req, res, next){
  try {
    await USER.findByIdAndDelete(req.params.id)    
    res.redirect("/")
  } catch (error) {
    res.send(error)
  }
})
router.get("/signout" , isLoggedIn, function(req, res, next){
  req.logout(() => {
    res.redirect("/signin")
  })
})

// ============= ============ ======== USER END ======= ============= ================

// ================ ================= SUPPLIR START ====================== ==== ===========
router.get('/supplirpage', function(req, res, next) {
  res.render('supplirpage');
});

router.get('/supplirlogin', function(req, res, next) {
  res.render('supplirlogin');
});

router.post('/supplirlogin', function(req, res, next) {
  const userid = "YASHDATIR" 
  const password = "12345"
  if(userid === req.body.userid && password === req.body.password){
    res.redirect("/productregistration")
  }else{
    res.render("wrongidpassword")
  }
});

router.get('/productregistration', function(req, res, next) {
  res.render('productregistration' , { productlist , countrylist: countrylist.getNames()});
});

router.post('/productregistration', async function(req, res, next) {
  
try {
  const products = DATABASE(req.body)
  await products.save()
  res.redirect("/productregistration")
} catch (error) {
  res.send(error.message)
}

});

router.get('/productmodification', async function(req, res, next) {

  try {
    const product = await DATABASE.find()
    res.render("productmodification" , {product})
  } catch (error) {
    res.send(error.message)
  }
    
});

router.get('/delete/:del', async function(req, res, next) {

  try {
    await DATABASE.findByIdAndDelete(req.params.del)
    res.redirect("/productmodification")
  } catch (error) {
    res.send(error.message)
  }
    
});

router.get('/update/:up', async function(req, res, next) {

  try {
    const product =  await DATABASE.findById(req.params.up)
    res.render("productupdate" , {product , countrylist: countrylist.getNames()})
  } catch (error) {
    res.send(error.message)
  }
    
});

router.post('/productupdate/:up', async function(req, res, next) {

  try {
    await DATABASE.findByIdAndUpdate(req.params.up , req.body)
    res.redirect("/productmodification")
  } catch (error) {
    res.send(error.message)
  }
    
});

router.get('/startselling', function(req, res, next) {
  res.render('startselling');
});

router.get('/productdetails/:pro', async function(req, res, next) {
  try {
    var product = await DATABASE.findById(req.params.pro)
    
    res.render("productdetails" , {product , admin:req.user} )
  } catch (error) {
    res.send(error.message)
  }
});

router.get('/buybtn/:buyid', isLoggedIn, async function(req, res, next) {
  try {
    var product = await DATABASE.findById(req.params.buyid)
    totalprice = parseInt(product.productprice) + parseInt(product.deliverycharges)
    productname = product.productname
    res.render("buypage" , {product , totalprice , admin: req.user} )
  } catch (error) {
    res.send(error.message)
  }

});

// E-mail===============

router.post('/buyform', function(req, res, next) {

  const orderID = orderid()
// admin mail address, which is going to be the sender
const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: idpass.gmail,
    pass: idpass.password,
  },
});

// receiver mailing info
const mailOptions = {
  from: "Meesho Pvt. Ltd.<meesho@gmail.com>",
  to: req.body.custumeremail,
  subject: `Order Confirmation - Meesho Order #${orderID} `,
  html: `<h1> Dear ${req.body.custumername} </h1>

  We hope this email finds you well. We are delighted to inform you that your order with Meesho has been successfully confirmed, and we are excited to provide you with the details you need to track your order's progress.
  <br><br>
  Order Details:
  <br><br>
  Order Number: #${orderID}
  <br>
  Product Name: ${productname}
  <br>
  Order Amount: ₹ ${totalprice}
  <br>
  Tracking ID: ${orderid()}
  <br>
  Estimated Delivery Time: 3 - 5 Business Days
  <br>
  Customer Address: ${req.body.custumeraddress}
  <br><br>
  Your order is now being processed, and our team is diligently working to ensure a smooth and timely delivery to your provided address. To help you keep track of your order, please use the provided tracking ID when checking the status of your package.
  <br><br>
  If you have any questions or require assistance regarding your order, tracking, or any other matter related to your purchase, please do not hesitate to reach out to our dedicated customer support team. You can contact them by:
  <br><br>
  Email: meeshooclone@gmail.com
  <br>
  Phone: 0755-3189303
  <br><br>
  We truly appreciate your business and trust in Meesho. Our commitment is to provide you with a seamless shopping experience, from order placement to delivery.
  <br><br>
  Thank you for choosing Meesho. We look forward to serving you, and we are confident that you will be satisfied with your purchase.
  <br><br><br>
  Warm regards,
  <br><br>
  MEESHO
  <br>
  Online Shopping Site for Fashion, Electronics, Home & More | Meesho
  <br><br>
  Meesho Customer Service Team
  meeshooclone@gmail.com
  <br>
  0755-3189303 
  </h1>`,
};

// actual object which intregrate all info and send mail
transport.sendMail(mailOptions, (err, info) => {
  if (err) return res.send(err);
  console.log(info);
  return res.render("congrats") 
});
    
});

module.exports = router;

// res.send(
//   "<h1 style='text-align:center;color: tomato; margin-top:10%'><span style='font-size:60px;'>✔️</span> <br />Email Sent! Check your inbox , <br/>check spam in case not found in inbox.</h1>"
// );