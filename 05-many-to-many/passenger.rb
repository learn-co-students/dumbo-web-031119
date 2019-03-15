class Passenger

  ALL = []

  attr_reader :name

  def initialize(name)
    @name = name
    ALL << self
    # @tickets = []
  end

  def tickets
    Ticket.all.select do |ticket|
      ticket.passenger == self
    end
  end

  def flights
    tickets.map do |ticket|
      ticket.flight
    end
  end

  def self.all
    ALL
  end


end