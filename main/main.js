window.addEventListener('scroll', function(){
  const headerFixed = document.getElementById('header');
  if(window.scrollY > 0) {
    headerFixed.classList.add('fixed-header');
  }else{
    headerFixed.classList.remove('fixed-header');
  }
})

let navVisible = document.querySelector('.nav-menu');
let menuToggle = document.querySelector('.fa-bars');
let menuClose = document.querySelector('.fa-times');

menuToggle.onclick=() =>{
  navVisible.classList.add('active');
}
menuClose.onclick=() =>{
  navVisible.classList.remove('active');
}



