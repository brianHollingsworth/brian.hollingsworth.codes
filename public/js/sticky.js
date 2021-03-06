$(function fixedUntilPoint() {

  var stickyProfile = $('#sticky-profile');
  var stickyExperience = $('#sticky-experience');
  var stickySkillset = $('#sticky-skillset');
  var stickyAbout = $('#sticky-about');
  var topDiv = $('#top');
  var profileDiv = $('#profile');
  var experienceDiv = $('#professional-experience');
  var skillsetDiv = $('#skillset');
  var profileAnchor = $('#profile-anchor');
  var experienceAnchor = $('#experience-anchor');
  var skillsetAnchor = $('#skillset-anchor');
  var aboutAnchor = $('#about-anchor');

  function adjustDivPosition() {

    var bottomOfTopDiv = $(topDiv).position().top + $(topDiv).outerHeight(true);
    var bottomOfProfileDiv = $(profileDiv).position().top + $(profileDiv).outerHeight(true);
    var bottomOfExperienceDiv = $(experienceDiv).position().top + $(experienceDiv).outerHeight(true);
    var bottomOfSkillsetDiv = $(skillsetDiv).position().top + $(skillsetDiv).outerHeight(true);
    var profileOffsetFloat = $(document).scrollTop() + $(window).height() - stickyProfile.outerHeight();
    var experienceOffsetFloat = $(document).scrollTop() + $(window).height() - stickyExperience.outerHeight();
    var skillsetOffsetFloat = $(document).scrollTop() + $(window).height() - stickySkillset.outerHeight();
    var aboutOffsetFloat = $(document).scrollTop() + $(window).height() - stickyAbout.outerHeight();

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      stickyProfile.css({
        bottom: 'auto',
        position: 'absolute',
        top: profileAnchor
      });

      stickyExperience.css({
        bottom: 'auto',
        position: 'absolute',
        top: experienceAnchor
      });

      stickySkillset.css({
        bottom: 'auto',
        position: 'absolute',
        top: skillsetAnchor
      });

      stickyAbout.css({
        bottom: 'auto',
        position: 'absolute',
        top: aboutAnchor
      });
    } else {
      if (bottomOfTopDiv <= profileOffsetFloat - 150) {
        stickyProfile.removeClass("sticky-top-shadow");
        stickyProfile.css({
          bottom: 'auto',
          position: 'absolute',
          top: profileAnchor
        });
      } else {
        console.log(bottomOfTopDiv + " " + (profileOffsetFloat - 150));
        stickyProfile.addClass("sticky-top-shadow");
        stickyProfile.css({
          bottom: 150,
          position: 'fixed',
          top: 'auto'
        });
      }

      if (bottomOfProfileDiv <= experienceOffsetFloat - 100) {
        stickyExperience.removeClass("sticky-top-shadow");
        stickyExperience.css({
          bottom: 'auto',
          position: 'absolute',
          top: experienceAnchor
        });
      } else {
        // console.log(bottomOfProfileDiv + " " + (experienceOffsetFloat - 50));
        stickyExperience.addClass("sticky-top-shadow");
        stickyExperience.css({
          bottom: 100,
          position: 'fixed',
          top: 'auto'
        });
      }

      if (bottomOfExperienceDiv <= skillsetOffsetFloat - 50) {
        stickySkillset.removeClass("sticky-top-shadow");
        stickySkillset.css({
          bottom: 'auto',
          position: 'absolute',
          top: skillsetAnchor
        });
      } else {
        // console.log(bottomOfExperienceDiv + " " + skillsetOffsetFloat);
        stickySkillset.addClass("sticky-top-shadow");
        stickySkillset.css({
          bottom: 50,
          position: 'fixed',
          top: 'auto'
        });
      }

      if (bottomOfSkillsetDiv <= aboutOffsetFloat) {
        stickyAbout.removeClass("sticky-top-shadow");
        stickyAbout.css({
          bottom: 'auto',
          position: 'absolute',
          top: aboutAnchor
        });
      } else {
        //console.log(bottomOfSkillsetDiv + " " + aboutOffsetFloat);
        stickyAbout.addClass("sticky-top-shadow");
        stickyAbout.css({
          bottom: 0,
          position: 'fixed',
          top: 'auto'
        });
      }
    }
  }

  $(window).on('scroll resize', adjustDivPosition)
  adjustDivPosition();
});
