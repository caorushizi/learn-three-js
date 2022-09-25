import Event from '../utils/event'

class Model {
  private stage: string
  private readonly stageChanged: Event

  constructor () {
    this.stage = ''
    this.stageChanged = new Event(this)
  }

  getStage () {
    return this.stage
  }

  setStage (stage: any) {
    this.stage = stage
    this.stageChanged.notify({
      stage
    })
  }
}

export default new Model()
