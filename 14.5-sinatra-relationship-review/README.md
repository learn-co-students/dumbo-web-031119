#  🎧 Jams 🎧
Welcome to your second day of work at Jams Incorporated! Your manager is very impressed with the work that you did yesterday in setting up the website for Jams Incorporated's `Artist`s, so they have tasked you with a couple of more tasks to make the website bigger and better.

Your manager says that in addition to logging an `Artist` with their `name`, `bio` and `age`, the website should be able to log the `Instrument`s that each artist plays. And because Jams Incorporated works with only the best of the best, an artist can play multiple instruments. But keep in mind that with popular instruments like the piano and the keytar, there can be multiple artists playing them. 🎹

At this point, you should be considering the relationship between an `Artist` instance and an `Instrument` instance. How would an artist keep track of all the instruments that they play and how would you know about all the artists playing a specific instruments?

## Setting the Stage

In recording the instruments in the database, Jams Inc. would like to see the following deliverables implemented:

* A database of `Instrument`s that will allow for a `name` string and a `brand` string. If you create your database properly, you should be able to seed your database with the given `seeds.rb` file.

* A feature to keep track of which artists play which instruments. This feature should be designed with the intention to keep the Single Source of Truth in regards to their relationship intact, which means you may need to alter your database somehow. Where should this relationship live?

  * After you figure out a way to keep track of which artists play which instruments, alter the `seeds.rb` file so that some artists and instruments are related. Implement this however way it makes sense to you, but make sure that you checkout your relationships in `rake console`.


* In a specific artist's show page, the names of the instruments that the artist plays should be dynamically listed. When you're building out this feature, make sure that you're being cognizant of the MVC framework.

  * A nice to have feature: On the artist's show page, have each of the instruments listed link to the respective show page of the instrument (see below).


* A dynamically generated show page for a single instrument that show its `name` and `brand`, as well as a list of artists that play that specific instrument.

* An index page for all the instruments in your database.

  * A nice to have feature: On the index page, clicking on the name of the instrument would link the user to the instrument's show page.


After you have completed these deliverables, save and commit your code! Make sure everyone you're working with feels comfortable with the code and then, take a deep breath because we still have some work to do! 😤


## Creating the Associations

Your manager loves the work that you have done so far, but at the moment, there isn't a way for a user to log a relationship between an artist and an instrument.

We can accomplish this one of two ways:

* Have a form that will take in an artist ID and an instrument ID and create the association between the two. Rather than having the user type in the IDs as numbers, consider implementing a [`select`](https://www.w3schools.com/html/html_form_elements.asp) tag for a better user experience.

```HTML
<form>
  <select name="artist_id">
    <!-- How would you dynamically generate <option/> elements for each of the artist instances? -->
  </select>

  <select name="instrument_id">
    <!-- How would you dynamically generate <option/> elements for each of the instrument instances? -->
  </select>
</form>
```

OR

* Have a form in the artist's edit page with checkboxes of all the instruments. When the form is submitted, the artist being edited should be associated with the correct instruments.

```HTML
<form>
  <!-- How would you dynamically generate checkboxes for each of the instrument instances -->
  <input type="checkbox" name="instruments[]" value="<%= instrument.id %>">
</form>
```

If you're using the checkbox method, think about what your params looks like after the form is submitted. What does the `instruments[]` imply about the information put into params? How can you use the information put into `params` to link the artist with the selected instruments? Also, is there a way you can dynamically check the boxes for the instruments that an artist plays?

If you were able to associate users with instruments, consider building out full CRUD for the `Instrument` model! Best of luck!
