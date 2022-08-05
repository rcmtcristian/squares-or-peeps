
const playIt = anime({
  targets: '.containerTwo .boxes',
  scale: [
    { value: .1, easing: 'easeOutSine', duration: 700 },
    { value: 1, easing: 'easeInOutQuad', duration: 800 }
  ],
  translateX: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
  translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'y' }),
  translateX: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
  //  translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'y' }),
  translateY: function (el, i) {return 50 + (50 * i)},
  delay: function () { return anime.random(0, 400); },
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
  backgroundColor:'black',
  
});


timelineTwo
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
  easing: 'easeOutExpo', 
  direction: 'alternate', 
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
  easing: 'easeOutExpo', 
  direction: 'alternate', 
  loop: true 
});

outerRotate
  .add({
    rotateZ: 365,

    easing: 'spring',
    easing: 'easeInSine',


  })


document.querySelector('#actionCircle').onclick = InnerRotate.restart;
document.querySelector('#actionCircle').onclick = outerRotate.restart;


anime({
  targets: '.hero',
  left: '240px',
  backgroundColor: '#fcfcfc',
  easing: 'easeInOutQuad'
})


/* ----------------------------------> */

function fitElementToParent(el, padding) {
  var timeout = null;
  function resize() {
    if (timeout) clearTimeout(timeout);
    /* Setting the value of the scale to 1. */
    anime.set(el, { scale: 1 });
    /* Setting the value of pad to padding if padding is truthy, otherwise it is setting the value of
    pad to 0. */
    var pad = padding || 0;
    var parentEl = el.parentNode;
    var elOffsetWidth = el.offsetWidth - pad;
    var parentOffsetWidth = parentEl.offsetWidth;
    var ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, { scale: ratio }), 10);
  }
  resize();
}

var advancedStaggeringAnimation = (function () {

  var staggerVisualizerEl = document.querySelector('.stagger-visualizer');
  var dotsWrapperEl = staggerVisualizerEl.querySelector('.dots-wrapper');
  /* Creating a document fragment. */
  /* 
  Document.createDocumentFragment()
  Creates a new empty DocumentFragment into which DOM nodes can be added to build an offscreen DOM tree.
  */
  var dotsFragment = document.createDocumentFragment();
  var grid = [18, 10];

  /* Multiplying the first and second elements of the grid array. */
  var numberOfElements = grid[0] * grid[1];

  fitElementToParent(staggerVisualizerEl, 0);
  /* Creating a document fragment and appending it to the dotsWrapperEl. */

  for (var i = 0; i < numberOfElements; i++) {
    var dotEl = document.createElement('div');
    dotEl.classList.add('dot');
    dotsFragment.appendChild(dotEl);
  }

  /* Appending the document fragment to the dotsWrapperEl. */
  dotsWrapperEl.appendChild(dotsFragment);

  /* Creating a variable called index and assigning it to a random number between 0 and the number of
  elements minus 1. It is also creating a variable called nextIndex and assigning it to 0. */
  var index = anime.random(0, numberOfElements - 1);
  /* Creating a variable called nextIndex and assigning it to 0. */
  var nextIndex = 0;

  function play() {

    /* Creating a variable called nextIndex and assigning it to a random number between 0 and the number
    of elements minus 1. */

    nextIndex = anime.random(0, numberOfElements - 1);

    animation = anime.timeline({
      easing: 'easeInOutQuad',
      complete: play
    })
      .add({
        targets: '.stagger-visualizer .dot',
        keyframes: [
          {
            translateX: anime.stagger('-2px', { grid: grid, from: index, axis: 'x' }),
            translateY: anime.stagger('-2px', { grid: grid, from: index, axis: 'y' }),
            duration: 100
          }, {
            translateX: anime.stagger('4px', { grid: grid, from: index, axis: 'x' }),
            translateY: anime.stagger('4px', { grid: grid, from: index, axis: 'y' }),
            scale: anime.stagger([2.6, 1], { grid: grid, from: index }),
            duration: 225
          }, {
            translateX: 0,
            translateY: 0,
            scale: 0.01,
            duration: 1200,
          }
        ],
        delay: anime.stagger(130, { grid: grid, from: index })
      }, 30)


    index = nextIndex;

  }

  play();

})();

/* ----------------------------------------------------------------------------->*/

const boneOfMySword = anime.timeline({
  targets: '.Swords div',
  easing: 'easeInOutSine',
  delay: anime.stagger(50),
  loop: true,
  autoplay: false,
  duration: 800,
  loopComplete: (a) => console.log('end'),
})

  .add({
    translateX: anime.stagger('1rem', { grid: [9, 9], from: 'center', axis: 'x' }),
    delay: anime.stagger(200, { grid: [2, 9], from: 'center', direction: 'reverse' }),
    rotate: anime.stagger([40, -40], { from: 'first' }),
    scale: function () {
      return anime.random(0, -5);
    },
    easing: 'easeOutElastic(1, .18)',
    duration: 750,

  })
  .add({
    translateX: anime.stagger([25, -25], { from: 'first' }),
    translateY: 0,
    rotate: anime.stagger([40, -40], { from: 'first' }),

    delay: anime.stagger(10, { from: 'first' }),
  })
  .add({

    translateY: anime.stagger([-240, 240]),
    rotate: () => anime.random(-100, 100),
    scale: anime.stagger([1, 3], { from: 'center' }),
    delay: anime.stagger(10, { from: 0 }),

  })
  .add({
    translateX: 0,
    translateY: 0,
    scale: 1,
    rotate: 360,
    duration: 2000,
    delay: 0,
  });


document.querySelector('#actionSword').onclick = boneOfMySword.restart;
