import controller, { Controller } from './controller'

class Game {
  private readonly controller: Controller

  constructor () {
    this.controller = controller
  }

  init (): void {
    this.controller.initPages()
  }
}

export default new Game()
