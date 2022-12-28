//super class
class Holiday {
  constructor (destination, days){
    this.destination = destination
    this.days = days
  }

  info (){
    console.log(`${this.destination} levara ${this.days}`)
  }
}

//children class
class Expedition extends Holiday{
  constructor(destination,days,gear)
  {
    super(destination,days)
    this.gear = gear
  }

  info()
  {
    super.info()
    console.log(`e leve ${this.gear.join(' e ')}`)
  }
}

const ex =  new Expedition("OCZ",2,['agua','oculos','protetor'])
ex.info()