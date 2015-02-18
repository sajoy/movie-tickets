var Ticket = {
   isOld: function() {
     if ( this.age > 59 ) {
       return true;
     } else {
       return false;
     }
   },
   isYoung: function() {
     if ( this.age < 13 ) {
       return true;
     } else {
       return false;
     }
   },
   isMatinee: function() {
     return (this.showtime < 1800) ? true : false;
   },
   isWeekend: function() {
     return (this.day === 'Friday' || this.day === 'Saturday' || this.day === 'Sunday') ? true : false;
   },
   whatPrice: function() {
     if (this.isYoung()) {
       return this.price = 2;
     } else if (this.isOld() || this.isMatinee()) {
       return this.price = 3;
     } else {
       return this.price = 4;
     }
   }
};
