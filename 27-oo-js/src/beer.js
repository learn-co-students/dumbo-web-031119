










class Beer {
  constructor({ name, tagline, image_url, description, id }) {
    this.name = name
    this.tagline = tagline
    this.description = description
    this.image_url = image_url
    this.id = id

    Beer.all.push(this)
  }

  introduceYourself() {
    return `Hi! I'm ${this.name} and ${this.tagline}.`
  }

  renderLi() {
    return `<li class="list-group-item" data-id="${this.id}">${this.name}</li>`
  }

  renderDetails() {
    return `
      <h1>${this.name}</h1>
      <img src="${this.image_url}">
      <h3>${this.tagline}</h3>
      <textarea>${this.description}</textarea>
      <button data-id=${this.id} id="edit-beer" class="btn btn-info">
        Save
      </button>
    `
  }

  static find(id) {
    return Beer.all.find(beer => beer.id === id)
  }

  static whatIsThis() {
    return "A beer is a beverage made by monks?"
  }

}

Beer.all = []
