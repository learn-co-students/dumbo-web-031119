const beerUL = document.querySelector('#list-group');
const beerDetailDiv = document.querySelector('#beer-detail');
// got my data from api /beers
// BeerAdaptor.postBeer({name:'miller light'}).then()

BeerAdaptor.getBeers().then(beers => {
  const beerObjects = beers.map(beerData => {
    return new Beer(beerData)
    // return new Beer(beerData.id, beerData.name, beerData.tagline, beerData.image_url, beerData.description);
  })
  // take each beer object, call .render() & add the html string to my DOM
  beerObjects.forEach(beer => {
    beerUL.innerHTML += beer.render()
  })
})

beerUL.addEventListener('click', function(e) {
  console.log(this)
  if (e.target.className === 'list-group-item') {
    const beerId = parseInt(e.target.dataset.id)
    const foundBeer = Beer.all.find(beer => beer.id === beerId)
    beerDetailDiv.innerHTML = foundBeer.renderDetail();
  }
});

beerDetailDiv.addEventListener('click', (e) => {
  if (e.target.id === 'edit-beer') {
    const beerId = parseInt(e.target.dataset.id)
    const foundBeer = Beer.all.find(beer => beer.id === beerId)

    const textArea = e.target.parentElement.querySelector('textarea');
    const newDescription = textArea.value;
    foundBeer.description = newDescription
    BeerAdaptor.patchBeer(foundBeer)

    console.log("i'm the edit button")

  }
})
