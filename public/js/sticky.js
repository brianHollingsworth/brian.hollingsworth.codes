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
    var bottomOfStickyProfile = $(stickyProfile).position().top + $(stickyProfile).outerHeight(true);
    var bottomOfProfileAnchor = $(profileAnchor).position().top + $(profileAnchor).outerHeight(true);
    var profileOffsetFloat = $(document).scrollTop() + $(window).height() - stickyProfile.outerHeight();
    var experienceOffsetFloat = $(document).scrollTop() + $(window).height() - stickyExperience.outerHeight();
    var skillsetOffsetFloat = $(document).scrollTop() + $(window).height() - stickySkillset.outerHeight();
    var aboutOffsetFloat = $(document).scrollTop() + $(window).height() - stickyAbout.outerHeight();

    if (bottomOfProfileAnchor <= profileOffsetFloat - 150) {
      stickyProfile.css({
        bottom: 'auto',
        position: 'absolute',
        top: profileAnchor
      });
    } else {
      // console.log(bottomOfTopDiv + " " + (profileOffsetFloat - 150) + " " + bottomOfProfileAnchor + " " + bottomOfStickyProfile);
      stickyProfile.css({
        bottom: 150,
        position: 'fixed',
        top: 'auto'
      });
    }

    if (bottomOfProfileDiv <= experienceOffsetFloat - 100) {
      stickyExperience.css({
        bottom: 'auto',
        position: 'absolute',
        top: experienceAnchor
      });
    } else {
      // console.log(bottomOfProfileDiv + " " + (experienceOffsetFloat - 50));
      stickyExperience.css({
        bottom: 100,
        position: 'fixed',
        top: 'auto'
      });
    }

    if (bottomOfExperienceDiv <= skillsetOffsetFloat - 50) {
      stickySkillset.css({
        bottom: 'auto',
        position: 'absolute',
        top: skillsetAnchor
      });
    } else {
      // console.log(bottomOfExperienceDiv + " " + skillsetOffsetFloat);
      stickySkillset.css({
        bottom: 50,
        position: 'fixed',
        top: 'auto'
      });
    }

    if (bottomOfSkillsetDiv <= aboutOffsetFloat) {
      stickyAbout.css({
        bottom: 'auto',
        position: 'absolute',
        top: aboutAnchor
      });
    } else {
      //console.log(bottomOfSkillsetDiv + " " + aboutOffsetFloat);
      stickyAbout.css({
        bottom: 0,
        position: 'fixed',
        top: 'auto'
      });
    }
  }

  $(window).on('scroll resize', adjustDivPosition)
  adjustDivPosition();
});
