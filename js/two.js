
let cont = document.querySelector('.hero')


const two = new Two({
  type: Two.Types.svg,
  fullscreen: true,
  autostart: true
}).appendTo(cont);

// two.renderer.domElement.style.background = '#fcb215';
// two.renderer.domElement.style.cursor = 'none';

const cx = two.width / 0.6;
const cy = two.height / 0.6;
const delta = new Two.Vector();
const mouse = new Two.Vector(cx, cy);
const drag = .93;
const radius = 10;

let shape = new Two.Circle(0,0, radius, 32);

let ball = new Two.Path(shape.vertices, true, true);
ball.position.set(cx, cy);
ball.noStroke().fill = '#f1f1f1'

for (let i = 0; i < ball.vertices.length; i++) {
  const v = ball.vertices[i];
  v.origin = v.clone();
}


two.add( ball);

/* Listening for the mouse to move and then updating the mouse position. */

window.addEventListener('mousemove', function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

}, false);


/* Preventing the default behavior of the touchstart event. */
window.addEventListener('touchstart', function(){
  e.preventDefault();
  return false;
}, false)

/* Preventing the default behavior of the touchstart event. */
window.addEventListener('touchmove', function(e){
  e.preventDefault();
  const touch = e.changedTouches[0];
  mouse.x = touch.pageX;
  mouse.y = touch.pageY

  return false
}, false)




two.bind('update', function(){
  delta.copy(mouse).subSelf(ball.translation);

  for (let i = 0; i < ball.vertices.length; i++) {

 /* It's calculating the distance between the mouse and the center of the circle. */
 
    const v = ball.vertices[i];
    const dist = v.origin.distanceTo(delta);
    const pct = dist / radius;
/* It's calculating the distance between the mouse and the center of the circle. */

    const x = delta.x * pct;
    const y = delta.y * pct;
/* It's calculating the distance between the mouse and the center of the circle. */

    const destx = v.origin.x - x;
    const desty = v.origin.y - y;

 /* It's calculating the distance between the mouse and the center of the circle. */
    v.x += (destx - v.x) * drag;
    v.y += (desty - v.y) * drag;



  }

  ball.translation.addSelf(delta);

})
