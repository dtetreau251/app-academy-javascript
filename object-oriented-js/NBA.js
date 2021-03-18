//constructor function for an NBA player//
function NBAPlayer(name, team, position) {
  this.name = name;
  this.team = team;
  this.position = position; 
}

//creating an instance of an NBA Player or an instance of the NBA object//
let curry = new NBAPlayer("Steph Curry", "GS Warriors", "Point Guard");

//adding dunk method//
NBAPlayer.prototype.dunk = function() {
  console.log(`$(this.name} dunks!`);
}

NBAPlayer.prototype.dunk = function() {
  console.log(`${this.name} dunks!`)
}

console.log(curry.dunk());