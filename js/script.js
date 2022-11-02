let btnlogin=document.querySelector(".headercontainer .login2 h3");
let loginpage=document.querySelector('.login');
let btnclose=document.querySelector('.login .closeicon i');
///
let header=document.querySelector('.headercontainer');
///////
let headingtext=document.querySelector('.home .container h2');
let homeimage=document.querySelector('.home .container .imagecontainer img');
//
let slideinfo=document.querySelectorAll(".slidecontainer .info");
let iconinfo=document.querySelectorAll(".slidecontainer .iconinfo");
// 
let imagecontainer=document.querySelector(".cars .carscontainer");
// 
let shopcontainer=document.querySelector('.shop .shopcontainer');
console.log(shopcontainer)
// login event for login page:
btnlogin.addEventListener('click',()=>{
    loginpage.style.top='0vh';
    header.classList.remove('scrollheader');
});
btnclose.addEventListener('click',()=>{
    loginpage.style.top='-100vh';  
});

// scroll event for header:
 window .addEventListener('load',()=>{
    header.classList.remove('scrollheader');  
 });
 window.addEventListener('scroll',()=>{
     header.classList.add('scrollheader');
    loginpage.style.top='-100vh';
 });
 // mouseover event for slide info:
   slideinfo.forEach((element)=>{
       element.addEventListener("mouseover",()=>{
           element.style.backgroundColor="rgb(77, 57, 158)";
           element.children[0].style.backgroundColor='rgb(234, 186, 90)';
           element.children[1].children[0].style.color='white';
           element.children[1].children[1].style.color='white';
       });
   });
   slideinfo.forEach((element)=>{
    element.addEventListener("mouseleave",()=>{
        element.style.backgroundColor="white";
        element.children[0].style.backgroundColor='rgb(213, 218, 221)';
        element.children[1].children[0].style.color='rgb(234, 186, 90)';
        element.children[1].children[1].style.color='rgb(2, 7, 53)';
    });
});  
//process on cars slide:
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
//   slider cars shop
const shopcar=[
  {
    imgsrc:"image/car-1.png",
    carname:"BMW",
    price:"2000$"
  },
  {
    imgsrc:"image/car-2.png",
    carname:"BMW",
    price:"2000$"
  },
  {
    imgsrc:"image/car-3.png",
    carname:"BMW",
    price:"2000$"
  },
  {
    imgsrc:"image/car-4.png",
    carname:"BMW",
    price:"2000$"
  },
  {
    imgsrc:"image/car-5.png",
    carname:"BMW",
    price:"2000$"
  },
  {
    imgsrc:"image/car-6.png",
    carname:"BMW",
    price:"2000$"
  }
];
(function putinhtml(){
  shopcar.forEach((car)=>{
    let store=`
    <div class="car">
    <img src="${car.imgsrc}" >
    <h3>name: <span>${car.carname}</span></h3>
    <h5>price: <span>${car.price}</span></h5>
    <div class="btn">
        <button class="card">add to card</button>
        <button class="buy">buy</button>
    </div>
    </div>
    `;
    shopcontainer.innerHTML+=store;
    console.log(document.querySelector(".card"))
  })
})();

// the slider reviews:
let  reviewcontainer=document.querySelector('.review .reviewcontainer');
console.log(reviewcontainer);
 const clientstore=[
  { 
    imgsrc:"image/pic-1.png",
    message:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, velit?',
    name:"joee doee"
  },
  {
    imgsrc:"image/pic-2.png",
    message:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, velit?',
    name:"joee doee"
  },
  {
    imgsrc:"image/pic-3.png",
    message:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, velit?',
    name:"joee doee"
  },
  {
    imgsrc:"image/pic-4.png",
    message:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, velit?',
    name:"joee doee"
  },
  {
    imgsrc:"image/pic-5.png",
    message:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, velit?',
    name:"joee doee"
  },
  {
    imgsrc:"image/pic-6.png",
    message:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, velit?',
    name:"joee doee"
  },
 ]
var count=2;
function showclient(){
  let store=`<div class="client animaton">
  <div class="img">
  <img src="${clientstore[count].imgsrc}">
  </div>
  <p>${clientstore[count].message}</p>
  <h3>${clientstore[count].name}</h3>
  <div class="star">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
  </div>
</div> `;
if (count<clientstore.length-1) {
  reviewcontainer.innerHTML=store;
  count++;    
} 
 else {
    count=0;
}
}
setInterval(showclient,3000)

  // setInterval(showclient,2000);





