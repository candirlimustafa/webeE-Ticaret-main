window.addEventListener("DOMContentLoaded", event => {
    var navbarAbs=function(){
        const nCollapsible=document.body.querySelector("#mainNavbar");
        if(!nCollapsible){
            return;
        }
        if(window.scrollY === 0){
            nCollapsible.classList.remove("navbar-abs");
        }else{
            nCollapsible.classList.add("navbar-abs");
        }
    };
    navbarAbs();
    document.addEventListener("scroll",navbarAbs);
    const myNavbar=document.body.querySelector("#mainNavbar");
    if(myNavbar){
        new bootstrap.ScrollSpy(document.body,{
            target:"#mainNavbar",
            offset:74,
        });
    }
});


var acco = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acco.length; i++) {
  acco[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel /
    this.classList.toggle("active");

    / Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}