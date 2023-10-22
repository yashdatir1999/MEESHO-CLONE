var express = require('express');
var router = express.Router();
const countrylist = require("country-list")
const DATABASE = require("../module/usermodel")

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
    res.render('index', { product });
      
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
    res.render('allsarees', { product });
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
    res.render('silksarees', { product });
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
    res.render('cottonsilksarees', { product });
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
    res.render('cottonsarees', { product });
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
    res.render('georgettesarees', { product });
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
    res.render('chiffonsarees', { product });
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
    res.render('satinsarees', { product });
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
    res.render('embroideredsarees', { product });
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
    res.render('allkurtis', { product });
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
    res.render('anarkalikurtis', { product });
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
    res.render('rayonkurtis', { product });
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
    res.render('cottonkurtis', { product });
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
    res.render('embroideredkurtis', { product });
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
    res.render('allkurtasets', { product });
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
    res.render('allsuitsdressmaterial', { product });
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
    res.render('cottonsuits', { product });
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
    res.render('embroideredsuits', { product });
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
    res.render('chanderisuits', { product });
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
    res.render('blouses', { product });
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
    res.render('dupattas', { product });
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
    res.render('lehanga', { product });
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
    res.render('gown', { product });
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
    res.render('ethnicbottomwear', { product });
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
    res.render('tops', { product });
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
    res.render('dresses', { product });
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
    res.render('sweaters', { product });
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
    res.render('jumpsuits', { product });
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
    res.render('jeans', { product });
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
    res.render('jeggings', { product });
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
    res.render('palazzos', { product });
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
    res.render('shorts', { product });
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
    res.render('skirts', { product });
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
    res.render('bra', { product });
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
    res.render('briefs', { product });
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
    res.render('nightsuits', { product });
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
    res.render('babydolls', { product });
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
    res.render('alltopwear', { product });
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
    res.render('tshirts', { product });
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
    res.render('shirts', { product });
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
    res.render('trackpants', { product });
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
    res.render('Mjeans', { product });
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
    res.render('trousers', { product });
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
    res.render('allmenaccessories', { product });
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
    res.render('watches', { product });
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
    res.render('belts', { product });
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
    res.render('wallets', { product });
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
    res.render('jewellery', { product });
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
    res.render('sunglasses', { product });
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
    res.render('bags', { product });
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
    res.render('casualshoes', { product });
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
    res.render('sportsshoes', { product });
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
    res.render('sandals', { product });
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
    res.render('formalshoes', { product });
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
    res.render('menkurtas', { product });
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
    res.render('ethnicjackets', { product });
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
    res.render('allinnersleepwear', { product });
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
    res.render('vests', { product });
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
    res.render('Kdresses', { product });
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
    res.render('rompers', { product });
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
    res.render('softtoys', { product });
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
    res.render('footwear', { product });
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
    res.render('stationery', { product });
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
    res.render('Kwatches', { product });
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
    res.render('bagsbackpacks', { product });
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
    res.render('allbabycare', { product });
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
    res.render('bedsheets', { product });
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
    res.render('doormats', { product });
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
    res.render('curtainssheers', { product });
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
    res.render('cushionscushioncovers', { product });
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
    res.render('mattressprotectors', { product });
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
    res.render('allhomedecor', { product });
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
    res.render('stickers', { product });
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
    res.render('clocks', { product });
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
    res.render('showpieces', { product });
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
    res.render('kitchenstorage', { product });
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
    res.render('cookwarebakeware', { product });
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
    res.render('face', { product });
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
    res.render('eyes', { product });
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
    res.render('lips', { product });
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
    res.render('nails', { product });
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
    res.render('sanitizers', { product });
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
    res.render('oralcare', { product });
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
    res.render('femininehygiene', { product });
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
    res.render('deodorants', { product });
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
    res.render('jewelleryset', { product });
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
    res.render('earrings', { product });
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
    res.render('mangalsutras', { product });
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
    res.render('studs', { product });
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
    res.render('bangles', { product });
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
    res.render('necklaces', { product });
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
    res.render('rings', { product });
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
    res.render('anklets', { product });
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
    res.render('Jbags', { product });
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
    res.render('Jwatches', { product });
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
    res.render('hairaccessories', { product });
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
    res.render('Jsunglasses', { product });
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
    res.render('socks', { product });
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
    res.render('allwomenbags', { product });
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
    res.render('handbags', { product });
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
    res.render('clutches', { product });
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
    res.render('slingbags', { product });
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
    res.render('allmenbags', { product });
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
    res.render('menwallets', { product });
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
    res.render('bsportsshoes', { product });
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
    res.render('bcasualshoes', { product });
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
    res.render('bformalshoes', { product });
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
    res.render('bsandals', { product });
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
    res.render('flats', { product });
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
    res.render('bellies', { product });
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
    res.render('juttis', { product });
  } catch (error) {
    res.send(error)
  }});

//Bags & Footwere (Women Footwear) ============== END
//Bags & Footwere  ///============== END

//Electronics  ///============== START
//Electronics (Mobile & Accessories) ============== END

router.get('/Electronics/AllMobileAccessories', function(req, res, next) {
  res.render('AllMobileAccessories');
});

router.get('/Electronics/Smartwatches', function(req, res, next) {
  res.render('Smartwatches');
});

router.get('/Electronics/MobileHolders', function(req, res, next) {
  res.render('MobileHolders');
});

router.get('/Electronics/Mobilecasesandcovers', function(req, res, next) {
  res.render('Mobilecasesandcovers');
});

//Electronics (Mobile & Accessories) ============== END
//Electronics (Appliances) ============== START

router.get('/Electronics/AllAppliances', function(req, res, next) {
  res.render('AllAppliances');
});

router.get('/Electronics/Grooming', function(req, res, next) {
  res.render('Grooming');
});

router.get('/Electronics/HomeAppliances', function(req, res, next) {
  res.render('HomeAppliances');
});


//Electronics (Appliances) ============== END

//Electronics  ///============== END

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

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
    res.send(`<h1> WRONG USER-ID OR PADDWORD </h1>`)
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
    console.log(product)
    res.render("productdetails" , {product} )
  } catch (error) {
    res.send(error.message)
  }
});

module.exports = router;
