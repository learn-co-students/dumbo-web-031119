class Beer {
  constructor({id, name, tagline, image_url, description}) {
    this.id = id;
    this.name = name;
    this.tagline = tagline;
    this.imageUrl = image_url;
    this.description = description;

    Beer.all.push(this)
  }

  // instance method
  sayHi(greeting) {
    return `${greeting}, I'm a ${this.name} and my tagline is: ${this.tagline}!`
  }

  // instance method
  render() {
    return `<li data-id="${this.id}" class="list-group-item">${this.name}</li>`
  }

  renderDetail() {
    return (
      `<h1>${this.name}</h1>
      <img src="${this.imageUrl}">
      <h3>${this.tagline}</h3>
      <textarea>${this.description}</textarea>
      <button data-id="${this.id}" id="edit-beer" class="btn btn-info">
        Save
      </button>`
    )
  }

}

Beer.all = [];

// Beer.new(1, "Naddylight", "college")
// ruby mode:
// class Beer
//   @@all = []
//   def initialize(id, name, tagline)
//     @id = id
//     @name = name
//     @tagline = tagline
//     @@all << self
//   end
//
//   def say_hi
//     "Hi, I'm a #{@name} and my tagline is: #{@tagline}!"
//   end
// end
