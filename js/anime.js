
const playIt = anime({
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




  
}


);


const spread = anime.timeline({
  duration: 5500,
  easing: 'easeInSine',
  borderRadius: ['0%', '50%'],
  targets: '.containerTwo ',
});


spread
  .add({
    rotate: {
      value: '2turn',
      easing: 'easeInOutSine',
     
    },
  })








const timelineTwo = anime.timeline({
  duration: 5500,
  easing: 'easeInSine',
  targets: '.boxes',
  direction: 'alternate',
  backgroundColor:'black'
});


timelineTwo
  // .add({
  //   translateX: 0,
  //   scale: 1,
  //   easing: 'spring'
  // })


  .add({
    backgroundColor: 'rgba(225, 231, 231,1)',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
  }, '-=400')


  .add({
    scale: [
      { value: .1, easing: 'easeOutSine', duration: 500 },
      { value: 1, easing: 'easeInOutQuad', duration: 1200 }
    ],
    delay: anime.stagger(200, { grid: [14, 5], from: 'center' })
  })




document.querySelector('#actionGrid').onclick = playIt.restart;

document.querySelector('#actionGrid').onclick = timelineTwo.restart;
document.querySelector('#actionGrid').onclick = spread.restart;





const InnerRotate = anime.timeline({
  targets: '.semicircle',
  delay: function (el, i,) { return i * 100 },
  duration: 9000,
  easing: 'easeInSine',
  easing: 'easeOutExpo', // Can be inherited
  direction: 'alternate', // Is not inherited
  loop: true // Is not inherited
});


InnerRotate
  .add({
    rotateZ: 469,
    easing: 'spring',
    easing: 'easeInOutElastic(18, 4)',
    easing: 'easeInSine',

  })


const outerRotate = anime.timeline({
  targets: '.cir',
  delay: function (el, i,) { return i * 5 },
  duration: 8800,
  easing: 'easeInSine',
  easing: 'easeOutExpo', // Can be inherited
  direction: 'alternate', // Is not inherited
  loop: true // Is not inherited
});

outerRotate
  .add({
    rotateZ: 365,

    easing: 'spring',
    easing: 'easeInSine',


  })


document.querySelector('#actionCircle').onclick = InnerRotate.restart;
document.querySelector('#actionCircle').onclick = outerRotate.restart;
document.querySelector('#actionCircle').onclick = add.restart;
