const addBtn = document.querySelector('#new-toy-btn')
const toyContainer = document.querySelector('.container')
let addToy = false
const toyCollect = document.querySelector('#toy-collection')


// YOUR CODE HERE
fetch("http://localhost:3000/toys")
.then(res => res.json())
.then((toys) => {
  toys.forEach(toy => toyCollect.innerHTML += createToyCard(toy))
})

const createToyCard = (toy) => {
  return `<div class="card">
      <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar" />
      <p>${toy.likes} Likes </p>
      <button data-id=${toy.id} data-likes=${toy.likes} class="like-btn">Like <3</button>
    </div>`
}



addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyContainer.style.display = 'block'
    // submit listener here
  } else {
    toyContainer.style.display = 'none'
  }
})


// ADDING A NEW TOY

let form = toyContainer.querySelector(".add-toy-form")
// You can submit on only a form.
form.addEventListener("submit", (event) => {
  event.preventDefault()
  // event.target.VARIABLE will pull the input that has the name of VARIABLE

  let theForm = event.target
  let name = theForm.name.value
  let image = theForm.image.value

  // Make Fetch happen to the backend, so that the information persists
  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      image: image,
      likes: 50
    })
  })
  .then(res => res.json())
  // Use pessimistic rendering to append the new Toy to the DOM
  .then(toy => toyCollect.innerHTML += createToyCard(toy))
})




// ADDING LIKES

toyCollect.addEventListener("click", (event) => {
  // The cards were created AFTER a fetch. This means I cannot find it on the DOM easily.
  // I have to use Event Delegation.
  // 1) Find stable parent that is always on the DOM
  // 2) Add Event Listener
  // 3) Find a condition to find the children
  // 4) Fire the event with event.target
  if (event.target.classList.contains("like-btn")) {
    // Getting information about the card we clicked
    let id = event.target.dataset.id
    let likeCount = parseInt(event.target.dataset.likes)

    // Raising the count by 1
    likeCount ++

    // Altering the DOM to reflect the changes
    event.target.dataset.likes = likeCount
    let pTag = event.target.parentElement.querySelector("p")
    pTag.innerText = `${likeCount} Likes`

    // Making the Fetch so the information persists
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({likes: likeCount})
    }).then(res => res.json()).then(console.log)
  }
})













// OR HERE!
