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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
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
    console.log(product)
    res.render('ethnicbottomwear', { product });
  } catch (error) {
    res.send(error)
  }

});

//Women Ethnic (OTHER ETHNIC) ============== END
//Women Ethnic  ///============== END

//Women Western  ///============== START
//Women Western (TOPWERE) ============== START

router.get('/WomenWestern/Tops', function(req, res, next) {
  res.render('Tops');
});

router.get('/WomenWestern/Dresses', function(req, res, next) {
  res.render('Dresses');
});

router.get('/WomenWestern/Sweaters', function(req, res, next) {
  res.render('Sweaters');
});

router.get('/WomenWestern/Jumpsuits', function(req, res, next) {
  res.render('Jumpsuits');
});

//Women Ethnic (TOPWERE) ============== END
//Women Ethnic (BOTTOM WERE) ============== START

router.get('/WomenWestern/Jeans', function(req, res, next) {
  res.render('Jeans');
});

router.get('/WomenWestern/Jeggings', function(req, res, next) {
  res.render('Jeggings');
});

router.get('/WomenWestern/Palazzos', function(req, res, next) {
  res.render('Palazzos');
});

router.get('/WomenWestern/Shorts', function(req, res, next) {
  res.render('Shorts');
});

router.get('/WomenWestern/Skirts', function(req, res, next) {
  res.render('Skirts');
});

//Women Ethnic (BOTTOM WERE) ============== END
//Women Ethnic (INNERWERE) ============== START

router.get('/WomenWestern/Bra', function(req, res, next) {
  res.render('Bra');
});

router.get('/WomenWestern/Briefs', function(req, res, next) {
  res.render('Briefs');
});

//Women Ethnic (INNERWERE) ============== END
//Women Ethnic (SLEEPWERE) ============== START

router.get('/WomenWestern/Nightsuits', function(req, res, next) {
  res.render('Nightsuits');
});

router.get('/WomenWestern/Babydolls', function(req, res, next) {
  res.render('Babydolls');
});

//Women Ethnic (SLEEPWERE) ============== END
//Women Western  ///============== END

//Men  ///============== START
//Men (TOP WERE) ============== START

router.get('/Men/AllTopWear', function(req, res, next) {
  res.render('AllTopWear');
});

router.get('/Men/Tshirts', function(req, res, next) {
  res.render('Tshirts');
});

router.get('/Men/Shirts', function(req, res, next) {
  res.render('Shirts');
});

//Men (TOP WERE) ============== END
//Men (BOTTOM WERE) ============== START

router.get('/Men/TrackPants', function(req, res, next) {
  res.render('TrackPants');
});

router.get('/Men/Jeans', function(req, res, next) {
  res.render('MJeans');
});

router.get('/Men/Trousers', function(req, res, next) {
  res.render('Trousers');
});

//Men (BOTTOM WERE) ============== END
//Men (Men Accessories) ============== START

router.get('/Men/AllMenAccessories', function(req, res, next) {
  res.render('AllMenAccessories');
});

router.get('/Men/Watches', function(req, res, next) {
  res.render('Watches');
});

router.get('/Men/Belts', function(req, res, next) {
  res.render('Belts');
});

router.get('/Men/Wallets', function(req, res, next) {
  res.render('Wallets');
});

router.get('/Men/Jewellery', function(req, res, next) {
  res.render('Jewellery');
});

router.get('/Men/Sunglasses', function(req, res, next) {
  res.render('Sunglasses');
});

router.get('/Men/Bags', function(req, res, next) {
  res.render('Bags');
});

//Men (Men Accessories) ============== END
//Men (Men Footwere) ============== START

router.get('/Men/CasualShoes', function(req, res, next) {
  res.render('CasualShoes');
});

router.get('/Men/SportsShoes', function(req, res, next) {
  res.render('SportsShoes');
});

router.get('/Men/Sandals', function(req, res, next) {
  res.render('Sandals');
});

router.get('/Men/FormalShoes', function(req, res, next) {
  res.render('FormalShoes');
});

//Men (Men Footwere) ============== END
//Men (Ethnic Wear) ============== START

router.get('/Men/MenKurtas', function(req, res, next) {
  res.render('MenKurtas');
});

router.get('/Men/EthnicJackets', function(req, res, next) {
  res.render('EthnicJackets');
});

//Men (Ethnic Wear) ============== END
//Men (Inner & Sleep Wear) ============== START

router.get('/Men/AllInnerSleepWear', function(req, res, next) {
  res.render('AllInnerSleepWear');
});

router.get('/Men/Vests', function(req, res, next) {
  res.render('Vests');
});

//Men (Inner & Sleep Wear) ============== END
//Men  ///============== END
//Kids  ///============== START
//Kids (Boys & Girls 2+ Years) ============== START

router.get('/Kids/Dresses', function(req, res, next) {
  res.render('KDresses');
});

//Kids (Boys & Girls 2+ Years) ============== END
//Kids (Infant 0-2 Years) ============== START

router.get('/Kids/Rompers', function(req, res, next) {
  res.render('Rompers');
});

//Kids (Infant 0-2 Years) ============== END
//Kids (Toys & Accessories) ============== START

router.get('/Kids/SoftToys', function(req, res, next) {
  res.render('SoftToys');
});

router.get('/Kids/Footwear', function(req, res, next) {
  res.render('Footwear');
});

router.get('/Kids/Stationery', function(req, res, next) {
  res.render('Stationery');
});

router.get('/Kids/Watches', function(req, res, next) {
  res.render('KWatches');
});

router.get('/Kids/BagsBackpacks', function(req, res, next) {
  res.render('BagsBackpacks');
});

//Kids (Toys & Accessories) ============== END
//Kids (Baby Care) ============== START

router.get('/Kids/AllBabyCare', function(req, res, next) {
  res.render('AllBabyCare');
});

//Kids (Baby Care) ============== END
//Kids  ///============== END
//Home & Kitchen  ///============== START
//Home & Kitchen (Home Furnishing) ============== START

router.get('/HomeKitchen/Bedsheets', function(req, res, next) {
  res.render('Bedsheets');
});

router.get('/HomeKitchen/Doormats', function(req, res, next) {
  res.render('Doormats');
});

router.get('/HomeKitchen/CurtainsSheers', function(req, res, next) {
  res.render('CurtainsSheers');
});

router.get('/HomeKitchen/CushionsCushionCovers', function(req, res, next) {
  res.render('CushionsCushionCovers');
});

router.get('/HomeKitchen/MattressProtectors', function(req, res, next) {
  res.render('MattressProtectors');
});
//Home & Kitchen (Home Furnishing) ============== END
//Home & Kitchen (Home Decor) ============== START

router.get('/HomeKitchen/AllHomeDecor', function(req, res, next) {
  res.render('AllHomeDecor');
});

router.get('/HomeKitchen/Stickers', function(req, res, next) {
  res.render('Stickers');
});

router.get('/HomeKitchen/Clocks', function(req, res, next) {
  res.render('Clocks');
});

router.get('/HomeKitchen/Showpieces', function(req, res, next) {
  res.render('Showpieces');
});

//Home & Kitchen (Home Decor) ============== END
//Home & Kitchen (Kitchen & Dining) ============== START

router.get('/HomeKitchen/KitchenStorage', function(req, res, next) {
  res.render('KitchenStorage');
});

router.get('/HomeKitchen/CookwareBakeware', function(req, res, next) {
  res.render('CookwareBakeware');
});

//Home & Kitchen (Kitchen & Dining) ============== END
//Home & Kitchen  ///============== END

//Beauty & Health  ///============== START
//Beauty & Health (Make up) ============== START

router.get('/BeautyHealth/Face', function(req, res, next) {
  res.render('Face');
});

router.get('/BeautyHealth/Eyes', function(req, res, next) {
  res.render('Eyes');
});

router.get('/BeautyHealth/Lips', function(req, res, next) {
  res.render('Lips');
});

router.get('/BeautyHealth/Nails', function(req, res, next) {
  res.render('Nails');
});

//Beauty & Health (Make up) ============== END
//Beauty & Health (Wellness) ============== 

router.get('/BeautyHealth/Sanitizers', function(req, res, next) {
  res.render('Sanitizers');
});

router.get('/BeautyHealth/OralCare', function(req, res, next) {
  res.render('OralCare');
});

router.get('/BeautyHealth/FeminineHygiene', function(req, res, next) {
  res.render('FeminineHygiene');
});

//Beauty & Health (Wellness) ============== END
//Beauty & Health (Skincare) ============== START

router.get('/BeautyHealth/Deodorants', function(req, res, next) {
  res.render('Deodorants');
});

//Beauty & Health (Skincare) ============== END
//Beauty & Health  ///============== END

//Jewellery & Accessories  ///============== START
//Jewellery & Accessories (Jewellery) ============== START

router.get('/JewelleryAccessories/JewellerySet', function(req, res, next) {
  res.render('JewellerySet');
});

router.get('/JewelleryAccessories/Earrings', function(req, res, next) {
  res.render('Earrings');
});

router.get('/JewelleryAccessories/Mangalsutras', function(req, res, next) {
  res.render('Mangalsutras');
});

router.get('/JewelleryAccessories/Studs', function(req, res, next) {
  res.render('Studs');
});

router.get('/JewelleryAccessories/Bangles', function(req, res, next) {
  res.render('Bangles');
});

router.get('/JewelleryAccessories/Necklaces', function(req, res, next) {
  res.render('Necklaces');
});

router.get('/JewelleryAccessories/Rings', function(req, res, next) {
  res.render('Rings');
});

router.get('/JewelleryAccessories/Anklets', function(req, res, next) {
  res.render('Anklets');
});

//Jewellery & Accessories (Jewellery) ============== START
//Jewellery & Accessories (Women Accessory) ============== START

router.get('/JewelleryAccessories/Bags', function(req, res, next) {
  res.render('JBags');
});

router.get('/JewelleryAccessories/Watches', function(req, res, next) {
  res.render('JWatches');
});

router.get('/JewelleryAccessories/HairAccessories', function(req, res, next) {
  res.render('HairAccessories');
});

router.get('/JewelleryAccessories/Sunglasses', function(req, res, next) {
  res.render('JSunglasses');
});

router.get('/JewelleryAccessories/Socks', function(req, res, next) {
  res.render('Socks');
});


//Jewellery & Accessories (Women Accessory) ============== END
//Jewellery & Accessories  ///============== END

//Bags & Footwere  ///============== START
//Bags & Footwere (Women Bags) ============== START

router.get('/BagsFootwere/AllWomenBags', function(req, res, next) {
  res.render('AllWomenBags');
});

router.get('/BagsFootwere/Handbags', function(req, res, next) {
  res.render('Handbags');
});

router.get('/BagsFootwere/Clutches', function(req, res, next) {
  res.render('Clutches');
});

router.get('/BagsFootwere/Slingbags', function(req, res, next) {
  res.render('Slingbags');
});

//Bags & Footwere (Women Bags) ============== END
//Bags & Footwere (Men Bags) ============== START

router.get('/BagsFootwere/AllMenBags', function(req, res, next) {
  res.render('AllMenBags');
});

router.get('/BagsFootwere/MenWallets', function(req, res, next) {
  res.render('MenWallets');
});

//Bags & Footwere (Men Bags) ============== END
//Bags & Footwere (Men Footwear) ============== START

router.get('/BagsFootwere/SportsShoes', function(req, res, next) {
  res.render('BSportsShoes');
});

router.get('/BagsFootwere/CasualShoes', function(req, res, next) {
  res.render('BCasualShoes');
});

router.get('/BagsFootwere/FormalShoes', function(req, res, next) {
  res.render('BFormalShoes');
});

router.get('/BagsFootwere/Sandals', function(req, res, next) {
  res.render('BSandals');
});

//Bags & Footwere (Men Footwear) ============== END
//Bags & Footwere (Women Footwear) ============== START

router.get('/BagsFootwere/Flats', function(req, res, next) {
  res.render('Flats');
});

router.get('/BagsFootwere/Bellies', function(req, res, next) {
  res.render('Bellies');
});

router.get('/BagsFootwere/Juttis', function(req, res, next) {
  res.render('Juttis');
});

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
