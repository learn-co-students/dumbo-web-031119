const ulTag = document.querySelector('#list-group')
const beerDetailTag = document.querySelector('#beer-detail')

BeerAdaptor.all().then(beers => {
    beers.forEach(beerObj => {
      const newBeer = new Beer(beerObj)
      ulTag.innerHTML += newBeer.renderLi()
    })
  })


ulTag.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    const beerId = parseInt(event.target.dataset.id)
    const foundBeer = Beer.find(beerId)

    beerDetailTag.innerHTML = foundBeer.renderDetails()
  }
})


// event handling
// we start an "update" when the user clicks the save button.
beerDetailTag.addEventListener('click', event => {
  if (event.target.innerText === 'Save') {
    const newDescription = event.target.parentElement.querySelector('textarea').value
    const beerId = parseInt(event.target.dataset.id)
    const foundBeer = Beer.find(beerId)
    foundBeer.description = newDescription
    BeerAdaptor.update(foundBeer)
  }
})
