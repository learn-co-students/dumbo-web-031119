
// helper method to get random number for photos
function randomNumber(minNumber, maxNumber) {
  // given a min and max, return a number between them
  return Math.floor((Math.random() * (maxNumber - minNumber) + minNumber) / 10) * 10;
}

const createComplimentHTML = (compliment) => {
  return `<li>
    <div class="trash">🗑</div>
    <div class="favorite">⭐️</div>
    <img width="200" src="https://www.placecage.com/gif/${randomNumber(400, 500)}/${randomNumber(200, 250)}" />
    <h1>"${compliment.message}"</h1>
    <div>
      <cite data-hug-count="${compliment.hug_count}">Hugged ${compliment.hug_count} times</cite>
      <button>🤗 it</button>
    </div>
  </li>`;
}

const ulTag = document.querySelector('ul');

fetch('http://localhost:3000/compliments')
  .then(res => res.json())
  .then((compliments) => {
    compliments.forEach(compliment => {
      ulTag.innerHTML += createComplimentHTML(compliment)
    })
  })

// be able to add a "hug" to a compliment and see my hug count go up accordingly

// we need to find all of our buttons
ulTag.addEventListener('click',  function(event) {
  if (event.target.tagName === 'BUTTON') {
    // we need to find the hug count element <cite> that we just clicked on
    const citeTag = event.target.parentElement.querySelector('cite');
    // we need to update it by 1
    let updatedHugCount = parseInt(citeTag.dataset.hugCount) + 1

    citeTag.dataset.hugCount = updatedHugCount;
    citeTag.innerText = `Hugged ${updatedHugCount} times`
  } else if (event.target.classList.contains('trash')) {
    event.target.parentElement.remove();
  } else if (event.target.classList.contains('favorite')) {
    event.target.parentElement.innerHTML =
    `<img src="https://media.giphy.com/media/fxKZAR0nAUhJCcvqP5/giphy.gif" class="angelo-parrot" />` +
    event.target.parentElement.innerHTML
  }
})

//  ----- to add my own compliments ------

// find our form
const formTag = document.querySelector('form')
// on submit, grab whatever is in the input box in the form (the compliment)
formTag.addEventListener('submit', function(event) {
  event.preventDefault()

  const compliment = event.target.compliment.value
  // using that compliment make a new compliment li, add in our compliment
  // attach that new li to our UL (in the top position)
  ulTag.innerHTML = createComplimentHTML(compliment) + ulTag.innerHTML
})

// old way to define a function
// function createComplimentHTML(compliment) {
//   return `<li>
//       <div class="trash">🗑</div>
//       <div class="favorite">⭐️</div>
//       <img width="200" src="https://www.placecage.com/gif/${randomNumber(400, 500)}/${randomNumber(200, 250)}" />
//       <h1>"${compliment}"</h1>
//       <div>
//         <cite data-hug-count="0">Hugged 0 times</cite>
//         <button>🤗 it</button>
//       </div>
//     </li>`
// }
