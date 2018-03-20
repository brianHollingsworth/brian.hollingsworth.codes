$('#snapchat').click(function () {
  $("#modal-container").show();
  $('#modal-container').removeAttr('class').addClass("blow-up");
  $('body').addClass('modal-active');
  $('body').addClass('stop-scrolling');
})

$('#modal-container').click(function () {
  $(this).addClass('out');
  $('body').removeClass('modal-active');
  setTimeout(
    function () {
      $("#modal-container").hide();
    }, 500);
  $('body').removeClass('stop-scrolling');
});
