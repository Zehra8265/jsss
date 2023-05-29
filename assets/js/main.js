$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:true
            }
        }
    }) ;
  });

  const product= document.querySelector('#box');
  {
    fetch('https://64747a697de100807b1b0545.mockapi.io/product')
    .then(res=>res.json())
    .then(res=>
    
    res.forEach(el => {
       product.innerHTML+=` <div class="image col-6">
       <div class="card mb-3" >
           <div class="row g-0">
             <div class="col-md-4">
               
               <img src=" ${el.img}" height="200px" width="200px">
           
           </div>
             <div class="col-md-8">
               <div class="card-body">
                 <h5 class="card-title f-size"><i class="las la-user"></i>${el.tittle}    <i class="las la-calendar"></i>${el.calendar} <i class="las la-comment"></i> ${el.hour}</h5>
                 <p class="card-text">${el.tittle1}</p>
                 <p class="card-text"><small class="text-muted">${el.word}</small></p>
               </div>
             </div>
           </div>
         </div>
   </div> `
    })
     ).catch(err=>console.log(err))
}
