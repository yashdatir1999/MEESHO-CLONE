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

  const product = await DATABASE.find()

  res.render('index', { product });
});

//Women Ethnic  ///============== START

//Women Ethnic (SAREES) ============== START
router.get('/WomenEthnic/AllSarees', function(req, res, next) {
  res.render('allsarees', { title: 'Express' });
});

router.get('/WomenEthnic/SilkSarees', function(req, res, next) {
  res.render('silksarees', { title: 'Express' });
});

router.get('/WomenEthnic/CottonSilkSarees', function(req, res, next) {
  res.render('CottonSilkSarees', { title: 'Express' });
});

router.get('/WomenEthnic/CottonSarees', function(req, res, next) {
  res.render('CottonSarees', { title: 'Express' });
});

router.get('/WomenEthnic/GeorgetteSarees', function(req, res, next) {
  res.render('GeorgetteSarees', { title: 'Express' });
});

router.get('/WomenEthnic/ChiffonSarees', function(req, res, next) {
  res.render('ChiffonSarees', { title: 'Express' });
});

router.get('/WomenEthnic/SatinSarees', function(req, res, next) {
  res.render('SatinSarees', { title: 'Express' });
});

router.get('/WomenEthnic/EmbroideredSarees', function(req, res, next) {
  res.render('EmbroideredSarees', { title: 'Express' });
});

//Women Ethnic (SAREES) ============== END
//Women Ethnic (KURTIS) ============== START

router.get('/WomenEthnic/AllKurtis', function(req, res, next) {
  res.render('AllKurtis', { title: 'Express' });
});

router.get('/WomenEthnic/AnarkaliKurtis', function(req, res, next) {
  res.render('AnarkaliKurtis', { title: 'Express' });
});

router.get('/WomenEthnic/RayonKurtis', function(req, res, next) {
  res.render('RayonKurtis', { title: 'Express' });
});

router.get('/WomenEthnic/CottonKurtis', function(req, res, next) {
  res.render('CottonKurtis', { title: 'Express' });
});

router.get('/WomenEthnic/EmbroideredKurtis', function(req, res, next) {
  res.render('EmbroideredKurtis', { title: 'Express' });
});

//Women Ethnic (KURTIS) ============== END
//Women Ethnic (KURTA SETS) ============== START

router.get('/WomenEthnic/AllKurtaSets', function(req, res, next) {
  res.render('AllKurtaSets', { title: 'Express' });
});

//Women Ethnic (KURTA SETS) ============== END
//Women Ethnic (SUITS & DRESS MATERIAL) ============== START

router.get('/WomenEthnic/AllSuitsDressMaterial', function(req, res, next) {
  res.render('AllSuitsDressMaterial', { title: 'Express' });
});

router.get('/WomenEthnic/CottonSuits', function(req, res, next) {
  res.render('CottonSuits', { title: 'Express' });
});

router.get('/WomenEthnic/EmbroideredSuits', function(req, res, next) {
  res.render('EmbroideredSuits', { title: 'Express' });
});

router.get('/WomenEthnic/ChanderiSuits', function(req, res, next) {
  res.render('ChanderiSuits', { title: 'Express' });
});

//Women Ethnic (SUITS & DRESS MATERIAL) ============== END

//Women Ethnic (OTHER ETHNIC) ============== START

router.get('/WomenEthnic/Blouses', function(req, res, next) {
  res.render('Blouses', { title: 'Express' });
});

router.get('/WomenEthnic/Dupattas', function(req, res, next) {
  res.render('Dupattas', { title: 'Express' });
});

router.get('/WomenEthnic/Lehanga', function(req, res, next) {
  res.render('Lehanga', { title: 'Express' });
});

router.get('/WomenEthnic/Gown', function(req, res, next) {
  res.render('Gown', { title: 'Express' });
});

router.get('/WomenEthnic/EthnicBottomwear', function(req, res, next) {
  res.render('EthnicBottomwear', { title: 'Express' });
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
