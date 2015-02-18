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


$(function() {
  var newTicket = Object.create(Ticket);

  $("#movie-options h2").text(newTicket.movieName);

  $('#Thursday').click(function() {
    $('#movie1').text('Interstellar');
    $('.times1 .showtime1').text('1600');
    $('.times1 .showtime2').text('1900');
    $('.times1 .showtime3').text('2130');

    newTicket.day = 'Thursday';
    $("#ticket-day").text(newTicket.day);

    $('.times1 .showtime1').click(function () {
      newTicket.movieName = $('#movie1').text();
      newTicket.showtime = parseInt($(this).text());
      $("#ticket-showtime").text(newTicket.showtime);
      $("#ticket-movie").text(newTicket.movieName);
    });

    $('#calculate-price').submit(function(event) {
      event.preventDefault();
      // val inputtedYoung = parseInt($('#young').val());
      // val inputtedOld = parseInt($('#old').val());
      var inputtedAge = parseInt($('#input-age').val());

      newTicket.age = inputtedAge;
      newTicket.whatPrice();
      var price = newTicket.price;

      $('#final-price').text(price);
    });

  });

  // $('#Wednesday').click(function() {
  //   newTicket.movieName = 'Gone Girl';
  //   $('#movie-options h2').text(newTicket.movieName);
  //   $('.showtime1').text('3 pm');
  // });
  //
  // $('#Friday').click(function() {
  //   $('#movie-options h2').text(newTicket.movieName);
  //   $('.showtime1').text('4 pm');
  // });

})
