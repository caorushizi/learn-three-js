import view from './view'
import model from './model'

export class Controller {
  private readonly view: any
  private readonly model: any

  constructor () {
    this.view = view
    this.model = model
    this.model.stageChanged.attach((sender, args) => {
      const stageName = args.stage
      switch (stageName) {
        case 'game-over':
          this.view.showGameOverPage()
          break
        case 'game':
          this.view.showGamePage()
          break
        default:
      }
    })
  }

  showGameOverPage (): void {
    this.view.showGameOverPage()
  }

  restartGame (): void {
    this.view.restartGame()
  }

  initPages (): void {
    const gamePageCallbacks = {
      showGameOverPage: this.showGameOverPage.bind(this)
    }
    const gameOverPageCallbacks = {
      gameRestart: this.restartGame.bind(this)
    }
    this.view.initGamePage(gamePageCallbacks)
    this.view.initGameOverPage(gameOverPageCallbacks)
  }
}

export default new Controller()
