class Event {
  private readonly sender: any
  private readonly listeners: any[]

  constructor (sender: any) {
    this.sender = sender
    this.listeners = []
  }

  attach (callback: any) {
    this.listeners.push(callback)
  }

  notify (args: any) {
    for (const listener of this.listeners) {
      listener(this.sender, args)
    }
  }
}

export default Event
