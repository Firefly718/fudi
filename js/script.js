//-------------------------------------------------------------Burger Menu
var isMenuShow = false; // it's working

burger.addEventListener("click", function() {
    if (isMenuShow) {
        document.getElementById('burger').src = "./img/burgerClose.png";
        document.getElementById('bars').style.display = "flex";
        isMenuShow = false;
    } else {
        document.getElementById('burger').src = "./img/burger.png";
        document.getElementById('bars').style.display = "none";
        isMenuShow  = true;
    }
});

// second toggleBar (not working)
// $('#burger').on('click', function(e) {
//   e.preventDefault();

//   $("#burger").attr("src","./img/burgerClose.png");

//   $('#bars').toggleClass("active");
// });

// third toggleBar (not working)
// burger.addEventListener("click", function() {
//   document.getElementById("#burger").classList.toggle('active');
// });

// fourth toggleBar
// window.onload = function() {
//   document.querySelector('#burger')
// }







//-------------------------------------------------------------Slow Scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}