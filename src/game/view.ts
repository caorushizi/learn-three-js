import GamePage from '../pages/game-page'
import GameOverPage from '../pages/game-over-page'

class View {
  private gameOverPage?: GameOverPage
  private gamePage?: GamePage

  showGameOverPage (): void {
    this.gameOverPage?.show()
  }

  restartGame (): void {
    this.gamePage?.restart()
  }

  showGamePage (): void {
    this.gameOverPage?.hide()
    this.gamePage?.restart()
  }

  initGamePage (callbacks: any): void {
    this.gamePage = new GamePage(callbacks)
    this.gamePage.init()
  }

  initGameOverPage (callbacks: any): void {
    this.gameOverPage = new GameOverPage(callbacks)
    this.gameOverPage.init({
      scene: this.gamePage?.scene
    })
  }
}

export default new View()
