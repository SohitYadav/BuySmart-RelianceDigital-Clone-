// let cardimg=document.getElementById("cardimg");
window.addEventListener("load",()=>{
    showData()
})
let card1=document.getElementById("card");

let pricequant=document.getElementById("pricequant")
let parent1=document.getElementById("parent")
let child1=document.getElementById("child1")
let savedcart=[];
let removecart=[];
let input=document.getElementById("input");
// let coupon=document.getElementById("coupon");

let discprice=document.getElementById("discprice")
let itemprice=document.getElementById("itemprice");
let discountprice=document.getElementById("discountprice");
let totalprice=document.getElementById("totalprice");
// in cardimg append image, +, - , quantity

// carddelivery append element name

//  in carddet append cardddelivery and element details and 2 buttons save forlater remove.

let cart=JSON.parse(localStorage.getItem("cart")) || [];


pricequant.innerText=`${cart.length} items`

// coupon.addEventListener("click",()=>{
//     if(input.value==="Masai10"){
//         totalprice.innerText=    pricecoup - pricecoup*0.1

//     }
// })

let orderdata=[]

function showData(){
    card1.innerHTML=null;
    let sum=0; 
    for(let i=0;i<cart.length;i++){
        sum=sum+cart[i][0].price*cart[i][1]
    }
    
    
    itemprice.innerText="₹"+ sum;
    let disc=-Math.floor(sum*0.4);
    
    discountprice.innerText= disc;

discprice.innerText=  "₹" +(-disc ) 



cart.forEach((el,index)=>{
    console.log(el[0])
    console.log(el[1])
    let card=document.createElement("div");
    
    card.setAttribute("id","cardcard")
    let cardimg=document.createElement("div");
    cardimg.setAttribute("id","cardimg")
    let carddet=document.createElement("div")
    carddet.setAttribute("id","carddet")
let image=document.createElement("img");
image.setAttribute("src",el[0].image);
let decbtn=document.createElement("button");
decbtn.innerText="-";
decbtn.setAttribute("class","plusbtn");
decbtn.addEventListener("click",()=>{
    if(el[1]>1){
        el[1]=Number(el[1])-1
        localStorage.setItem("cart",JSON.stringify(cart));
    }else{
        cart.splice(index,1)
        localStorage.setItem("cart",JSON.stringify(cart))
       
    }
    quanttext.innerText=el[1];
    window.location.reload()
    // showData();
})
let incbtn=document.createElement("button");
incbtn.innerText="+";
incbtn.setAttribute("class","plusbtn");
incbtn.addEventListener("click",()=>{
    el[1]=Number(el[1])+1

quanttext.innerText=el[1];
localStorage.setItem("cart",JSON.stringify(cart));
showData();
})
let quanttext=document.createElement("span")
quanttext.innerText=el[1];
quanttext.setAttribute("id","qtext")

let name=document.createElement("h3");
name.innerText=el[0].name;



let seller=document.createElement("p");
seller.innerText="Seller:SuperComNet";

let price=document.createElement("h3")
price.innerText="₹"+Number(el[0].price)*Number(el[1]);

let savefor=document.createElement("button");
savefor.innerText="Save for Later";
savefor.setAttribute("class","addbtn")

// savefor.addEventListener("click",()=>{

// savedcart.push(el[0]);
// localStorage.setItem("saved",JSON.stringify(savedcart));

// cart.splice(index,1)
// localStorage.setItem("cart",JSON.stringify(cart));
// showData(cart);


// })

let remove=document.createElement("button");
remove.innerText="Remove";
remove.setAttribute("class","addbtn")
remove.addEventListener("click",()=>{
    removecart.push(el[0]);
    cart.splice(index,1)
localStorage.setItem("cart",JSON.stringify(cart));
 window.location.reload(    );
})






let hr=document.createElement("hr");
hr.setAttribute("id","hrline")


totalprice.innerText=`₹${sum+disc+40}` ;
var pricecoup=`₹${sum+disc+40}`


             
       




      
     

 
cardimg.append(image,incbtn,quanttext,decbtn)

carddet.append(name,seller,price,savefor,remove,hr)
card.append(cardimg,carddet)
card1.append(card)
})

  


}
 showData();
 let username = JSON.parse(localStorage.getItem("loggedUser")) || {}

let placeorder1=document.getElementById("placeorder1")
placeorder1.addEventListener("click",()=>{

    // let order=localStorage.setItem("order",JSON.stringify(orderdata))
    if (username.name !== undefined && cart.length!=0) {
        window.location.assign("order.html")
    }else{
        if(username.name == undefined){
        alert("Please login")

        window.location.assign("login.html")}
        else if(cart.length==0){
            setTimeout((function(){
                alert("Your cart is empty")
            
               }),2000)
        }

    }
   
    // console.log("y")
})


// let userdeliver=document.getElementById("userdeliver")

let userdata=JSON.parse(localStorage.getItem("loggedUser")) || {};





// logout button and user code

if (username.name !== undefined) {
    document.querySelector("#logintext").textContent = `Hi, ${username.name}`
  
// special cart code
if(cart.length!=0){
document.querySelector("#deliver").textContent=`Deliver to : ${userdata.name}`
document.querySelector("#adress").textContent=`Email: ${userdata.email}`
}
// 
    let logout=document.createElement("h3")
    logout.textContent="Logout" 

   logout.setAttribute("class","logout") 
   
    document.getElementById("navchild").append(logout)

    logout.addEventListener("click",function(){
        localStorage.removeItem("loggedUser")

        localStorage.removeItem("cart")
        window.location.reload()
        window.location.assign("index.html")
    })
}
// logout button and user code end


// if(cart.length==0){
    
//    setTimeout((function(){
//     alert("Your cart is empty")

//    }),2000)
// }