function switchService() {
  var active = $('#pain .graphic li.active');
  if (active.length < 1) {
    var next = $('#pain .graphic li:first');
  }
  else {
    var next = active.next();
    if (next.length < 1) {
      next = $('#pain .graphic li:first');
    }
  }
  $('#pain .graphic li').removeClass('active fadeIn');
  next.addClass('active fadeIn');
}

function slideService() {
  var active = $('#fix .graphic .services li.active');
  if (active.length < 1) {
    var next = $('#fix .graphic .services li:first');
  }
  else {
    var next = active.next();
    if (next.length < 1) {
      next = $('#fix .graphic .services li:first');
    }
  }
  $('#fix .graphic .services li').removeClass('active slideDown');
  next.addClass('active slideDown');
}

function slideChat() {
  var active = $('#fix .graphic .chats li.active');
  if (active.length < 1) {
    var next = $('#fix .graphic .chats li:first');
  }
  else {
    var next = active.next();
    if (next.length < 1) {
      next = $('#fix .graphic .chats li:first');
    }
  }
  $('#fix .graphic .chats li').removeClass('active slideDown');
  next.addClass('active slideDown');
}

$(function() {
  // This function takes the first .slide element and put at the end


  setInterval('switchService()', 2000);

  setInterval('slideService()', 4000);

  setInterval('slideChat()', 6000);
});