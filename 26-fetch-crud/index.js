const zooPortraits = [
  'https://www.zooportraits.com/wp-content/uploads/2019/02/Golden-tiger-Panthera-tigris.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2019/02/Yellow-spotted-rock-hyrax-Heterohyrax-brucei.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/11/Black-And-White-Hawk-Eagle-Spizaetus-melanoleucus-2.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/11/Domestic-sheep-Ovis-aries-2-2.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/11/Emperor-penguin-Aptenodytes-forsteri-1.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/07/Crowned-lemur-Eulemur-coronatus-2.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Fishing-Cat-Prionailurus-Viverrinus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Common-Brushtail-Possum-Joey-Trichosurus-Vulpecula.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Artic-Fox-Pup-Vulpes-Lagopus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Walrus-Odobenus-Rosmarus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Long-eared-Hedgehog-Hemiechinus-Auritus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Caracal-Caracal-Caracal.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Snow-Leopard-Panthera-Uncia.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Lion-Panthera-Leo.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Griffon-Vulture-Gyps-Fulvus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Mandrill-Mandrillus-Sphinx.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Gray-Wolf-Canis-Lupus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Red-Squirrel-Sciurus-Vulgaris.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/White-tailed-Deer-Odocoileus-Virginianus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Bongo-Tragelaphus-Eurycerus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Harbor-Seal-Phoca-Vitulina.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Bornean-Orangutan-Pongo-Pygmaeus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Kinkajou-Potos-Flavus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Little-Owl-Athene-Noctua.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Fennec-Fox-Vulpes-Zerda.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Ferret-Mustela-Putorius-Furo.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Veiled-Chameleon-Chamaeleo-Calyptratus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Red-Panda-Ailurus-Fulgens.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/British-Shorthair-Cat-Felis-Catus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Eastern-Grey-Kangaroo-Macropus-Giganteus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Southern-Cassowary-Casuarius-Casuarius.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Ring-tailed-Lemur-Lemur-Catta.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Pallass-Cat-Otocolobus-Manul.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Red-Kangaroo-Macropus-Rufus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Brown-throated-Sloth-Bradypus-Variegatus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Barn-Owl-Tyto-Alba.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Red-Fox-Female-Vulpes-Vulpes.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Black-Panther-Panthera-Pardus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Golden-Snub-nosed-Monkey-Rhinopithecus-Roxellana.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Koala-Phascolarctos-Cinereus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Asiatic-Elephant-Elephas-Maximus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Northern-Giraffe-Giraffa-Camelopardalis.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Giant-Panda-Ailuropoda-Melanoleuca.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Leopard-Cub-Panthera-pardus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Cheetah-Acinonyx-Jubatus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Polar-Bear-Ursus-Maritimus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Celebes-Crested-Macaque-Macaca-Nigra.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Beagle-Canis-Lupus-Familiaris.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Gerenuk-Litocranius-walleri.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/White-Rhinoceros-Ceratotherium-Simum.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Bald-Eagle-Haliaeetus-Leucocephalus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Aye-Aye-Daubentonia-Madagascariensis.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Atlantic-Puffin-Fratercula-Arctica.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Gray-handed-Night-Monkey-Aotus-Griseimembra.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Biturong-Arctictis-Binturong.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/American-Black-Bear-Ursus-Thibetanus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/European-Rabbit-Oryctolagus-Cuniculus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Common-Raccoon-Procyon-Lotor-Psora.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Ostrich-Struthio-Camelus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Zebra-Equus-Quagga.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Spectacled-Bear-Tremarctos-Ornatus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Maltese-Dog-Canis-Lupus-Familiaris.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Brown-Bear-Cub-Ursus-Arctos.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Domestic-Goat-Kid-Capra-Aegagrus-Hircus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Bengal-Tiger-Panthera-Tigris-Tigris.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Emperor-Tamarin-Saguinus-Imperator.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Spanish-Bull-Bos-Taurus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Common-Chimpanzee-Pan-Troglodytes.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Red-eyed-Tree-Frog-Agalychnis-Callidryas.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Chihuahua-Dog-Puppy-Canis-Lupus-Familiaris.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Tasmanian-Devil-Pup-Sarcophilus-Harrisii.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Pygmy-Hippopotamus-Calf-Choeropsis-Liberiensis.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/South-American-Tapir-Calf-Tapirus-Terrestris.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Wombat-Vombatus-Ursinus.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Sea-Otter-Pup-Enhydra-Lutris.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/American-Bison-Bison-Bison.jpg',
  'https://www.zooportraits.com/wp-content/uploads/2018/05/Western-Lowland-Gorilla-Gorilla-Gorilla-Gorilla.jpg'
]
// helper method to get random number for photos
const randomZooPortrait = () => {
  // given a min and max, return a number between them
  return zooPortraits[Math.floor(Math.random() * zooPortraits.length)];
}

const createComplimentLiHTML = (compliment, hugCount, id) => {
    return `<li>
      <div class="trash">🗑</div>
      <div class="favorite">⭐️</div>
      <img src="${randomZooPortrait()}" />
      <h3>"${compliment}"</h3>
      <div>
        <cite data-id="${id}" data-hug-count="${hugCount}">Hugged ${hugCount} times</cite>
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
      ulTag.innerHTML += createComplimentLiHTML(compliment.message, compliment.hug_count, compliment.id)
    })
  })





// to be able to add a "hug" to a compliment and see my hug count go up accordingly
// set a variable of hugCount to 0
ulTag.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {

    // this part gets our hug count data
    const buttonTag = event.target
    const citeTag = buttonTag.parentElement.querySelector('cite')
    let updatedHugCount = parseInt(citeTag.dataset.hugCount)
    updatedHugCount++

    // this part updates the server
    updatedHugCountOnServer(citeTag.dataset.id, updatedHugCount).then(updatedCompliment => {
      // this part updates the DOM
      citeTag.dataset.hugCount = updatedCompliment.hug_count
      citeTag.innerText = `Hugged ${updatedCompliment.hug_count} times`

    })


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



const updatedHugCountOnServer = (id, hugCount) => {
  return fetch(`http://localhost:3000/compliments/${id}`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({ hug_count: hugCount })
  }).then(response => {
    return response.json()
  })

}
