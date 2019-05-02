class BeerAdaptor {
  static hello() {
    return 'hellloooo'
  }

  static getBeers() {
    return fetch('http://localhost:3000/beers')
    .then(res => res.json())
  }

  static patchBeer({id, description}) {
    return fetch(`http://localhost:3000/beers/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        description: description
      })
    })
    .then(res => res.json())
  }

  static postBeer(beerData) {
    return fetch('http://localhost:3000/beers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(beerData)
    })
    .then(res => res.json())
  }
}


// in ruby
// class BeerAdaptor
//
//   self.hello
//     'helooooo'
//   end
// end
//
// BeerAdaptor.hello
