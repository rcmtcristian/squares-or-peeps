
let ac = document.getElementById('actionCircle')

ac.addEventListener('click', showCir)

function showCir() {
  const x = document.querySelector(".semicircle");
   x.classList.toggle('show')
 
}

let ag = document.getElementById('actionGrid')

ag.addEventListener('click', showGrid)

function showGrid() {
  const b = document.querySelector(".containerTwo");
  b.classList.toggle('show')
}

let aS = document.getElementById('actionSword')

aS.addEventListener('click', showSword)

function showSword() {
  const z = document.querySelector(".Swords");
  z.classList.toggle('show')
}







class BigCircle {
  constructor() {
    this.root = document.body
    this.cursor = document.querySelector(".pont")
    this.circle = document.querySelector(".pont .circle")

    this.pointerX = 0
    this.pointerY = 0
    this.cursorSize = 100

    this.circleStyle = {
      boxSizing: 'border-box',
      position: 'fixed',
      top: `${this.cursorSize / -2}px`,
      left: `${this.cursorSize / -2}px`,
      zIndex: '2147483647',
      width: `${this.cursorSize}px`,
      height: `${this.cursorSize}px`,
      backgroundColor: '#fff0',
      borderRadius: '50%',
      transition: '500ms, transform 100ms',
      userSelect: 'none',
      pointerEvents: 'none'
    }

    if (CSS.supports("backdrop-filter", "invert(1)")) {
      this.circleStyle.backdropFilter = 'invert(1) '
      this.circleStyle.backgroundColor = '#fff0'
    } else {
      this.circleStyle.backgroundColor = '#000'
      this.circleStyle.opacity = '0.75'
   
    }

    this.init(this.circle, this.circleStyle)
  }

  init(el, style) {
    Object.assign(el.style, style)
    this.cursor.removeAttribute("hidden")

  }

  move(event) {
    this.pointerX = event.pageX
    this.pointerY = event.pageY + this.root.getBoundingClientRect().y

    this.circle.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`

    if (event.target.localName === 'button' ||
      event.target.localName === 'a' ||
      event.target.onclick !== null ||
      event.target.className.includes('pont-hover')) {
      this.hover()
    }
  }

  hover() {
    this.circle.style.transform += ` scale(1.5)`
  }

  click() {
    this.circle.style.transform += ` scale(0.75)`
    setTimeout(() => {
      this.circle.style.transform = this.circle.style.transform.replace(` scale(0.75)`, '')
    }, 35)
  }

  remove() {
    this.circle.remove()
    this.dot.remove()
  }
}

(() => {
  const cursor = new BigCircle()
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.onmousemove = function (event) {
      cursor.move(event)
    }
    document.onclick = function () {
      cursor.click()
    }
  } else {
    cursor.remove()
  }

})()
