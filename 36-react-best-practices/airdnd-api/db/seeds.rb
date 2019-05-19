# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cities = [
  {
    name: "Wakanda",
    image_url: "https://www.eastbaytimes.com/wp-content/uploads/2019/02/OCR-L-DIS-NILES-0224-01-1.jpg?w=620",
    series: "Marvel"
  },
  {
    name: "Asgard",
    image_url: "https://www.thewrap.com/wp-content/uploads/2017/04/Asgard-Thor-Raganork.jpg",
    series: "Marvel"
  },
  {
    name: "Mereen",
    image_url: "https://i.pinimg.com/originals/2c/88/0e/2c880efb6e3ee55173ca4bcb999ef060.jpg",
    series: "Game of Thrones"
  },
  {
    name: "King's Landing",
    image_url: "https://i.redd.it/uul1u9b2h3v01.jpg",
    series: "Game of Thrones"
  },
  {
    name: "Hogsmeade",
    image_url: "https://data.whicdn.com/images/323574325/large.jpg",
    series: "Harry Potter"
  },
  {
    name: "Hogwarts",
    image_url: "http://cdn4.tillthemoneyrunsout.com/wp-content/uploads/2015/11/Hogwarts-Castle-as-Seen-from-Dragon-Challenge-Line-Visiting-Harry-Potter-World-Orlando1-980x653.jpg",
    series: "Harry Potter"
  },
  {
    name: "Pallet Town",
    image_url: "https://vignette.wikia.nocookie.net/pokemon-planet/images/6/6d/NewpalletTown.PNG/revision/latest?cb=20180212155137",
    series: "Pokemon"
  },
  {
    name: "Cair Paravel",
    image_url: "https://data.whicdn.com/images/250009424/large.jpg",
    series: "Chronicles of Narnia"
  },
  {
    name: "Candy Castle",
    image_url: "https://i.pinimg.com/originals/b6/d3/21/b6d3212638dfd1ea5364f1044565d4e7.jpg",
    series: "Candyland"
  },
  {
    name: "Minas Tirith",
    image_url: "https://boygeniusreport.files.wordpress.com/2015/08/minas-tirith-image-001.jpg?quality=98&strip=all&w=782",
    series: "Lord of the Rings"
  },
  {
    name: "The Shire",
    image_url: "https://i.pinimg.com/originals/3a/73/5f/3a735fcfb6f4bd6c37b9f10477a449f3.jpg",
    series: "Lord of the Rings"
  },
  {
    name: "The Mines of Moria",
    image_url: "https://i.pinimg.com/originals/4f/99/30/4f99300102b2d967efa02ca3008f9f48.jpg",
    series: "Lord of the Rings"
  }
]

place_adjectives = [
  "Beautiful",
  "Gorgeous",
  "Lovely",
  "Stunning",
  "Convenient",
  "Cozy",
  "Modern"
]

places = [
  "Studio",
  "Flat",
  "Apartment",
  "Home"
]

location_adjectives = [
  "Lively",
  "Quiet",
  "Scenic",
  "Beautiful",
  "Historic"
]

locations = [
  "Downtown",
  "Uptown",
  "Neighborhood",
  "District"
]

apartment_images = [
  "https://dynamicmedia.irvinecompany.com/is/image/content/dam/apartments/3-readytopublish/communities/orangecounty/irvine/parkplace/photography/PPIII-INT-MAY2018-LIVRM-A.tif?&wid=766&hei=560&qlt=60&crop=0,0,5202,3798&fit=stretch&iccEmbed=1&icc=AdobeRGB&fmt=pjpeg&pscan=auto",
  "https://07f138315bb5e97f9e43-31068357019044cca7c8e84d92de0d99.ssl.cf3.rackcdn.com/1024x768/56587_11491_001.jpg",
  "https://static01.nyt.com/images/2018/08/19/realestate/19underground-slide-AYDY/19underground-slide-AYDY-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
  "https://freshome.com/wp-content/uploads/2018/02/studio-intro.jpg",
  "https://www.rentcafe.com/blog/wp-content/uploads/2016/04/The-Madison-at-Racine-Apartments-in-Chicago-2.jpg",
  "https://s-ec.bstatic.com/images/hotel/max1024x768/924/92485933.jpg",
  "https://www.guestapartment.com/wp-content/uploads/2016/07/1-Paris-Ile-Saint-Louis-Accommodation-Studio-Luxury-View-Balcony-Acacia.jpg",
  "https://thumb.housinganywhere.com/images/room/1409353/4b306dfc-de7d-11e8-bd9b-42010af00008.jpg?kind=large&rotate=0",
  "https://cdn.apartmenttherapy.info/image/fetch/q_auto,f_auto,fl_strip_profile,w_620,h_413,c_fill/https://s3.amazonaws.com/pixtruder/original_images/3a2f086a7a89cfc0c5eed06dd12c377454ca308a",
  "https://www.yourmetropolitan.com/wp-content/uploads/2018/11/west-chester-apartment-Living-room-1.jpg",
  "https://romeloft.com/rome-apartment-photo/555x380c1q85/23700/2.jpg",
  "https://freshome.com/wp-content/uploads/2018/07/balcony-how.jpg",
  "https://eleanorapartments.com/wp-content/uploads/2015/07/studio-apartment-seattle-1.jpg"
]



cities.each do |city_data|
  city = City.create(city_data)

  (10..20).to_a.sample.times do
    name = "#{place_adjectives.sample} #{places.sample} in #{location_adjectives.sample} #{locations.sample}"
    address = "#{Faker::Address.street_address}, #{Faker::Address.secondary_address}, #{city.name}"

    Home.create(
      name: name,
      description: Faker::Hipster.paragraph(4),
      image_url: apartment_images.sample,
      capacity: (2..6).to_a.sample,
      address: address,
      city: city,
      price_per_night: rand(75.00..200.00).round(2)
    )
  end
end


