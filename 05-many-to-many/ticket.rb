class Ticket

  ALL = []

  attr_reader :passenger

  def initialize(passenger, flight)
    @passenger = passenger
    @flight = flight
    ALL << self
  end

  def self.all
    ALL
  end

end

