var app = document.querySelector(".app")
var Dapp = document.querySelector(".DownloadApp")

app.addEventListener("mouseenter",function(){
    Dapp.style.display = "initial"
        Dapp.addEventListener("mouseenter",function(){
            Dapp.style.display = "initial"
    })
    Dapp.addEventListener("mouseleave",function(){
        Dapp.style.display = "none"

        app.addEventListener("mouseleave",function(){
        Dapp.style.display = "none"
        })
    })

})

var profile = document.querySelector(".profile")
var Plogin = document.querySelector(".profile-login")

profile.addEventListener("mouseenter",function(){
    Plogin.style.display = "initial"
    Plogin.addEventListener("mouseenter",function(){
        Plogin.style.display = "initial"
    })
    Plogin.addEventListener("mouseleave",function(){
        Plogin.style.display = "none"

        profile.addEventListener("mouseleave",function(){
            Plogin.style.display = "none"
        })
    })

})


var WomenEthnic = document.querySelector(".Women-Ethnic")
var WomenEthnictitle = document.querySelector(".Women-Ethnic >h3")
var WomenEthnicdetails = document.querySelector(".Women-Ethnic-details")


WomenEthnic.addEventListener("mouseenter", function () {
    WomenEthnicdetails.style.display = "initial"
    WomenEthnicdetails.style.display = "flex"
    WomenEthnic.style.borderBottom = `0.25vmax solid  rgb(${90}, ${16}, ${78})`;
    WomenEthnictitle.style.color = `rgb(${159},${32},${137})`
    
    WomenWesterndetails.style.display = "none"
    WomenWestern.style.borderBottom = "0.5vmax solid transparent";
    Mendetails.style.display = "none"
    Men.style.borderBottom = "0.5vmax solid transparent";
    Kidsdetails.style.display = "none"
    Kids.style.borderBottom = "0.5vmax solid transparent";
    HomeKitchendetails.style.display = "none"
    HomeKitchen.style.borderBottom = "0.5vmax solid transparent";
    BeautyHealthdetails.style.display = "none"
    BeautyHealth.style.borderBottom = "0.5vmax solid transparent";
    JewelleryAccessoriesdetails.style.display = "none"
    JewelleryAccessories.style.borderBottom = "0.5vmax solid transparent";
    BagsFootweredetails.style.display = "none"
    BagsFootwere.style.borderBottom = "0.5vmax solid transparent";
    Electronicsdetails.style.display = "none"
    Electronics.style.borderBottom = "0.5vmax solid transparent";
    Electronicstitle.style.color = `black`
    BagsFootweretitle.style.color = `black`
    JewelleryAccessoriestitle.style.color = `black`
    BeautyHealthtitle.style.color = `black`
    HomeKitchentitle.style.color = `black`
    Kidstitle.style.color = `black`
    Mentitle.style.color = `black`
    WomenWesterntitle.style.color = `black`



    WomenEthnicdetails.addEventListener("mouseenter", function () {
        WomenEthnicdetails.style.display = "initial"
        WomenEthnicdetails.style.display = "flex"
    })
    WomenEthnicdetails.addEventListener("mouseleave", function () {
        WomenEthnicdetails.style.display = "none"
        WomenEthnic.style.borderBottom = "0.5vmax solid transparent";
        WomenEthnictitle.style.color = `black`
    })


})

/////////////////////////////////////////////////////////

var WomenWestern = document.querySelector(".Women-Western")
var WomenWesterntitle = document.querySelector(".Women-Western >h3")
var WomenWesterndetails = document.querySelector(".Women-Western-details")


WomenWestern.addEventListener("mouseenter", function () {
    WomenWesterndetails.style.display = "initial"
    WomenWesterndetails.style.display = "flex"
    WomenWestern.style.borderBottom = `0.25vmax solid  rgb(${90}, ${16}, ${78})`;
    WomenWesterntitle.style.color = `rgb(${159},${32},${137})`
    
    WomenEthnicdetails.style.display = "none"
    WomenEthnic.style.borderBottom = "0.5vmax solid transparent";
    Mendetails.style.display = "none"
    Men.style.borderBottom = "0.5vmax solid transparent";
    Kidsdetails.style.display = "none"
    Kids.style.borderBottom = "0.5vmax solid transparent";
    HomeKitchendetails.style.display = "none"
    HomeKitchen.style.borderBottom = "0.5vmax solid transparent";
    BeautyHealthdetails.style.display = "none"
    BeautyHealth.style.borderBottom = "0.5vmax solid transparent";
    JewelleryAccessoriesdetails.style.display = "none"
    JewelleryAccessories.style.borderBottom = "0.5vmax solid transparent";
    BagsFootweredetails.style.display = "none"
    BagsFootwere.style.borderBottom = "0.5vmax solid transparent";
    Electronicsdetails.style.display = "none"
    Electronics.style.borderBottom = "0.5vmax solid transparent";
    Electronicstitle.style.color = `black`
    BagsFootweretitle.style.color = `black`
    JewelleryAccessoriestitle.style.color = `black`
    BeautyHealthtitle.style.color = `black`
    HomeKitchentitle.style.color = `black`
    Kidstitle.style.color = `black`
    Mentitle.style.color = `black`
    WomenEthnictitle.style.color = `black`


    WomenWesterndetails.addEventListener("mouseenter", function () {
        WomenWesterndetails.style.display = "initial"
        WomenWesterndetails.style.display = "flex"
    })
    WomenWesterndetails.addEventListener("mouseleave", function () {
        WomenWesterndetails.style.display = "none"
        WomenWestern.style.borderBottom = "0.5vmax solid transparent";
        WomenWesterntitle.style.color = `black`
    })

})

/////////////////////////////////////////////////////////

var Men = document.querySelector(".Men")
var Mentitle = document.querySelector(".Men >h3")
var Mendetails = document.querySelector(".Men-details")


Men.addEventListener("mouseenter", function () {
    Mendetails.style.display = "initial"
    Mendetails.style.display = "flex"
    Men.style.borderBottom = `0.25vmax solid  rgb(${90}, ${16}, ${78})`;
    Mentitle.style.color = `rgb(${159},${32},${137})`

    WomenEthnicdetails.style.display = "none"
    WomenEthnic.style.borderBottom = "0.5vmax solid transparent";
    WomenWesterndetails.style.display = "none"
    WomenWestern.style.borderBottom = "0.5vmax solid transparent";
    Kidsdetails.style.display = "none"
    Kids.style.borderBottom = "0.5vmax solid transparent";
    HomeKitchendetails.style.display = "none"
    HomeKitchen.style.borderBottom = "0.5vmax solid transparent";
    BeautyHealthdetails.style.display = "none"
    BeautyHealth.style.borderBottom = "0.5vmax solid transparent";
    JewelleryAccessoriesdetails.style.display = "none"
    JewelleryAccessories.style.borderBottom = "0.5vmax solid transparent";
    BagsFootweredetails.style.display = "none"
    BagsFootwere.style.borderBottom = "0.5vmax solid transparent";
    Electronicsdetails.style.display = "none"
    Electronics.style.borderBottom = "0.5vmax solid transparent";
    Electronicstitle.style.color = `black`
    BagsFootweretitle.style.color = `black`
    JewelleryAccessoriestitle.style.color = `black`
    BeautyHealthtitle.style.color = `black`
    HomeKitchentitle.style.color = `black`
    Kidstitle.style.color = `black`
    WomenWesterntitle.style.color = `black`
    WomenEthnictitle.style.color = `black`



    Mendetails.addEventListener("mouseenter", function () {
        Mendetails.style.display = "initial"
        Mendetails.style.display = "flex"
    })
    Mendetails.addEventListener("mouseleave", function () {
        Mendetails.style.display = "none"
        Men.style.borderBottom = "0.5vmax solid transparent";
        Mentitle.style.color = `black`
    })

})


/////////////////////////////////////////////////////////

var Kids = document.querySelector(".Kids")
var Kidstitle = document.querySelector(".Kids >h3")
var Kidsdetails = document.querySelector(".Kids-details")


Kids.addEventListener("mouseenter", function () {
    Kidsdetails.style.display = "initial"
    Kidsdetails.style.display = "flex"
    Kids.style.borderBottom = `0.25vmax solid  rgb(${90}, ${16}, ${78})`;
    Kidstitle.style.color = `rgb(${159},${32},${137})`

    WomenEthnicdetails.style.display = "none"
    WomenEthnic.style.borderBottom = "0.5vmax solid transparent";
    WomenWesterndetails.style.display = "none"
    WomenWestern.style.borderBottom = "0.5vmax solid transparent";
    Mendetails.style.display = "none"
    Men.style.borderBottom = "0.5vmax solid transparent";
    HomeKitchendetails.style.display = "none"
    HomeKitchen.style.borderBottom = "0.5vmax solid transparent";
    BeautyHealthdetails.style.display = "none"
    BeautyHealth.style.borderBottom = "0.5vmax solid transparent";
    JewelleryAccessoriesdetails.style.display = "none"
    JewelleryAccessories.style.borderBottom = "0.5vmax solid transparent";
    BagsFootweredetails.style.display = "none"
    BagsFootwere.style.borderBottom = "0.5vmax solid transparent";
    Electronicsdetails.style.display = "none"
    Electronics.style.borderBottom = "0.5vmax solid transparent";
    Electronicstitle.style.color = `black`
    BagsFootweretitle.style.color = `black`
    JewelleryAccessoriestitle.style.color = `black`
    BeautyHealthtitle.style.color = `black`
    HomeKitchentitle.style.color = `black`
    Mentitle.style.color = `black`
    WomenWesterntitle.style.color = `black`
    WomenEthnictitle.style.color = `black`



    Kidsdetails.addEventListener("mouseenter", function () {
        Kidsdetails.style.display = "initial"
        Kidsdetails.style.display = "flex"
    })
    Kidsdetails.addEventListener("mouseleave", function () {
        Kidsdetails.style.display = "none"
        Kids.style.borderBottom = "0.5vmax solid transparent";
        Kidstitle.style.color = `black`
    })

})


/////////////////////////////////////////////////////////

var HomeKitchen = document.querySelector(".Home-Kitchen")
var HomeKitchentitle = document.querySelector(".Home-Kitchen >h3")
var HomeKitchendetails = document.querySelector(".Home-Kitchen-details")


HomeKitchen.addEventListener("mouseenter", function () {
    HomeKitchendetails.style.display = "initial"
    HomeKitchendetails.style.display = "flex"
    HomeKitchen.style.borderBottom = `0.25vmax solid  rgb(${90}, ${16}, ${78})`;
    HomeKitchentitle.style.color = `rgb(${159},${32},${137})`

    WomenEthnicdetails.style.display = "none"
    WomenEthnic.style.borderBottom = "0.5vmax solid transparent";
    WomenWesterndetails.style.display = "none"
    WomenWestern.style.borderBottom = "0.5vmax solid transparent";
    Mendetails.style.display = "none"
    Men.style.borderBottom = "0.5vmax solid transparent";
    Kidsdetails.style.display = "none"
    Kids.style.borderBottom = "0.5vmax solid transparent";
    BeautyHealthdetails.style.display = "none"
    BeautyHealth.style.borderBottom = "0.5vmax solid transparent";
    JewelleryAccessoriesdetails.style.display = "none"
    JewelleryAccessories.style.borderBottom = "0.5vmax solid transparent";
    BagsFootweredetails.style.display = "none"
    BagsFootwere.style.borderBottom = "0.5vmax solid transparent";
    Electronicsdetails.style.display = "none"
    Electronics.style.borderBottom = "0.5vmax solid transparent";
    Electronicstitle.style.color = `black`
    BagsFootweretitle.style.color = `black`
    JewelleryAccessoriestitle.style.color = `black`
    BeautyHealthtitle.style.color = `black`
    Kidstitle.style.color = `black`
    Mentitle.style.color = `black`
    WomenWesterntitle.style.color = `black`
    WomenEthnictitle.style.color = `black`


    HomeKitchendetails.addEventListener("mouseenter", function () {
        HomeKitchendetails.style.display = "initial"
        HomeKitchendetails.style.display = "flex"
    })
    HomeKitchendetails.addEventListener("mouseleave", function () {
        HomeKitchendetails.style.display = "none"
        HomeKitchen.style.borderBottom = "0.5vmax solid transparent";
        HomeKitchentitle.style.color = `black`
    })

})

/////////////////////////////////////////////////////////

var BeautyHealth = document.querySelector(".Beauty-Health")
var BeautyHealthtitle = document.querySelector(".Beauty-Health >h3")
var BeautyHealthdetails = document.querySelector(".Beauty-Health-details")


BeautyHealth.addEventListener("mouseenter", function () {
    BeautyHealthdetails.style.display = "initial"
    BeautyHealthdetails.style.display = "flex"
    BeautyHealth.style.borderBottom = `0.25vmax solid  rgb(${90}, ${16}, ${78})`;
    BeautyHealthtitle.style.color = `rgb(${159},${32},${137})`

    WomenEthnicdetails.style.display = "none"
    WomenEthnic.style.borderBottom = "0.5vmax solid transparent";
    WomenWesterndetails.style.display = "none"
    WomenWestern.style.borderBottom = "0.5vmax solid transparent";
    Mendetails.style.display = "none"
    Men.style.borderBottom = "0.5vmax solid transparent";
    Kidsdetails.style.display = "none"
    Kids.style.borderBottom = "0.5vmax solid transparent";
    HomeKitchendetails.style.display = "none"
    HomeKitchen.style.borderBottom = "0.5vmax solid transparent";
    JewelleryAccessoriesdetails.style.display = "none"
    JewelleryAccessories.style.borderBottom = "0.5vmax solid transparent";
    BagsFootweredetails.style.display = "none"
    BagsFootwere.style.borderBottom = "0.5vmax solid transparent";
    Electronicsdetails.style.display = "none"
    Electronics.style.borderBottom = "0.5vmax solid transparent";
    Electronicstitle.style.color = `black`
    BagsFootweretitle.style.color = `black`
    JewelleryAccessoriestitle.style.color = `black`
    HomeKitchentitle.style.color = `black`
    Kidstitle.style.color = `black`
    Mentitle.style.color = `black`
    WomenWesterntitle.style.color = `black`
    WomenEthnictitle.style.color = `black`


    BeautyHealthdetails.addEventListener("mouseenter", function () {
        BeautyHealthdetails.style.display = "initial"
        BeautyHealthdetails.style.display = "flex"
    })
    BeautyHealthdetails.addEventListener("mouseleave", function () {
        BeautyHealthdetails.style.display = "none"
        BeautyHealth.style.borderBottom = "0.5vmax solid transparent";
        BeautyHealthtitle.style.color = `black`
    })

})


/////////////////////////////////////////////////////////

var JewelleryAccessories = document.querySelector(".Jewellery-Accessories")
var JewelleryAccessoriestitle = document.querySelector(".Jewellery-Accessories >h3")
var JewelleryAccessoriesdetails = document.querySelector(".Jewellery-Accessories-details")


JewelleryAccessories.addEventListener("mouseenter", function() {
    JewelleryAccessoriesdetails.style.display = "initial"
    JewelleryAccessoriesdetails.style.display = "flex"
    JewelleryAccessories.style.borderBottom = `0.25vmax solid  rgb(${90}, ${16}, ${78})`;
    JewelleryAccessoriestitle.style.color = `rgb(${159},${32},${137})`

    WomenEthnicdetails.style.display = "none"
    WomenEthnic.style.borderBottom = "0.5vmax solid transparent";
    WomenWesterndetails.style.display = "none"
    WomenWestern.style.borderBottom = "0.5vmax solid transparent";
    Mendetails.style.display = "none"
    Men.style.borderBottom = "0.5vmax solid transparent";
    Kidsdetails.style.display = "none"
    Kids.style.borderBottom = "0.5vmax solid transparent";
    HomeKitchendetails.style.display = "none"
    HomeKitchen.style.borderBottom = "0.5vmax solid transparent";
    BeautyHealthdetails.style.display = "none"
    BeautyHealth.style.borderBottom = "0.5vmax solid transparent";
    BagsFootweredetails.style.display = "none"
    BagsFootwere.style.borderBottom = "0.5vmax solid transparent";
    Electronicsdetails.style.display = "none"
    Electronics.style.borderBottom = "0.5vmax solid transparent";
    Electronicstitle.style.color = `black`
    BagsFootweretitle.style.color = `black`
    BeautyHealthtitle.style.color = `black`
    HomeKitchentitle.style.color = `black`
    Kidstitle.style.color = `black`
    Mentitle.style.color = `black`
    WomenWesterntitle.style.color = `black`
    WomenEthnictitle.style.color = `black`


    JewelleryAccessoriesdetails.addEventListener("mouseenter", function () {
        JewelleryAccessoriesdetails.style.display = "initial"
        JewelleryAccessoriesdetails.style.display = "flex"
    })
    JewelleryAccessoriesdetails.addEventListener("mouseleave", function () {
        JewelleryAccessoriesdetails.style.display = "none"
        JewelleryAccessories.style.borderBottom = "0.5vmax solid transparent";
        JewelleryAccessoriestitle.style.color = `black`
    })

})


/////////////////////////////////////////////////////////

var BagsFootwere = document.querySelector(".Bags-Footwere")
var BagsFootweretitle = document.querySelector(".Bags-Footwere >h3")
var BagsFootweredetails = document.querySelector(".Bags-Footwere-details")


BagsFootwere.addEventListener("mouseenter", function () {
    BagsFootweredetails.style.display = "initial"
    BagsFootweredetails.style.display = "flex"
    BagsFootwere.style.borderBottom = `0.25vmax solid  rgb(${90}, ${16}, ${78})`;
    BagsFootweretitle.style.color = `rgb(${159},${32},${137})`

    WomenEthnicdetails.style.display = "none"
    WomenEthnic.style.borderBottom = "0.5vmax solid transparent";
    WomenWesterndetails.style.display = "none"
    WomenWestern.style.borderBottom = "0.5vmax solid transparent";
    Mendetails.style.display = "none"
    Men.style.borderBottom = "0.5vmax solid transparent";
    Kidsdetails.style.display = "none"
    Kids.style.borderBottom = "0.5vmax solid transparent";
    HomeKitchendetails.style.display = "none"
    HomeKitchen.style.borderBottom = "0.5vmax solid transparent";
    BeautyHealthdetails.style.display = "none"
    BeautyHealth.style.borderBottom = "0.5vmax solid transparent";
    JewelleryAccessoriesdetails.style.display = "none"
    JewelleryAccessories.style.borderBottom = "0.5vmax solid transparent";
    Electronicsdetails.style.display = "none"
    Electronics.style.borderBottom = "0.5vmax solid transparent";
    Electronicstitle.style.color = `black`
    JewelleryAccessoriestitle.style.color = `black`
    BeautyHealthtitle.style.color = `black`
    HomeKitchentitle.style.color = `black`
    Kidstitle.style.color = `black`
    Mentitle.style.color = `black`
    WomenWesterntitle.style.color = `black`
    WomenEthnictitle.style.color = `black`


    BagsFootweredetails.addEventListener("mouseenter", function () {
        BagsFootweredetails.style.display = "initial"
        BagsFootweredetails.style.display = "flex"
    })
    BagsFootweredetails.addEventListener("mouseleave", function () {
        BagsFootweredetails.style.display = "none"
        BagsFootwere.style.borderBottom = "0.5vmax solid transparent";
        BagsFootweretitle.style.color = `black`
    })

})


/////////////////////////////////////////////////////////

var Electronics = document.querySelector(".Electronics")
var Electronicstitle = document.querySelector(".Electronics >h3")
var Electronicsdetails = document.querySelector(".Electronics-details")


Electronics.addEventListener("mouseenter", function () {
    Electronicsdetails.style.display = "initial"
    Electronicsdetails.style.display = "flex"
    Electronics.style.borderBottom = `0.25vmax solid  rgb(${90}, ${16}, ${78})`;
    Electronicstitle.style.color = `rgb(${159},${32},${137})`

    WomenEthnicdetails.style.display = "none"
    WomenEthnic.style.borderBottom = "0.5vmax solid transparent";
    WomenWesterndetails.style.display = "none"
    WomenWestern.style.borderBottom = "0.5vmax solid transparent";
    Mendetails.style.display = "none"
    Men.style.borderBottom = "0.5vmax solid transparent";
    Kidsdetails.style.display = "none"
    Kids.style.borderBottom = "0.5vmax solid transparent";
    HomeKitchendetails.style.display = "none"
    HomeKitchen.style.borderBottom = "0.5vmax solid transparent";
    BeautyHealthdetails.style.display = "none"
    BeautyHealth.style.borderBottom = "0.5vmax solid transparent";
    JewelleryAccessoriesdetails.style.display = "none"
    JewelleryAccessories.style.borderBottom = "0.5vmax solid transparent";
    BagsFootweredetails.style.display = "none"
    BagsFootwere.style.borderBottom = "0.5vmax solid transparent";
    BagsFootweretitle.style.color = `black`
    BagsFootweretitle.style.color = `black`
    JewelleryAccessoriestitle.style.color = `black`
    BeautyHealthtitle.style.color = `black`
    HomeKitchentitle.style.color = `black`
    Kidstitle.style.color = `black`
    Mentitle.style.color = `black`
    WomenWesterntitle.style.color = `black`
    WomenEthnictitle.style.color = `black`


    Electronicsdetails.addEventListener("mouseenter", function () {
        Electronicsdetails.style.display = "initial"
        Electronicsdetails.style.display = "flex"
    })
    Electronicsdetails.addEventListener("mouseleave", function () {
        Electronicsdetails.style.display = "none"
        Electronics.style.borderBottom = "0.5vmax solid transparent";
        Electronicstitle.style.color = `black`
    })

})