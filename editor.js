$(document).ready(function() {
  $('body').keydown(function(e) {
    if (characters[e.which] != undefined) {
      if (!e.shiftKey) {
        $('#editor').append(characters[e.which]);
      }
      else {
        $('#editor').append(shift_characters[characters[e.which]]);
      }
    }
    else if (e.which == 37) { //left arrow
      //todo
    }
    else if (e.which == 38) {
      //up arrow todo
    }
    else if (e.which == 39) {
      //right arrow todo
    }
    else if (e.which == 40) {
      //down arrow todo
    }
    else if (e.which == 46) {
      //delete todo
    }
    else if (e.which == 8) {
      //backspace todo
      alert('test');
      return false;
    }
    else if (e.which == 13) {
      //enter todo
      return false;
    }
    else if (e.which == 9) {
      $('#editor').append('&#9;&#9;&#9;&#9;');
      return false;
    }
  });
});
