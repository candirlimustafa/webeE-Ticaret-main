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


