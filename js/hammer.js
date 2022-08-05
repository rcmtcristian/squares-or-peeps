let square = document.querySelector(".pics")

var hammertime = new Hammer(square);
hammertime.on('swipe ', function (ev) {
  square.textContent = ev.type + " gesture detected.";
  anime({
    targets: '.square',

    loop: true,
    translateX: [
      { value: 250, duration: 1000, delay: 500 },
      { value: 0, duration: 1000, delay: 500 }
    ],
    translateY: [
      { value: -40, duration: 500 },
      { value: 40, duration: 500, delay: 1000 },
      { value: 0, duration: 500, delay: 1000 }
    ],
    scaleX: [
      { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
      { value: 1, duration: 900 },
      { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
      { value: 1, duration: 900 }
    ],
    scaleY: [
      { value: [1.75, 1], duration: 500 },
      { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
      { value: 1, duration: 450 },
      { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
      { value: 1, duration: 450 }
    ],
    easing: 'easeOutElastic(1, .8)',

  })
});

hammertime.play()