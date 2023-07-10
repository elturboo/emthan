$(".material-filter").owlCarousel({
  loop: false,
  margin: 5,
  nav: true,
  rtl: true,
  dots: false,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 7,
    },
  },
});

var container = document.getElementsByClassName("otp-form")[0];
container.onkeyup = function (e) {
  var target = e.srcElement;
  var maxLength = parseInt(target.attributes["maxlength"].value, 10);
  var myLength = target.value.length;
  if (myLength >= maxLength) {
    var next = target;
    while ((next = next.nextElementSibling)) {
      if (next == null) break;
      if (next.tagName.toLowerCase() == "input") {
        next.focus();
        break;
      }
    }
  }
};
