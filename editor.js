$(document).ready(function() {
  var lines = [[]];
  var current_line = lines[0];
  $('body').keydown(function(e) {
    if (characters[e.keyCode] != undefined) {
      if (!e.shiftKey) {
        current_line.push(characters[e.keyCode]);
      }
      else {
        current_line.push(shift_characters[characters[e.keyCode]]);
      }
      draw();
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
    else if (e.keyCode == 8) { //backspace
      if (current_line.length == 0 && lines.length > 1) {
          var index = lines.indexOf(current_line);
          lines.splice(index, 1);
          current_line = lines[index - 1];
      }
      else {
        current_line.pop();
      }
      console.log(lines[0]);
      draw();
      return false;
    }
    else if (e.keyCode == 13) { //enter
      lines.push([]);
      current_line = lines[lines.length - 1];
      draw();
      return false;
    }
    else if (e.keyCode == 9) {
      current_line.push('    ');
      draw();
      return false;
    }
  });
  function draw() {
    $('#editor').html("");
    for (var x = 0; x < lines.length; x++) {
      $('#editor').append('<div class="line" id="'+x+'"></div>');
      for (var y = 0; y < lines[x].length; y++) {
        $('#'+x+'.line').append(''+lines[x][y]+'');
      }
    }
  }
});
