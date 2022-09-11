/* ******************* SPACESHIP ANIMATION CALL OUT ******************* */
var xmlns = "http://www.w3.org/2000/svg",
  select = function (s) {
    return document.querySelector(s);
  },
  selectAll = function (s) {
    return document.querySelectorAll(s);
  },
  container = select(".spaceship_container"),
  ship = select(".ship"),
  shipRotation = select(".shipRotation"),
  beam = select(".beam"),
  glowAlpha = select("#glowAlpha");

var hoverTween = TweenMax.to(ship, 1.8, {
  y: "+=15",
  x: "-=100",
  yoyo: true,
  repeat: -1,
  ease: Sine.easeInOut,
});
var rotationTween = TweenMax.fromTo(
  shipRotation,
  1.3,
  {
    rotation: -8,
  },
  {
    rotation: 8,
    yoyo: true,
    repeat: -1,
    ease: Sine.easeInOut,
  }
);

var lightTween = TweenMax.staggerTo(
  ".light",
  1.5,
  {
    fill: "#ffffff",
    repeat: -1,
    yoyo: true,
    ease: Linear.easeNone,
  },
  0.16
);

/* ******************* POPUP CALLOUT ******************* */
let contactBTN = document.querySelectorAll("#contact_btn");
let closeBTN = document.querySelector(".close_btn");
let mainPopup = document.querySelector(".popup");
let popupOverlay = document.querySelector(".popup_overlay");
let overflow = document.querySelector("body");

const popupClose = function () {
  mainPopup.classList.remove("popup_active");
  overflow.classList.remove("popup_open");
};
const popupOpen = function () {
  mainPopup.classList.add("popup_active");
  overflow.classList.add("popup_open");
};

for (i = 0; i < contactBTN.length; i++) {
  contactBTN[i].addEventListener("click", function () {
    popupOpen();
  });
}
closeBTN.addEventListener("click", function () {
  popupClose();
});
popupOverlay.addEventListener("click", function () {
  popupClose();
});

/* ******************* HOW CAN WE HELP ANIMATION ******************* */
setInterval(function () {
  $(".hex-1 .first").toggleClass("active");
  $(".hex-1 .second").toggleClass("active");
}, 3000);
setInterval(function () {
  $(".hex-2 .first").toggleClass("active");
  $(".hex-2 .second").toggleClass("active");
}, 3300);
setInterval(function () {
  $(".hex-3 .first").toggleClass("active");
  $(".hex-3 .second").toggleClass("active");
}, 3800);

setInterval(function () {
  $(".hex-4 .first").toggleClass("active");
  $(".hex-4 .second").toggleClass("active");
}, 4200);
setInterval(function () {
  $(".hex-5 .first").toggleClass("active");
  $(".hex-5 .second").toggleClass("active");
}, 4800);
setInterval(function () {
  $(".hex-6 .first").toggleClass("active");
  $(".hex-6 .second").toggleClass("active");
}, 5100);
setInterval(function () {
  $(".hex-7 .first").toggleClass("active");
  $(".hex-7 .second").toggleClass("active");
}, 5800);

/* ******************* ABOUT US - STATS SECTION COUNTER ******************* */
const animNum = (EL) => {
  if (EL._isAnimated) return; // Animate only once!
  EL._isAnimated = true;

  $(EL)
    .prop("Counter", 0)
    .animate(
      {
        Counter: EL.dataset.num,
      },
      {
        duration: 2000,
        delay: 4000,
        step: function (now) {
          const text = Math.ceil(now).toLocaleString("en-US");
          const html = text
            .split(",")
            .map((n) => `<span class="count">${n}+</span>`)
            .join(",");
          $(this).html(html);
        },
      }
    );
};

const inViewport = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) animNum(entry.target);
  });
};

$("[data-num]").each((i, EL) => {
  const observer = new IntersectionObserver(inViewport);
  observer.observe(EL);
});

/* ******************* Navbar Show Hide on Scroll  ******************* */
var c,
  currentScrollTop = 0,
  navbar = $("header");

var navImg = $(".nav_logo");
var notActive = 0;

var pos = $(window).scrollTop();

if (pos > 5) {
  notActive = 1;
  navbar.addClass("nav_active");
  navImg.attr("src", `images/taplane_${notActive}.png`);
}

$(window).scroll(function () {
  var a = $(window).scrollTop();
  var b = navbar.height();

  currentScrollTop = a;

  if (c < currentScrollTop && a > b) {
    navbar.addClass("nav_active");
    notActive = 1;
    navImg.attr("src", `images/taplane_${notActive}.png`);
  } else if (c > currentScrollTop && !(a <= b)) {
    navbar.addClass("nav_active");
    notActive = 1;
    navImg.attr("src", `images/taplane_${notActive}.png`);
  } else if (a == 0) {
    navbar.removeClass("nav_active");
    notActive = 0;
    navImg.attr("src", `images/taplane_${notActive}.png`);
  }

  c = currentScrollTop;

  // console.log(a);
});
