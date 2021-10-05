var slide = document.getElementsByClassName("faq-question");
var i;

for (i = 0; i < slide.length; i++) {
  slide[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}