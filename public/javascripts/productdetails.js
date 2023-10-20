const productimg1 = document.querySelector(".product-img1")
const productimg2 = document.querySelector(".product-img2")
const productimg3 = document.querySelector(".product-img3")
const productimg4 = document.querySelector(".product-img4")

const bigimg = document.querySelector(".productdetails-left-bigimages")

productimg1.addEventListener("click",function(){

    bigimg.setAttribute("src" , "<%= product.imglink2%>")

})