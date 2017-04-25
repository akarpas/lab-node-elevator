class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = "Up";
    this.listener = '';
  }

  start() {
    this.listener = setInterval(() => {
      this.update();
    },  1000);
  }

  stop() {
    clearInterval(this.listener);
  }

  update() {
    var index = 0;
    while (this.requests[index] != null) {

    // for (let i=0; i<this.requests.length; i++) {
    if (this.requests[index] === this.floor) {
      this.requests.splice(index,1);
      this._passengersLeave(index);
      this._passengersEnter(index);
    } else if (this.requests[index] > this.floor) {
      this.direction = 'Up';
      this.floorUp();
      this.log();
    } else {
      this.direction = 'Down';
      this.floorDown();
      this.log();
    }
      // if (this.requests[index] > this.floor) {
      //     this.direction = 'Up';
      //     // this.log();
      //
      //     this.floorUp();
      //     this.log();
      //
      //     if (this.requests[index] === this.floor) {
      //       this.requests.splice(index,1);
      //     }
      // } else if (this.requests[index] < this.floor) {
      //     this.direction = 'Down';
      //     // this.log();
      //     this._passengersLeave(index);
      //     this._passengersEnter(index);
      //     this.floorDown();
      //     this.log();
      //


      // } else {
        // console.log(this.requests);
      }
    
    console.log("All requests have been fulfilled!");

    this.stop();

  }

  _passengersEnter(index) {
    for (let j = 0; j<this.waitingList.length; j++) {
      if (this.waitingList[j].originFloor === this.floor) {
        this.passengers.push(this.waitingList[j]);
        this.requests.push(this.waitingList[j].destinationFloor);
        console.log(this.waitingList[j].name + ' has entered the elevator!');
        this.waitingList.splice(j,1);
      }
    }
    // this.update();
  }

  _passengersLeave(index) {
    for (let j = 0; j<this.passengers.length; j++) {
      if (this.passengers[j].destinationFloor === this.floor) {
        console.log(this.passengers[j].name + " has left the elevator");
        this.passengers.splice(j,1);
      }
    }
    // delete this.passengers[index];
    // this.update();

  }

  floorUp() {

      if (this.floor < this.MAXFLOOR) {
        this.direction = 'Up';
        this.floor++;

        // console.log(this.log());
      // } else if (this.floor === this.MAXFLOOR) {
      //   this.floorDown();
      }

  }

  floorDown() {



    if (this.floor > 0) {
      this.direction = 'Down';
      this.floor--;
      // console.log(this.log());
    // } else if (this.floor === 0) {
    //   this.direction = 'n/a';
    }

  }

  call(person) {
    // this.requests.push(person);
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }

  log() {
    console.log( "Direction: " + this.direction + " | Floor: " + this.floor);
  }
}

module.exports = Elevator;
