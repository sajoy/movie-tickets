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
     return (this.movie.showtime < 1800) ? true : false;
   },
   isWeekend: function() {
     return (this.movie.day === 'Friday' || this.movie.day === 'Saturday' || this.movie.day === 'Sunday') ? true : false;
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

var Movie = {};


$(function() {
  var newTicket = Object.create(Ticket);

  var movie1 = Object.create(Movie);
  movie1.name = "Interstellar";
  movie1.showtimes = [1400, 1600,1830];

  var movie2 = Object.create(Movie);
  movie2.name = "Gone Girl";
  movie2.showtimes = [1410, 1700,2000];

  var movie3 = Object.create(Movie);
  movie3.name = "SpongeBob Squarepants the Musical";
  movie3.showtimes = [1000, 1400,1730];

  var movies = [movie1, movie2, movie3];


  $('#day5').click(function() {
    var content = "";

    for (var i = 0; i < 3; i++) {

      content = "<div class='movie'> <h2>";
      content += movies[i].name;
      content += "</h2>";

      movies[i].showtimes.forEach(function(movieTime) {
        content +="<span class='showtime'>" + movieTime + "</span><br>";
      });

      content += "</div>";

      $('#movie-options').append(content);
    }





// Populating showtimes of movie1

  $('.showtime').each(function() {
    $(this).click(function() {
      newTicket.showtime = this.innerHTML;
      $("#ticket-showtime").text(newTicket.showtime);
      newTicket.day = 'Thursday';
      $("#ticket-day").text(newTicket.day);
      alert(this.parent);
    });
  });



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
