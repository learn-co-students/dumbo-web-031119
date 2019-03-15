require_relative 'flight'
require_relative 'passenger'
require_relative 'ticket'
require 'pry'

d = Passenger.new("D")
serena = Passenger.new("Serena")
ashley = Passenger.new("Ashley")
dario = Passenger.new("Dario")

kauai = Flight.new("EWR - LIH")
zagreb = Flight.new("EWR - ZAG")
tokyo = Flight.new("LGA - HND")
hotlanta = Flight.new("LGA - ATL")
reykjavic = Flight.new("EWR - REK")

Ticket.new(d, kauai)
Ticket.new(d, reykjavic)
Ticket.new(serena, zagreb)
Ticket.new(serena, reykjavic)
Ticket.new(dario, tokyo)
Ticket.new(dario, reykjavic)
Ticket.new(ashley, hotlanta)
Ticket.new(ashley, zagreb)


binding.pry

false
