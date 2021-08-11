// const swiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//       draggable: true,
//     },
//     autoplay: {
//         delay: 5000,
//       }, 
//   });

// const togglebuton = document.getElementById('menu-bars')[0]
// const navbarlinks = document.getElementById('nav-links')[0]
 
//  if(togglebuton){
//     togglebuton.addEventListener('click',() =>{
//         navbarlinks.classList.toggle('active')
//     })
//  }

let togglebuton = document.querySelector('#menu-bars');
let navbarlinks = document.querySelector('#nav-links');
togglebuton.onclick = () =>{
    navbarlinks.classList.toggle('active');
}

function videoUrl(hmmmmmm){
    document.getElementById("slider").src = hmmmmmm;
}

function imgUrl(hmmmmmm){
    document.getElementById("img-slider").src = hmmmmmm;
}
