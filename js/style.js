function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }
  let subs = document.querySelector(".discount");
let plus = document.querySelector(".count");
let number = document.querySelector(".number");
let start = 1;


subs.addEventListener("click", function() {
  number.classList.toggle("add");
  start -= 1;
  number.innerHTML = start;
});

plus.addEventListener("click", function() {
  number.classList.toggle("add");
  start += 1;
  number.innerHTML = start;
});

function myFunctionn() {
    var x = document.getElementById("options");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//   $(document).ready(function(){
//     $('.thumbnails a').click(function(e){
//       e.preventDefault();
// $('.image-gallery img').attr('src',$(this).attr('href'));
//     })
//   });