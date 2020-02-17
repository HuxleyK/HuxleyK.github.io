
$(document).ready(function() {
  $('#banner').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.inner').css({
    'margin-top': -($('.inner').height() / 2)
  });
});
