(() => {
  console.log()

  String.prototype.capIt = function(){ return this.replace(this.charAt(), this.charAt().toUpperCase()); };

  const sigils = document.querySelectorAll('.sigilContainer'),
        lightbox = document.querySelector('.lightbox'),
        closeLightbox = document.querySelector('.close-lightbox'),
        vidPlayer = document.querySelector('video');

  function loadMovie(){
    lightbox.classList.add('show-lightbox');

  var house = this.className.split(' ')[1].capIt();


    vidPlayer.play();
  }

  function closeLBox(){
    lightbox.classList.remove('show-lightbox');
    vidPlayer.pause();
    vidPlayer.currentTime = 0;
  }

  sigils.forEach(sigil => sigil.addEventListener('click', loadMovie));
  closeLightbox.addEventListener('click', closeLBox);
})();
