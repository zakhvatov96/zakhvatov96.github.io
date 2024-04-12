const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
function validateForms(form) {
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        reqired: true,
        email: true,
      },
      file: {
        reqired: true,
      },
      checkbox: {
        reqired: true,
      },
    },
    messages: {
      name: {
        required: "Введите свое имя",
        minlength: jQuery.validator.format("Введите {0} символа!"),
      },
      email: {
        required: "Введите свой email",
        email: "Неправильно введен email",
      },
      file: {
        required: "Прикрепите скриншот покупки!",
      },
      checkbox: {
        required: "Подтвердите согласие на обработку персональных данных",
      },
    },
  });
}

validateForms(".play__form");

$(window).scroll(function () {
  if ($(this).scrollTop() > 1600) {
    $(".pageup").fadeIn();
  } else {
    $(".pageup").fadeOut();
  }
});

$('a[href^="#"').on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate({
    scrollTop: $(href).offset().top,
  });
  return false;
});
