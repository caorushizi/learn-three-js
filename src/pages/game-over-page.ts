import * as THREE from 'three'
import { Mesh, MeshBasicMaterial, PlaneGeometry, Scene, Texture } from 'three'

export default class GameOverPage {
  private readonly callbacks: any

  private canvas?: HTMLCanvasElement
  private texture?: Texture
  private material?: MeshBasicMaterial
  private geometry?: PlaneGeometry
  private obj?: Mesh<PlaneGeometry, MeshBasicMaterial>
  private context?: CanvasRenderingContext2D | null
  private scene?: Scene

  constructor (callbacks: any) {
    this.callbacks = callbacks
  }

  init (options: any): void {
    console.log('game over page init')
    this.initGameOverCanvas(options)
  }

  show (): void {
    console.log('game over page show')
  }

  private initGameOverCanvas (options: any): void {
    console.log('lkjlkjlkj')
    const aspect = window.innerHeight / window.innerWidth
    this.scene = options.scene
    this.canvas = document.createElement('canvas')

    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight

    this.texture = new THREE.Texture()
    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true,
      side: THREE.DoubleSide
    })

    this.geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight)
    this.obj = new THREE.Mesh(this.geometry, this.material)

    this.obj.position.z = 1

    this.context = this.canvas.getContext('2d')
    if (this.context == null) {
      throw new Error('123123')
    }
    this.context.fillStyle = '#333'
    this.context.fillRect((window.innerWidth - 200) / 2, (window.innerHeight - 100) / 2, 100, 100)

    console.log('this.scene', this.scene)
    // this.texture.needsUpdate = true
    this.scene?.add(this.obj)
  }
}
