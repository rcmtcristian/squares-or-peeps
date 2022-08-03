
let cont = document.querySelector('.hero')


const two = new Two({
  type: Two.Types.svg,
  fullscreen: true,
  autostart: true
}).appendTo(cont);

// two.renderer.domElement.style.background = '#fcb215';
// two.renderer.domElement.style.cursor = 'none';

const cx = two.width / 2;
const cy = two.height / 2;
const delta = new Two.Vector();
const mouse = new Two.Vector(cx, cy);
const drag = 0.33;
const radius = 10;

let cylinder = new Two.Circle(0,0, radius, 32);

let ball = new Two.Path(shape.vertices, true, true);
ball.position.set(cx, cy);
ball.noStroke().fill = '#f1f1f1'

for (let i = 0; i < ball.vertices.length; i++) {
  const v = ball.vertices[i];
  v.origin = v.clone();
}


two.add( ball);


window.addEventListener('mousemove', function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

}, false);
