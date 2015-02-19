describe('Ticket', function() {
  describe('age', function() {
    it('returns the customer age', function() {
      var newTicket = Object.create(Ticket);
      newTicket.age = 88;
      expect(newTicket.age).to.equal(88);
    });
  });

  describe('isOld', function() {
    it('will return true if a customer is over 60', function() {
      var newTicket = Object.create(Ticket);
      newTicket.age = 61;
      expect(newTicket.isOld()).to.equal(true);
    });
  });

  describe('isYoung', function() {
    it('will return true if a customer is below 13', function() {
      var newTicket = Object.create(Ticket);
      newTicket.age = 15;
      expect(newTicket.isYoung()).to.equal(false);
    });
  });

  describe('isMatinee', function() {
    it('will return true if the movie is before 1800', function() {
      var newTicket = Object.create(Ticket);
      var newMovie = Object.create(Movie);
      newTicket.movie = newMovie;
      newTicket.movie.showtime = 2000;
      expect(newTicket.isMatinee()).to.equal(false);
    });
  });

  describe('isWeekend', function() {
    it('will return if true if it is the weekend!', function () {
      var newTicket = Object.create(Ticket);
      var newMovie = Object.create(Movie);
      newTicket.movie = newMovie;
      newTicket.movie.day = "Friday";
      expect(newTicket.isWeekend()).to.equal(true);
    });
  });

  describe('price', function() {
    it('returns the determined price', function() {
      var newTicket = Object.create(Ticket);
      newTicket.price = 4;
      expect(newTicket.price).to.equal(4);
    });
  });

  describe('whatPrice', function() {
    it('will be $2 for anyone Young', function() {
      var newTicket = Object.create(Ticket);
      newTicket.age = 10;
      expect(newTicket.whatPrice()).to.equal(2);
    });

    it('will be $3 for anyone Old', function() {
      var newTicket = Object.create(Ticket);
      newTicket.age = 88;
      expect(newTicket.whatPrice()).to.equal(3);
    });

    it('will be $3 for the matinee', function() {
      var newTicket = Object.create(Ticket);
      var newMovie = Object.create(Movie);
      newTicket.movie = newMovie;
      newTicket.movie.showtime = 1200;
      expect(newTicket.whatPrice()).to.equal(3);
    });

    it('will be $4 for everyone else', function() {
      var newTicket = Object.create(Ticket);
      var newMovie = Object.create(Movie);
      newTicket.movie = newMovie;
      expect(newTicket.whatPrice()).to.equal(4);
    });
  });

// Movie related specs

  describe('movie', function() {
    it('will return a Move object', function (){
      var newTicket = Object.create(Ticket);
      var newMovie = Object.create(Movie);
      newMovie.name = "Interstellar";
      newTicket.movie = newMovie;
      expect(newTicket.movie.name).to.equal("Interstellar");
    });

  });

  describe('showtime', function() {
    it('will return the time of the show', function() {
      var newTicket = Object.create(Ticket);
      var newMovie = Object.create(Movie);
      newMovie.showtime = 1800;
      newTicket.movie = newMovie;
      expect(newTicket.movie.showtime).to.equal(1800);
    });
  });

  describe('day', function() {
    it('will return the day of the show', function() {
      var newTicket = Object.create(Ticket);
      var newMovie = Object.create(Movie);
      newMovie.day = "Monday";
      newTicket.movie = newMovie;
      expect(newTicket.movie.day).to.equal("Monday");
    });
  });
});
