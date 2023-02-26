// let cardimg=document.getElementById("cardimg");

let card1=document.getElementById("cards");

let pricequant=document.getElementById("pricequant")
let parent1=document.getElementById("parent")
let child1=document.getElementById("child1")

let input=document.getElementById("input");


let discprice=document.getElementById("discprice")
let itemprice=document.getElementById("itemprice");
let discountprice=document.getElementById("discountprice");
let totalprice=document.getElementById("totalprice");
// in cardimg append image, +, - , quantity

// carddelivery append element name

//  in carddet append cardddelivery and element details and 2 buttons save forlater remove.




// 



function cartData(){
          fetch("https://charming-fedora-goat.cyclic.app/cart")
          .then(res=>res.json())
          .then((res)=>{
            showData(res.data);
            console.log(res);
          })
          .catch(err=>console.log(err))

}
cartData()
function showData(cart){
    card1.innerHTML=null;
    

cart.forEach((el,index)=>{
    
    let card=document.createElement("div");
    
    card.setAttribute("id","cardcard")
    let cardimg=document.createElement("div");
    cardimg.setAttribute("id","cardimg")
    let carddet=document.createElement("div")
    carddet.setAttribute("id","carddet")
let image=document.createElement("img");
image.setAttribute("src",el.img);
let decbtn=document.createElement("button");
decbtn.innerText="-";
decbtn.setAttribute("class","plusbtn");
decbtn.addEventListener("click",()=>{
    if(el.qty>1){

        el.qty=Number(el.qty)-1
    }

quanttext.innerText=el.qty

    
})
let incbtn=document.createElement("button");
incbtn.innerText="+";
incbtn.setAttribute("class","plusbtn");
incbtn.addEventListener("click",()=>{
    el.qty=Number(el.qty)+1

quanttext.innerText=el.qty
let temp=el.qty
// console.log(temp);
localStorage.setItem("tempquant",temp);


})
let quanttext=document.createElement("span")
quanttext.innerText=el.qty;
quanttext.setAttribute("id","qtext")

let name=document.createElement("h3");
name.innerText=el.name;



let brand=document.createElement("p");
brand.innerText=el.brand;

let price=document.createElement("h3")
price.innerText="₹"+Number(el.price)*Number(el.qty);

let savefor=document.createElement("button");
savefor.innerText="Save for Later";
savefor.setAttribute("class","addbtn")



let remove=document.createElement("button");
remove.innerText="Remove";
remove.setAttribute("class","addbtn")
remove.addEventListener("click",()=>{
    
fetch("https://charming-fedora-goat.cyclic.app/cart/delete/:id")
.then(res=>res.json())
.then(res=>console.log(res))
.catch(err=>console.log(err))


})






let hr=document.createElement("hr");
hr.setAttribute("id","hrline")
// let temp=localStorage.getItem("tempquant")
let sum=0; 
    for(let i=0;i<cart.length;i++){
        sum=sum+cart[i].price*cart[i].qty
    }
    

    
    itemprice.innerText="₹"+ sum;
    let disc=-Math.floor(sum*0.4);
    
    discountprice.innerText= disc;

discprice.innerText=  "₹" +(-disc ) 

pricequant.innerText=`${cart.length} items`

totalprice.innerText=`₹${sum+disc+40}` ;
let totalpricee=`${sum+disc+40}`
localStorage.setItem("totalprice", (totalpricee))

 
cardimg.append(image,incbtn,quanttext,decbtn)

carddet.append(name,brand,price,savefor,remove,hr)
card.append(cardimg,carddet)
card1.append(card)
})

  


}
 


let placeorder1=document.getElementById("placeorder1")

placeorder1.addEventListener("click",()=>{
    let token=localStorage.getItem("token");
    if(!token){
        alert("Please Login")
    }else{
       window.location.assign("order.html") 
    }
    
})


// let userdeliver=document.getElementById("userdeliver")






