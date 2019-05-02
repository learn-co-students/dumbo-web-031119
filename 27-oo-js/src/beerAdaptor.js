class BeerAdaptor {

  static all() {
    return fetch('http://localhost:3000/beers').then(res => res.json())
  }

  static update(beer) {
      return fetch(`http://localhost:3000/beers/${beer.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(beer)
      }).then(res => res.json())
  }
}
