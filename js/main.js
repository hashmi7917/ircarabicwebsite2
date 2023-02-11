(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Fixed Navbar
  $(window).scroll(function () {
    if ($(window).width() < 992) {
      if ($(this).scrollTop() > 45) {
        $(".fixed-top").addClass("bg-dark shadow");
      } else {
        $(".fixed-top").removeClass("bg-dark shadow");
      }
    } else {
      if ($(this).scrollTop() > 45) {
        $(".fixed-top").addClass("bg-dark shadow").css("top", -45);
      } else {
        $(".fixed-top").removeClass("bg-dark shadow").css("top", 0);
      }
    }
  });

  // Back to top button
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 300) {
  //     $("btn-back-to-top").fadeIn("slow");
  //   } else {
  //     $("btn-back-to-top").fadeOut("slow");
  //   }
  // });
  // $("btn-back-to-top").click(function () {
  //   $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
  //   return false;
  // });

  // Causes progress
  $(".causes-progress").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });
})(jQuery);

// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// counter
let button = document.getElementById("clickme");
let totalText = document.getElementById("totalDownloads");
let count = 0;

count = localStorage.getItem(totalText);
count = parseInt(count); // because localstorage stores everything in strings

// First time the value does not exist...
let counter = document.getElementById("counter");
let btn = document.getElementById("downloadbtn");
counter.innerText = getCounterFromLocalStorage() || 0;
btn.onclick = increaseOne;

function getCounterFromLocalStorage() {
  return localStorage.getItem("counter");
}

function increaseOne() {
  counter.innerText = Number(counter.innerText) + 1;
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem("counter", counter.innerText);
}

// live counter

function clicked() {
  let totalNumber = 0;
  let totaldownloadsBtn = document.getElementById("totaldownloads");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.countapi.xyz/hit/myweb.com/awesomeclick");
  xhr.responseType = "json";
  xhr.onload = function () {
    // alert(`This button has been clicked ${this.response.value} times!`);
    totaldownloadsBtn = totaldownloadsBtn.innerText = this.response.value;
    totalNumber = totaldownloadsBtn;
  };

  xhr.send();

  return totalNumber;
}
function onBodyLoad() {
  document.getElementById("totaldownloads").innerText = totalNumber;
  console.log(totalNumber);
}

function clicked2() {
  let totalNumber = 0;
  let totaldownloadsBtn2 = document.getElementById("totaldownloads2");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.countapi.xyz/hit/two/awesomeclick");
  xhr.responseType = "json";
  xhr.onload = function () {
    // alert(`This button has been clicked ${this.response.value} times!`);
    totaldownloadsBtn2 = totaldownloadsBtn2.innerText = this.response.value;
    totalNumber = totaldownloadsBtn2;
  };

  xhr.send();

  return totalNumber;
}
// function onBodyLoad() {
//   document.getElementById("totaldownloads").innerText = totalNumber;
//   console.log(totalNumber);
// }
