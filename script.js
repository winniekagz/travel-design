// import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'


let menu=document.querySelector("#menu-bars");
let searchBtn=document.querySelector("#search-btn");
let searchBar=document.querySelector("#search-bar");
let navbar=document.querySelector(".navbar");
let loginForm=document.querySelector(".login-form-container");
let formClose=document.querySelector("#close-form");
let videoBtn=document.querySelectorAll(".vid-btn");
let formBtn=document.querySelector("#login-btn");

window.onscroll=()=>{
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    // loginForm.classList.remove("active")
}

menu.addEventListener("click",()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active")
})
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});
// formClose.addEventListener('click', () =>{
//     loginForm.classList.remove('active');
// });
console.log(loginForm)

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});




