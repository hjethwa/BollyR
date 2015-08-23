'use strict';

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '480',
    width: '640',
    videoId: 'GiG6z_H2m4M',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.loadVideoById("cnYqtB9aSXg");
  event.target.setPlaybackQuality("hd1080");

  var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBjzG1Xi1MrGsuQPutHd9v6yX4lGxSyqTE&channelId=UCq-Fj5jknLsUf-MWSy4_brA&part=snippet,id&order=date&maxResults=50";

  $.get(url, function(data, textStatus)
  {
    var listItem = $('<li>').append('<span>').append(data.items[23].id.videoId);
    $('#currentPlaylistList').append(listItem);

    playVideo(data.items[23].id.videoId + "");
  });
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    //setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.pauseVideo();
}

function playVideo(id) {
  player.loadVideoById(id);
}




