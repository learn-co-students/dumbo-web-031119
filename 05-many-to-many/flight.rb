class Flight

  def initialize(route)
    @route = route
  end

  def tickets
    Ticket.all.select do |ticket|
      ticket.flight == self
    end
  end

  def passengers
    tickets.map do |ticket|
      ticket.passenger
    end
  end

  def passenger_manifest
    passengers.map do |passenger|
      passenger.name
    end
  end

end