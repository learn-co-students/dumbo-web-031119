# Intro to fetch

## Learning Goals
* Review what we know so far:
  * DOM manipulation (finding, creating, and changing elements)
  * Working with events ( ex. 'click', 'submit') + callbacks
* DRY up creating our HTML template
  * Understand the difference between implicit and explicit return
  * Replace `function() {}` with `() => {}`
* Understand how we persist data on our web app.
* Review the REST convention
* Explain the purpose of `fetch`
* Explain the purpose of a `Promise`
* Explain why you need to use `.then()`
* Explain the concept of sync vs async
* Use `fetch` to make a get request and add this new information to our webpage


## Our App So Far
As a user I now have...
* nicer styling on my app
* my list of nice compliments added
* the ability to add a "hug" to a compliment and see my hug count go up accordingly
* the ability to add my own compliments

*REVEIW*

* the ability to delete a compliment (I want a trashcan)
* the ability to favorite the best compliments (clicking favorite adds an `officer-eric` next to the favorite button)
* random nicolas cage gifs instead of cute cats

# Deliverables
As a user I want...
* to save all of my data about my compliments
* to use my saved data to create all of my compliments from


## Setup
To use this backend run these commands:
* `cd complimentor-api`
* `bundle`
* `rails db:create`
* `rails db:migrate`
* `rails db:seed`
* `rails s`

Once you have the rails server running checkout `localhost:3000/compliments` (you can also look at `localhost:3000/rails/info/routes` on any rails app to see your available routes)
