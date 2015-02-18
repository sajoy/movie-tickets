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
    $('.showtime .times1 .showtime1').text('1600');
    $('.times1 .showtime2').text('1900');
    $('.times1 .showtime3').text('2130');



    $('#movie2').text('Gone Girl');
    $('.times2 .showtime1').text('1400');
    $('.times2 .showtime2').text('1700');
    $('.times2 .showtime3').text('2000');

    $('#movie3').text('The SpongeBob Squarepants Musical');
    $('.times3 .showtime1').text('1000');
    $('.times3 .showtime2').text('1400');
    $('.times3 .showtime3').text('1830');






    newTicket.day = 'Thursday';
    $("#ticket-day").text(newTicket.day);

// Populating showtimes of movie1
  for (var m = 1; m < 4; m++) {
    for (var i = 1; i < 4; i++) {
    var title = '#movie' + m;
    // alert(title);
      $('.times' + m + ' .showtime' + i).click(function () {
        newTicket.movieName = $(title).text();
        newTicket.showtime = parseInt($(this).text());
        $("#ticket-showtime").text(newTicket.showtime);
        $("#ticket-movie").text(newTicket.movieName);
      });
    }
  }

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

})
