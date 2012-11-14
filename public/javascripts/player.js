define(['jquery'], function($) {

  var Player = {
    player: $('#player'),
    play: function(src) {
      $(player).attr('src', src);
      player.play();
    }
  }

  return Player;
});
