'use strict';

interface ReservationInt {
  getDowBooking(): string;
  getCodeBooking(): string;
}
class Reservation implements ReservationInt {
  
  getDowBooking(): string{
    let DOW: string[] = [ 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN' ]
    return DOW[Math.floor(Math.random() * DOW.length)];
  };

  getCodeBooking(): string{
    
    let characters: string[] = [];
    let code: string = '';

    for (let i: number = 48; i <= 57; i++) {
      characters.push(String.fromCharCode(i))
    } for (let j: number = 65; j <= 90; j++) {
      characters.push(String.fromCharCode(j))
    } for (let k: number = 0; k < 8; k++) {
      code += characters[Math.floor(Math.random() * characters.length)];
    } return code;
  };

  printReservation(): void{
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
  }

}

let reservation1 = new Reservation();

reservation1.printReservation();
