// console.log("You Sunk My BattleShip!!!")


class Board {
  constructor(){
    this.boardsize = 10;
    this.numShips = 2;
    this.shipsLength = 3;
    this.shipSunk = 0;
    this.ships = [
      {locations: [0, 0, 0], hits: ["", "", ""]},
      {locations: [0, 0, 0], hits: ["", "", ""]}
    ];
    this.board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 3, 0, 0, 0, 4, 0, 0],
      [0, 0, 0, 3, 0, 0, 0, 4, 0, 0],
      [0, 0, 0, 3, 0, 0, 0, 4, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 4, 0, 0],
      [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    // setting location to 0 so we can assign values later, 
    // hits have no value till player guesses
  }
  updateBoard(row, col) {
    const row = i;
    const col = j;
    for (let i = 0; i < this.board.length; i++){
      for (let j = 0; j < this.board[i].length; j++){
        if (this.board[i][j] == 3 ){
          console.log("hit submarine");
        }
        if (this.board[i][j] == 4 ){
        console.log("hit battleship");
        }
        if (this.board[i][j] == 2 ){
        console.log("hit minesweeper");
        }
        if (this.board[i][j] == 3 ){
        console.log("hit aircraft carrie");
        } else {
        console.log("miss");
        }
      }
    }
    // look at this.board and show d where there s a2, s where theres a 3, etc.
  }
  
}

$('.square top').on('click', (e) => {
  // $(e.currentTarget).css('background-color','red');
});
// console.log(Board.updateBoard(Board.board[3][3]))
const gameboard = new Board ();


const game = {
  // properties
  // playerCurrentlyPlacingShips: 1
  start() {
    // prompt user to place ships

  }
}

const player = {
  // board:
  ships: [], // see below
  /*
  {
    name: "submarine",
    length: 3,
    segments: [{
      hit: true/false
    }],
    location: coord of top or left -- set location to null to start,
    orientation: vert or horiz // or you could use a boolean
    isPlaced: false,
    image: submarine.gif
  }
  */
  getShipCurrentlyBeingPlaced() {

    /// return first ship in array that doesn't have null as its location;

    // unless they all have been placed then return false
  }
  // nextShip() {

    // if above method returns false, move on to the battle

    // else

    //get the ship that needs to be placed next (use above method)
    // display that ship in the window and prompt user to place it


  // }
  // placeShip(coord) {
    // figure out correct coords 

    // if it's ok to add ship here

      // edit location of this ship in the ships array

      // convert to correct array indices, and update the "board" array
      
      // modify the board: 
      // board.update();

  // }

}



//listener on the entire board

  // adjust current player's ship data
  // get coords from specific id clicked



// listener for rotate

  // this switches orientation of ship currently being placed
  // switch image in display 




//Start New Game Button - relaods page
$('.reload').on('click', (e) => {
  location.reload();
});


//get a button to change red when clicked
$('.top').on('click', (e) => {
  $(e.currentTarget).css('background-color','red');
});

// const shipsLength = {
// "Battleship":{ "Length": 4}, 
// "Destroyer": {"length": 3}
// };

// $('homeFleet') = shipsLength
// const startNewGame => (){
//   for (let i = 0; i < 10; i++)
//   if ((this.board[i] !== this.board[i][0]) & (this.board[i] !== this.board[0])){
       
//     $(e.currentTarget).css('background-color','green');
//   }
// }


// const placeShip = () => {
//   if (game.board === 0) {
//     $(e.currentTarget).css('background-color','red');
//   } else if (game.board === 1){
//     $(e.currentTarget).css('background-color','green');
//   }

// }





// class Board {
//   constructor(){
//     this.boardsize = 10;
//     this.numShips = 2;
//     this.shipsLength = 3;
//     this.shipSunk = 0;
//     this.ships = [
//     // setting location to 0 so we can assign values later, hits have no value till player guesses
//     {locations: [0, 0, 0], hits: ["", "", ""]}
//     {locations: [0, 0, 0], hits: ["", "", ""]}
//     ];
//   }
//   fire(guess){
//     //
//     for (var i=0; i < this.numShips; i++){
//       //keeping track of ships that are hit
//       var ship = this.ships[i];
//       // put each guess into an index 
//       var index = ship.locations.indexof(guess)
//       //sh
//       if (ship.hits[index] === "hit") {
//         view.displayMessage("you have already hit this location");
//         return true;
//       } else if (index >= 0) {
//         ship.hits[index] = "hit";
//         ciew.displayMessage(guess);
//         view.displayMessage("Hit!");
//         if (this.isSunk(ships)) {
//           view.displayMessage("You sank my battleship");
//           this.shipsSunk++
//         }
//         }
//         view.displayMiss(guess)
//         view.displayMessage("You Missed!");
//         return false;
//     }
//   }

//   isSunk(ship){
//     for (var i = 0; i < this.shipsLength; i++){
//       if (ship.hits[i] !== "hit"){
//         return false;
//       }
//     }
//     return true;
//   }
//   generateShipLocations(){
//     var locations;

//     for (var 1 = 0; i < this.numShips; i++){
//       do {
//         locations = this.gerateShip();
//       } while (this.collision(locations));
//       this.ships[i].locations = locations;
//     }
//     console.log("ships array: ");
//     console.log(this.ships)
//   }
//   generateShip (){
//     var directon = Math.floor(Math.random() * 2);
//     var row, col;

//     if (direction === 1){
//       row= Math.floor(Math.random() * this.boardsize)
//       col = Math.floor(Math.random() * (this.boardsize - this.shipsLength +1))
//     } else {
//       col= Math.floor(Math.random() * this.boardsize)
//       row = Math.floor(Math.random() * (this.boardsize - this.shipsLength +1))
//     }
//     var newShipLocations = [];
//     for (var i = 0; i < this.shipsLength; i++){
//       if (direction === 1){
//         newShipLocations.push(row + "" + (col + i));
//       } else{
//           newShipLocations.push((row + 1) + "" + col)
//       }
//     }
//     return newShipLocations
//   }
//   //as long a ships locations are not the same as the length
//   collisions(locations) {
//     for (var i = 0; i < this.numShips; i ++){
//       var ship = this.ships[i];
//       for (var j = 0; j < locations.length; j++){
//         if (ship.locations.indexof(locations[j]) >= 0) {
//           return true;
//         }
//       }
//     }
//   };
//   var view = {
//     displayMessage: function(msg){
//      var messageArea = document.getElementByID("messageArea");
//       messageArea.innerHTML = msg;
//     } 
//   }
//   displayHit: function(location){
//     var cell = document.getElementByID(location)
//     cell.setAttribute("class", "hit")
//   }
//   displayMiss: function(location){
    
//   }
// };






