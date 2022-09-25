import * as THREE from 'three'
import { Scene } from 'three'

export default class GamePage {
  private readonly callbacks: any
  public scene?: Scene

  constructor (callbacks: any) {
    this.callbacks = callbacks
  }

  init (): void {
    console.log('game page')
    console.log(111)

    const width = window.innerWidth
    const height = window.innerHeight

    const canvas = document.getElementById('myCanvas')
    if (canvas == null) {
      console.log('没有初始化 canvas')
      return
    }
    const renderer = new THREE.WebGLRenderer({
      canvas
    })
    const scene = new THREE.Scene()
    this.scene = scene
    const camera = new THREE.OrthographicCamera(-width / 2, width / 2,
      height / 2, -height / 2, -1000, 1000)

    renderer.setClearColor(new THREE.Color(0x000000))
    renderer.setSize(width, height)

    const triangleShape = new THREE.Shape()
    triangleShape.moveTo(0, 100)
    triangleShape.lineTo(-100, -100)
    triangleShape.lineTo(100, -100)
    triangleShape.lineTo(0, 100)

    const geometry = new THREE.ShapeGeometry(triangleShape)
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      side: THREE.DoubleSide
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = 0
    mesh.position.y = 0
    mesh.position.z = 1
    scene.add(mesh)

    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 0
    camera.lookAt(new THREE.Vector3(0, 0, 1))

    let currentAngle = 0
    let lastTimestamp = Date.now()

    const animate = (): void => {
      const now = Date.now()
      const duration = now - lastTimestamp
      lastTimestamp = now
      currentAngle = currentAngle + duration / 1000 * Math.PI
    }

    const render = (): void => {
      // animate()
      mesh.rotation.set(0, 0, currentAngle)
      renderer.render(scene, camera)
      requestAnimationFrame(render)
    }

    render()
  }

  restart (): void {
    console.log('game page restart')
  }
}
