import { swarmBackground } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

const bg = swarmBackground({
  el: document.getElementById('app'),
  eventsEl: document.body,
  gpgpuSize: 256,
    color: [Math.random() * 0xffffff, Math.random() * 0xffffff],
  geometry: 'default'
})

bg.three.camera.position.set(0, 0, 200)

document.body.addEventListener('click', () => {
  bg.setColors([Math.random() * 0xffffff, Math.random() * 0xffffff])
})
