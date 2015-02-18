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

  describe('showtime', function() {
    it('will return the time of the show', function() {
      var newTicket = Object.create(Ticket);
      newTicket.showtime = 1800;
      expect(newTicket.showtime).to.equal(1800);
    });
  });

  describe('isMatinee', function() {
    it('will return true if the movie is before 1800', function() {
      var newTicket = Object.create(Ticket);
      newTicket.showtime = 2000;
      expect(newTicket.isMatinee()).to.equal(false);
    });
  });

  describe('day', function() {
    it('will return the day of the show', function() {
      var newTicket = Object.create(Ticket);
      newTicket.day = "Monday";
      expect(newTicket.day).to.equal("Monday");
    });
  });

  describe('isWeekend', function() {
    it('will return if true if it is the weekend!', function () {
      var newTicket = Object.create(Ticket);
      newTicket.day = "Friday";
      expect(newTicket.isWeekend()).to.equal(true);
    });
  });

  describe('movieName', function() {
    it('will return the name of the show', function() {
      var newTicket = Object.create(Ticket);
      newTicket.movieName = "Interstellar";
      expect(newTicket.movieName).to.equal("Interstellar");
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
      newTicket.showtime = 1200;
      expect(newTicket.whatPrice()).to.equal(3);
    });

    it('will be $4 for everyone else', function() {
      var newTicket = Object.create(Ticket);
      expect(newTicket.whatPrice()).to.equal(4);
    });
  });
});
