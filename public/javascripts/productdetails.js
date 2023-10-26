const productimg1 = document.querySelector(".product-img1")
const productimg2 = document.querySelector(".product-img2")
const productimg3 = document.querySelector(".product-img3")
const productimg4 = document.querySelector(".product-img4")

const bigimg1 = document.querySelector(".bigimg1")
const bigimg2 = document.querySelector(".bigimg2")
const bigimg3 = document.querySelector(".bigimg3")
const bigimg4 = document.querySelector(".bigimg4")


productimg1.addEventListener("click",function(){
    bigimg1.style.display="initial"    
    bigimg2.style.display="none"    
    bigimg3.style.display="none"    
    bigimg4.style.display="none"  

})

productimg2.addEventListener("click",function(){
    bigimg1.style.display="none"    
    bigimg2.style.display="initial"    
    bigimg3.style.display="none"    
    bigimg4.style.display="none"    
})

productimg3.addEventListener("click",function(){
    bigimg1.style.display="none"    
    bigimg2.style.display="none"    
    bigimg3.style.display="initial"    
    bigimg4.style.display="none"    
})

productimg4.addEventListener("click",function(){
    bigimg1.style.display="none"    
    bigimg2.style.display="none"    
    bigimg3.style.display="none"    
    bigimg4.style.display="initial"    
})