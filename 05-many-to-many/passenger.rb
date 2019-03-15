class Passenger

  ALL = []

  def initialize(name)
    @name = name
    ALL << self
    # @tickets = []
  end

  def tickets
    filtered_tickets = Ticket.all.select do |ticket|
      ticket.passenger == self
    end
    filtered_tickets
  end

  def flights
    tickets.map do ||
    end
  end

  def self.all
    ALL
  end


end