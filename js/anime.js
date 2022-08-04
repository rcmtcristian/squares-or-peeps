anime({
  targets: '.containerTwo .boxes',
  scale: [
    { value: .1, easing: 'easeOutSine', duration: 700 },
    { value: 1, easing: 'easeInOutQuad', duration: 800 }
  ],
  translateX: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
  translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'y' }),
  translateX: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
  translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'y' }),
  rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: 'center', axis: 'x' }),
  delay: anime.stagger(200, { grid: [14, 5], from: 'center' }),
  easing: 'easeInOutQuad',
  delay: anime.stagger(600, { grid: [18, 5], from: 'center' }),
  // translateX: function (el) {
  //   return el.getAttribute('data-x');
  // },
  // translateY: function (el, i) {
  //   return 50 + (-50 * i);
  // },
  // scale: function (el, i, l) {
  //   return (l - i) + .25;
  // },
  // rotate: function () { return anime.random(-360, 360); },
  // borderRadius: function () { return ['50%', anime.random(10, 35) + '%']; },
  // duration: function () { return anime.random(1200, 1800); },
  // delay: function () { return anime.random(0, 400); },



  loop: true,
  direction: 'alternate',
});


const timeline = anime.timeline({
  duration: 5500,
  easing: 'easeInSine',
  borderRadius: ['0%', '50%'],
  targets: '.containerTwo ',
});


timeline
  .add({
    rotate: {
      value: '1turn',
      easing: 'easeInOutSine'
    },
  })





const timelineTwo = anime.timeline({
  duration: 5500,
  easing: 'easeInSine',
  targets: '.boxes',
});


timelineTwo
  .add({
    backgroundColor: 'rgba(225, 231, 231,1)',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
    direction: 'alternate',
  }, '-=400');
