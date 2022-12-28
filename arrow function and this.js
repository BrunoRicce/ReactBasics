let nepal ={
  montains: ['Everest', 'fish Tail', 'Annapurna'],
  //addd method
  printWithDash: function(){
    setTimeout(() =>console.log(this.montains.join("-")), 3000)
  }
}

nepal.printWithDash();