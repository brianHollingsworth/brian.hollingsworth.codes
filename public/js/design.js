  // Whenever the page is reloaded, animate the signature.
  $(document).ready(function () {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $("#mobile-navbar").css("display", "block");
      $("#mobile-navbar").show();
    } else {
      $("#mobile-navbar").css("display", "none");
      $("#mobile-navbar").hide();
    }

    if (window.innerWidth <= 767) {

      $("#mobile-navbar").css("display", "block");
      $("#profile-pic").attr("src", "images/Profile-Mobile.png");
    } else {
      $("#mobile-navbar").css("display", "none");
      $("#profile-pic").attr("src", "images/Profile.png");
    }

    // $('#sidebar').affix({
    //   offset: {
    //     top: $('.navbar-default').height()
    //   }
    // });

    document.getElementById('signature-animated').src = 'images/Signature_Animated.gif';

    // var date = new Date();
    // var dayOfTheWeek = date.getDay();
    // dailyColorPalette(2);

    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
        window.location.hash = target;
      });
    });
  });

  $(function () {
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse('hide');
    });
  });

  // Whenever my resume is viewed on a mobile device, I only want the fixed
  // navigation bar to be displayed.
  $(window).resize(function () {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $("#mobile-navbar").css("display", "block");
      $("#mobile-navbar").show();
    } else {
      $("#mobile-navbar").css("display", "none");
      $("#mobile-navbar").hide();
    }

    if (window.innerWidth <= 767) {
      $("#mobile-navbar").css("display", "block");
      $("#mobile-navbar").show();
      // $("#sidebar").hide();
      $("#profile-pic").attr("src", "images/Profile-Mobile.png");
    } else {
      // $("#sidebar").show();
      $("#mobile-navbar").css("display", "none");
      $("#mobile-navbar").hide();
      $("#profile-pic").attr("src", "images/Profile.png");
    }
  });
