$(document).ready(function () {
  $("li.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("li")
    .addClass("active");
});


const nav = document.querySelector("#menu");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("navbar-active");
  } else {
    nav.classList.remove("navbar-active");
  }
}




// const nav = document.querySelector(".fixedNav");
// window.addEventListener("scroll", fixNav);

// function fixNav() {
//   if (window.scrollY > nav?.offsetHeight + 150) {
//     nav.classList.add("navbar-active");
//     nav.removeAttribute('clip-path');
//   } else {
//     nav.classList.remove("navbar-active");
//   }
// }



$(document).ready(function() {
  // Prevent default for all bxslider control links
  $(document).on('click', '.bx-wrapper a.bx-prev, .bx-wrapper a.bx-next', function(e) {
    e.preventDefault();
  });

  // Slider 1
  $('.bxslider').bxSlider({
      minSlides: 1,
      auto: true,
      speed: 1800,
      pause: 5000,
      maxSlides: 4,
      slideWidth: 300,
      pager: false,
      controls: true,
      slideMargin: 5,
  });

  // Slider 2
  $('.bxslider2').bxSlider({
      minSlides: 1,
      auto: true,
      speed: 1800,
      pause: 5000,
      maxSlides: 1,
      slideWidth: innerWidth,
      pager: false,
      controls: true
  });
});


// $('.bootstrap-datepicker input').datepicker({
//   todayBtn: "linked",
//   language: "fr",
//   autoclose: true,
//   todayHighlight: true
// });;




$(document).ready(function () {
  var $lightbox = $('#lightbox');

  $('[data-target="#lightbox"]').on('click', function (event) {
    var $img = $(this).find('img'),
      src = $img.attr('src'),
      alt = $img.attr('alt'),
      css = {
        'maxWidth': $(window).width() - 100,
        'maxHeight': $(window).height() - 100
      };

    $lightbox.find('.close').addClass('hidden');
    $lightbox.find('img').attr('src', src);
    $lightbox.find('img').attr('alt', alt);
    $lightbox.find('img').css(css);
  });

  $lightbox.on('shown.bs.modal', function (e) {
    var $img = $lightbox.find('img');

    $lightbox.find('.modal-dialog').css({
      'width': $img.width()
    });
    $lightbox.find('.close').removeClass('hidden');
  });
});;



var conf_name = "DOZ CONSTRUCTION";
var conf_email = "conseil@dozset.fr";
var modal_rgpd = '<div class="modal fade" id="modal-rgpd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
  '        <div class="modal-dialog" role="document">' +
  '            <div class="modal-content">' +
  '                <div class="modal-body">' +
  '                  * En cochant cette case, j’accepte que mes données personnelles soient collectées et traitées par le service commercial de ' + conf_name + '.' +
  '                   Leur traitement a pour finalité de traiter votre demande spécifique.<br>' +
  '                   Les données collectées sont conservées pour la durée de nos relations commerciales + 1 an. Conformément à la loi' +
  '                   « informatique et libertés », vous pouvez exercer votre droit d’accès aux données vous concernant et les faire rectifier' +
  '                   auprès de notre référent à <a href="mailto:"' + conf_email + '">' + conf_email + '</a>.<br>' +
  '                   Vous disposez également d’un droit de rectification, à l’oubli, à la portabilité, de limitation ou d’opposition auprès de notre référent à ' +
  '                   <a href="mailto:' + conf_email + '">' + conf_email + '</a>.<br><br>' +
  '                   En dernier recours, vous pouvez déposer une réclamation auprès de la CNIL.' +
  '                </div>' +
  '                <div class="modal-footer">' +
  '                    <div class="form-group text-center">' +
  '                        <button type="button" class="btn btn-default btn-primary" data-dismiss="modal">Fermer</button>' +
  '                    </div>' +
  '                </div>' +
  '            </div>' +
  '        </div>' +
  '    </div>';
$(document).ready(function () {
  $(".info-rgpd label").after(function () {
    return '&nbsp;<a href="#" data-toggle="modal" data-target="#modal-rgpd"><i class="fa fa-info-circle"></i></a>' + modal_rgpd;
  });
});;


new WOW().init();;


$(window).scroll(function () {
  if ($(document).scrollTop() > 350) {
    $(".backTotop").addClass('active1');
    $(".phone-fix").addClass('show');
  } else {
    $(".backTotop").removeClass('active1');
    $(".phone-fix").removeClass('show');
  }
});

$('a[href^="#backTotop"]').click(function () {
  var the_id = $(this).attr("href");

  $('html, body').animate({
    scrollTop: $(the_id).offset().top
  }, 'slow');
  return false;
});;


// window.onscroll = function () {
//   myFunction()
// };
// var header = document.getElementById("logo-section");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("fixmenu");

//   } else {
//     header.classList.remove("fixmenu");
//   }
// };


$('.carousel1').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 7000,
  smartSpeed: 3000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});


$('.carousel2').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  autoplay: false,
  autoplayTimeout: 7000,
  smartSpeed: 3000,
  autoplayHoverPause: false,
  mouseDrag: false,
  freeDrag: false,
  touchDrag: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
});



$('.carousel3').owlCarousel({
  loop: true,
  margin: 50,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 7000,
  smartSpeed: 3000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});


$('.carousel4').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  autoplay: false,
  autoplayTimeout: 7000,
  smartSpeed: 3000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
});

$('.carousel5').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  autoplay: false,
  autoplayTimeout: 7000,
  smartSpeed: 3000,
  autoplayHoverPause: false,
  mouseDrag: false,
  freeDrag: false,
  touchDrag: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
});
