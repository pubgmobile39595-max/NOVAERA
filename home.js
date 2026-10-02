"use strict";

/* =========================================================
   NOVAERA HOME
========================================================= */

document.addEventListener("DOMContentLoaded", function(){

  const searchButton =
    document.getElementById("searchButton");

  const destination =
    document.getElementById("destinationInput");

  const service =
    document.getElementById("serviceInput");

  const date =
    document.getElementById("dateInput");

  const message =
    document.getElementById("searchMessage");


  if(!searchButton){
    return;
  }


  /* SEARCH */

  searchButton.addEventListener("click", function(){

    const destinationValue =
      destination.value.trim();

    const serviceValue =
      service.value;

    const dateValue =
      date.value;


    if(!destinationValue){

      message.textContent =
        "Lütfen gitmek istediğiniz destinasyonu yazın.";

      message.classList.add("show");

      destination.focus();

      return;

    }


    let text =
      destinationValue +
      " için " +
      serviceValue +
      " talebi hazırlandı.";


    if(dateValue){

      text +=
        " Başlangıç tarihi: " +
        new Date(dateValue).toLocaleDateString("tr-TR") +
        ".";

    }


    text +=
      " Rezervasyon sayfasından talebinizi tamamlayabilirsiniz.";


    message.textContent = text;

    message.classList.add("show");


    /* RESERVATION URL */

    const url =
      "reservation.html?service=" +
      encodeURIComponent(serviceValue) +
      "&destination=" +
      encodeURIComponent(destinationValue) +
      "&date=" +
      encodeURIComponent(dateValue);


    setTimeout(function(){

      window.location.href = url;

    },700);

  });


  /* ENTER KEY */

  [destination,date].forEach(function(input){

    if(input){

      input.addEventListener("keydown",function(event){

        if(event.key==="Enter"){

          event.preventDefault();

          searchButton.click();

        }

      });

    }

  });

});
