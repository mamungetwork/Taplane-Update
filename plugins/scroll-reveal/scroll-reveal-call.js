ScrollReveal({
  reset: false,
  opacity: 0,
  delay: 0,
});

/* ***************************** WHAT WE DO SECTION REVEAL START ***************************** */
ScrollReveal().reveal(".top h2, .top p", {
  delay: 100,
  duration: 500,
  distance: "40px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
  interval: 200,
});
ScrollReveal().reveal(".top p", {
  delay: 300,
  duration: 500,
  distance: "40px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
});

ScrollReveal().reveal(".card", {
  delay: 300,
  duration: 500,
  distance: "200px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
  interval: 100,
});
ScrollReveal().reveal(".graphics", {
  delay: 400,
  duration: 1000,
  distance: "250px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
});
ScrollReveal().reveal(".hex", {
  duration: 500,
  distance: "100px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
  interval: 100,
});
ScrollReveal().reveal(".card .icon", {
  delay: 200,
  duration: 500,
  distance: "60px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
  interval: 50,
});
ScrollReveal().reveal(".card h3", {
  delay: 400,
  duration: 500,
  distance: "30px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
  interval: 50,
});
ScrollReveal().reveal(".card .desc", {
  delay: 600,
  duration: 500,
  distance: "20px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
  interval: 50,
});
/* ***************************** WHAT WE DO SECTION REVEAL END ***************************** */

/* ***************************** ABOUT SECTION REVEAL Start ***************************** */
ScrollReveal().reveal(".about_us .right_content h3", {
  duration: 600,
  distance: "60px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
});
ScrollReveal().reveal(".about_us .right_content p", {
  delay: 100,
  duration: 600,
  distance: "200px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
});
ScrollReveal().reveal(".stats_section h2", {
  delay: 200,
  duration: 500,
  distance: "50px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
});
ScrollReveal().reveal(".stats_section .stats", {
  delay: 300,
  duration: 500,
  distance: "80px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
});
ScrollReveal().reveal(".stats_section h4", {
  delay: 500,
  duration: 300,
  distance: "50px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
  interval: 100,
});
ScrollReveal().reveal(".stats_section p", {
  delay: 600,
  duration: 300,
  distance: "30px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
  interval: 100,
});
/* ***************************** ABOUT SECTION REVEAL END ***************************** */

/* ***************************** CONTACT SECTION REVEAL START ***************************** */
ScrollReveal().reveal(".contact h2, .contact p, .contact .btn", {
  delay: 200,
  duration: 500,
  distance: "60px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
  interval: 100,
});
/* ***************************** CONTACT SECTION REVEAL END ***************************** */

/* ***************************** FOOTER SECTION REVEAL START ***************************** */
ScrollReveal().reveal("footer .brand_logo, footer .foot_desc", {
  delay: 100,
  duration: 500,
  distance: "40px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
  interval: 150,
});
ScrollReveal().reveal(
  "footer .contact_info .phone, footer .contact_info .mail, footer .contact_info .address",
  {
    delay: 300,
    duration: 500,
    distance: "20px",
    origin: "bottom",
    easing: "cubic-bezier(.56,.34,.4,1)",
    interval: 200,
    // viewOffset: {
    //   bottom: 0,
    // },
  }
);

ScrollReveal().reveal(".bottom_copyright p", {
  delay: 1200,
  duration: 500,
  distance: "40px",
  origin: "bottom",
  easing: "cubic-bezier(.56,.34,.4,1)",
});
ScrollReveal().reveal(
  "footer .contact_info div div, footer .contact_info div a, footer .contact_info div p",
  {
    delay: 0,
    // duration: 250,
    distance: "20px",
    origin: "bottom",
    easing: "cubic-bezier(.56,.34,.4,1)",
    interval: 200,
    viewOffset: {
      bottom: 0,
    },
  }
);
/* ***************************** FOOTER SECTION REVEAL END ***************************** */
