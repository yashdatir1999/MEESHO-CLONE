function populate(catagory , subcatagory){
    var catagory = document.getElementById(catagory)
    var subcatagory = document.getElementById(subcatagory)

    subcatagory.innerHTML="--PRODUCT SUB CATAGORY--"
    if(catagory.value === "womenethnic"){
        var optionarr = ['allSarees|ALL SAREES' , 
        'silkSarees|SILK SAREES' ,
        'cottonsilksarees|COTTON SILK SAREES' ,
        'cottonsarees|COTTON SAREES' ,
        'georgettesarees|GEORGETTE SAREES' ,
        'chiffonsarees|CHIFFON SAREES',
        'satinsarees|SATIN SAREES',
        'embroideredsarees|EMBROIDERED SAREES',
        'allkurtis|ALL KURTIS',
        'anarkalikurtis|ANARKALI KURTIS',
        'rayonkurtis|RAYON KURTIS',
        'cottonkurtis|COTTON KURTIS',
        'embroideredkurtis|EMBROIDERED KURTIS',
        'allkurtasets|ALL KURTA SETS',
        'allsuitsdressmaterial|ALL SUITS & DRESS MATERIAL',
        'cottonsuits|COTTON SUITS',
        'embroideredsuits|EMBROIDERED SUITS',
        'chanderisuits|CHANDERI SUITS',
        'blouses|BLOUSES',
        'dupattas|DUPATTAS',
        'lehanga|LEHANGA',
        'gown|GOWN',
        'ethnicbottomwear|ETHNIC BOTTOMWEAR']
    }else if(catagory.value === "womenwestern"){
        var optionarr = [
            'tops|TOPS',
            'dresses|DRESSES',
            'sweaters|SWEATERS',
            'jumpsuits|JUMPSUITS',
            'jeans|JEANS',
            'jeggings|JEGGINGS',
            'palazzos|PALAZZOS',
            'shorts|SHORTS',
            'skirts|SKIRTS',
            'innerwear|INNERWEAR',
            'bra|BRA',
            'briefs|BRIEFS',
            'nightsuits|NIGHTSUITS',
            'babydolls|BABYDOLLS'
        ]
    }else if(catagory.value === "men"){
        var optionarr = [
            'alltopwear|ALL TOP WEAR',
            'tshirts|T-SHIRTS',
            'shirts|SHIRTS',
            'trackpants|TRACK PANTS',
            'jeans|JEANS',
            'trousers|TROUSERS',
            'allmenaccessories|ALL MEN ACCESSORIES',
            'watches|WATCHES',
            'belts|BELTS',
            'wallets|WALLETS',
            'jewellery|JEWELLERY',
            'sunglasses|SUNGLASSES',
            'bags|BAGS',
            'casualshoes|CASUAL SHOES',
            'sportsshoes|SPORTS SHOES',
            'sandals|SANDALS',
            'formalshoes|FORMAL SHOES',
            'menkurtas|MEN KURTAS',
            'ethnicjackets|ETHNIC JACKETS',
            'allinnersleepwear|ALL INNER & SLEEP WEAR',
            'vests|VESTS'
        ]
    }else if(catagory.value === "kids"){
        var optionarr = [
            'dresses|DRESSES',
            'rompers|ROMPERS',
            'softtoys|SOFT TOYS',
            'footwear|FOOTWEAR',
            'stationery|STATIONERY',
            'watches|WATCHES',
            'bagsbackpacks|BAGS & BACKPACKS',
            'allbabycare|ALL BABY CARE'
        ]
    }else if(catagory.value === "homekitchen"){
        var optionarr = [
            'bedsheets|BEDSHEETS',
            'doormats|DOORMATS',
            'curtainssheers|CURTAINS & SHEERS',
            'cushionscushioncovers|CUSHIONS & CUSHION COVERS',
            'mattressprotectors|MATTRESS PROTECTORS',
            'allhomedecor|ALL HOME DECOR',
            'stickers|STICKERS',
            'clocks|CLOCKS',
            'showpieces|SHOWPIECES',
            'kitchenstorage|KITCHEN STORAGE',
            'cookwarebakeware|COOKWARE & BAKEWARE'
        ]
    }else if(catagory.value === "beautyhealth"){
        var optionarr = [
            'face|FACE',
            'eyes|EYES',
            'lips|LIPS',
            'nails|NAILS',
            'sanitizers|SANITIZERS',
            'oralcare|ORAL CARE',
            'femininehygiene|FEMININE HYGIENE',
            'deodorants|DEODORANTS'
        ]
    }else if(catagory.value === "jewelleryaccessories"){
        var optionarr = [
            'jewelleryset|JEWELLERY SET',
            'earrings|EARRINGS',
            'mangalsutras|MANGALSUTRAS',
            'studs|STUDS',
            'bangles|BANGLES',
            'necklaces|NECKLACES',
            'rings|RINGS',
            'anklets|ANKLETS',
            'bags|BAGS',
            'watches|WATCHES',
            'hairaccessories|HAIR ACCESSORIES',
            'sunglasses|SUNGLASSES',
            'socks|SOCKS'
        ]
    }else if(catagory.value === "bagsfootwere"){
        var optionarr = [
            'allwomenbags|ALL WOMEN BAGS',
            'handbags|HANDBAGS',
            'clutches|CLUTCHES',
            'slingbags|SLINGBAGS',
            'allmenbags|ALL MEN BAGS',
            'menwallets|MEN WALLETS',
            'sportsshoes|SPORTS SHOES',
            'casualshoes|CASUAL SHOES',
            'formalshoes|FORMAL SHOES',
            'sandals|SANDALS',
            'flats|FLATS',
            'bellies|BELLIES',
            'juttis|JUTTIS'
        ]
    }else if(catagory.value === "electronics"){
        var optionarr = [
            'allmobileaccessories|ALL MOBILE & ACCESSORIES',
            'smartwatches|SMARTWATCHES',
            'mobileholders|MOBILE HOLDERS',
            'mobilecasesandcovers|MOBILE CASES AND COVERS',
            'allappliances|ALL APPLIANCES',
            'grooming|GROOMING',
            'homeappliances|HOME APPLIANCES'
        ]
    }

    for(var option in optionarr){
        var pair = optionarr[option].split("|")
        var newoption = document.createElement("option")
        newoption.value = pair[0]
        newoption.innerHTML = pair[1]
        subcatagory.options.add(newoption)
    }
}