const images = document.querySelectorAll('.gallery img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    const fullscreen = document.createElement('div');
    fullscreen.classList.add('fullscreen');
    const fullscreenImage = document.createElement('img');
    fullscreenImage.src = image.src;
    fullscreenImage.alt = image.alt;
    fullscreen.appendChild(fullscreenImage);
    document.body.appendChild(fullscreen);
    fullscreen.addEventListener('click', () => {
      fullscreen.remove();
    });
  });
});
