Artist.destroy_all
Instrument.destroy_all

10.times do
  Artist.create(name: Faker::Name.name, age: rand(1..100), bio: Faker::Hipster.sentence)
end

ashley = Artist.create(name: "Ash", age: 18, bio: "Drops beats like she drops tables")
ashley2 = Artist.create(name: "Cash", age: 18, bio: "Drops tables like she drops beats")

5.times do
  Instrument.create(name: Faker::Music.instrument, brand: Faker::Company.name)
end

glockenspiel = Instrument.create(name: "Glockenspiel", brand: "Nike")

ArtistInstrument.create(artist_id: ashley.id, instrument_id: glockenspiel.id)
ArtistInstrument.create(artist_id: ashley2.id, instrument_id: glockenspiel.id)
ArtistInstrument.create(artist_id: Artist.first.id, instrument_id: Instrument.second.id)
ArtistInstrument.create(artist_id: Artist.all[2].id, instrument_id: Instrument.second.id)

ArtistInstrument.create(artist_id: Artist.all.sample.id, instrument_id: Instrument.all.sample.id)


puts "File has been seeded! 🍀"
