
// helper method to get random number for photos
const randomNumber = (minNumber, maxNumber) => {
  // given a min and max, return a number between them
  return Math.floor((Math.random() * (maxNumber - minNumber) + minNumber) / 10) * 10;
}

const createComplimentLiHTML = (compliment) => {
    return `<li>
      <div class="trash">🗑</div>
      <div class="favorite">⭐️</div>
      <img width="200" src="https://www.placecage.com/gif/${randomNumber(400, 500)}/${randomNumber(200, 250)}" />
      <h3>"${compliment}"</h3>
      <div>
        <cite data-hug-count="0">Hugged 0 times</cite>
        <button>🤗 it</button>
      </div>
    </li>`
}


const ulTag = document.querySelector('ul');



fetch('http://localhost:3000/compliments/')
  .then((response) => {
    return response.json()
  }).then((compliments) => {
    // we need to iterate over our compliments
    compliments.forEach((compliment) => {
      ulTag.innerHTML += createComplimentLiHTML(compliment.message)
    })
  })





// to be able to add a "hug" to a compliment and see my hug count go up accordingly
// set a variable of hugCount to 0
ulTag.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    // when the hug it button is clicked,
    const buttonTag = event.target
    console.log(event.target)
    // find the hug count,
    // add 1 to it,
    const citeTag = buttonTag.parentElement.querySelector('cite')

    let updatedHugCount = parseInt(citeTag.dataset.hugCount)

    updatedHugCount++
    console.log(updatedHugCount)

    citeTag.dataset.hugCount = updatedHugCount
    // debugger
    // and then update that compliment's hug count on the dom
    citeTag.innerText = `Hugged ${updatedHugCount} times`

  } else if (event.target.classList.contains('trash')) {
    // delete this compliment!!!!
    event.target.parentElement.remove()
  } else if (event.target.classList.contains('favorite')) {
    event.target.parentElement.innerHTML =
    `<img src="https://emoji.slack-edge.com/T02MD9XTF/officer_eric/d36a13bdfd9f2828.jpg" class="officer-eric" />` +
    event.target.parentElement.innerHTML
  }
})

const formTag = document.querySelector('form');


formTag.addEventListener('submit', (event) => {
  event.preventDefault()

  const complimentText = event.target.compliment.value

  ulTag.innerHTML = createComplimentLiHTML(complimentText) +  ulTag.innerHTML

})
