class Instrument < ActiveRecord::Base
  has_many :artist_instruments
  has_many :artists, through: :artist_instruments
end
