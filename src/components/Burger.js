function responsiveBurgerIcon(shouldHide) {
    if(shouldHide != null){
        console.log("yae");
    }
    var x = document.getElementById("navbarContent");
    if (x.className === "navbar-nav collapse") {
        x.className += " show fade-in";
    } else {
        x.className = "navbar-nav collapse";
    }
  }

  export default (responsiveBurgerIcon);