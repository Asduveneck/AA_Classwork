const FollowToggle = require('./follow_toggle.js');

$(function () {
  let buttons = $('button.follow-toggle');
  buttons.each(function(i) {
  
  
  // let button = new FollowToggle($(this)); // $(this) not needed?
  let button = new FollowToggle(this);
  });
});

// document.addEventListener('DOMContentLoaded', function() {
  
//   let buttons = $('.follow-toggle');
//   debugger
//   buttons.each(new FollowToggle($(this)));
// });
