//-------------------------------------------------------------Burger Menu
var isMenuShow = false;

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