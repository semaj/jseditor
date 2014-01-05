$(document).ready(function() {
  $('body').keydown(function(e) {
    if (characters[e.keyCode] != undefined) {
      if (!e.shiftKey) {
        $('#editor').append(characters[e.keyCode]);
      }
      else {
        $('#editor').append(shift_characters[characters[e.keyCode]]);
      }
    }
    else if (e.keyCode == 37) { //left arrow
      //todo
    }
    else if (e.keyCode == 38) {
      //up arrow todo
    }
    else if (e.keyCode == 39) {
      //right arrow todo
    }
    else if (e.keyCode == 40) {
      //down arrow todo
    }
    else if (e.keyCode == 46) {
      //delete todo
    }
    else if (e.keyCode == 8) {
      var text = $('#editor').html();
      text = text.substring(0, text.length - 1);
      $('#editor').html(text);
      return false;
    }
  });
});
