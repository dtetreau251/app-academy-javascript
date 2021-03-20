function soundMaker(sound, times) {

  //this is aclosure
  //makeSound closure captures soudMaker variables
  function makeSound() {
    console.log(`${sound}`);
  }

  for(let i = 0; i < times; i++) {
    makeSound();
  }
}

soundMaker("woof", 1);
