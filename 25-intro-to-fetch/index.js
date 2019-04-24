const compliments = [
  "I bet you make babies smile.",
  "Our time together is like a nap, it never lasts long enough.",
  "When you say, “I meant to do that,” I totally believe you.",
  "Your eyebrows are on fleek.",
  "I like your outfit so much that if I wore it on the same day as you I wouldn’t even be embarrassed, we’d just be that stylish.",
  "You’re a great person to do a group project with.",
  "Being alone is kind of nice. Being alone with you is better.",
  "You’re always on time to things, which is awesome because I’m not.",
  "Looking like a complete idiot with you is really fun.",
  "I would hang out with you even if you hadn’t showered for a couple days.",
  "I would be really okay with you seeing me without makeup, that’s how much I like you.",
  "You’re one of my favorite drunken karaoke partners."
];

// helper method to get random number for photos
function randomNumber(minNumber, maxNumber) {
  // given a min and max, return a number between them
  return Math.floor((Math.random() * (maxNumber - minNumber) + minNumber) / 10) * 10;
}

const ulTag = document.querySelector('ul');

// we need to iterate over our compliments
compliments.forEach(function(compliment) {
  ulTag.innerHTML += `<li>
    <div class="trash">🗑</div>
    <div class="favorite">⭐️</div>
    <img width="200" src="https://www.placecage.com/gif/${randomNumber(400, 500)}/${randomNumber(200, 250)}" />
    <h3>"${compliment}"</h3>
    <div>
      <cite data-hug-count="0">Hugged 0 times</cite>
      <button>🤗 it</button>
    </div>
  </li>`
})



// to be able to add a "hug" to a compliment and see my hug count go up accordingly
// set a variable of hugCount to 0
ulTag.addEventListener('click', function(event) {
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
    // delete this compliment!!!!
    event.target.parentElement.innerHTML =
    `<img src="https://emoji.slack-edge.com/T02MD9XTF/officer_eric/d36a13bdfd9f2828.jpg" class="officer-eric" />` +
    event.target.parentElement.innerHTML
  }
})

const formTag = document.querySelector('form');


formTag.addEventListener('submit', function(event) {
  event.preventDefault()

  const complimentText = event.target.compliment.value

  ulTag.innerHTML = `<li>
    <div class="trash">🗑</div>
    <div class="favorite">⭐️</div>
    <img width="200" src="https://www.placecage.com/gif/${randomNumber(400, 500)}/${randomNumber(200, 250)}" />
    <h3>"${complimentText}"</h3>
    <div>
      <cite data-hug-count="0">Hugged 0 times</cite>
      <button>🤗 it</button>
    </div>
  </li>` +  ulTag.innerHTML

})
