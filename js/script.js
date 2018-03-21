(() => {
  console.log('video stuff fired!');

  const vidPlayer = document.querySelector('video'),
        playButton = document.querySelectorAll('button')[0],
        pauseButton = document.querySelectorAll('button')[1];
        rewindButton = document.querySelectorAll('button')[2];


  function volOn() {
    vidPlayer.muted = false;
  }

  function volOff(){
    vidPlayer.muted = true;
  }

  function rewindVid(){
    vidPlayer.currentTime = 0;
  }

  function playVid(){
    vidPlayer.play();
  }

  function pauseVid(){
    vidPlayer.pause();
  }

  vidPlayer.addEventListener('mouseover', volOn);
  vidPlayer.addEventListener('mouseout', volOff);

  rewindButton.addEventListener('click', rewindVid);
  playButton.addEventListener('click', playVid);
  pauseButton.addEventListener('click', pauseVid);

})();
