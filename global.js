"use strict";

/* =========================================================
   NOVAERA GLOBAL JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function(){

  const menuButton =
    document.getElementById("mobileMenuButton");

  const mobileMenu =
    document.getElementById("mobileMenu");


  /* MOBILE MENU */

  if(menuButton && mobileMenu){

    menuButton.addEventListener("click", function(){

      mobileMenu.classList.toggle("open");

    });


    mobileMenu
      .querySelectorAll("a")
      .forEach(function(link){

        link.addEventListener("click", function(){

          mobileMenu.classList.remove("open");

        });

      });

  }


  /* HEADER SCROLL EFFECT */

  const navbar =
    document.querySelector(".navbar");

  if(navbar){

    window.addEventListener("scroll", function(){

      if(window.scrollY > 30){

        navbar.style.background =
          "rgba(3,7,17,.88)";

      }else{

        navbar.style.background =
          "rgba(3,7,17,.68)";

      }

    });

  }

});
