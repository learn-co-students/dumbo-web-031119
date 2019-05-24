# Fullstack Auth

## SWBATs
- [x] Use Bcrypt to encrypt passwords and authenticate users
- [x] Use `localStorage` to store information on a user's browser
- [x] Use headers on a request
- [x] Use client-side routing to control user flow
- [x] Use JWT to encode and decode information


## Notes

What the heck is auth?
### Authentication
- Who are you, and are you actually that person?
  - Password
  - Username
- Frontend: forms(+ state), client-side routing, error handling, sessions
- Backend: Bcrypt(password_digest), current_user method that returns the use that is logged in, 

Bcrypt:
 - `password` method -> allows us to pass in plain text password and store a password_digest
 - `authenticate` method -> allows us to check if a plain text string is equal to the user's password


### Security with JWT
- We want to save user info on the user's browser, but it is easily accesible
- JWT to the rescue!
  - Encode information on our backend and send it to our frontend on login/signup
  - Store in localStorage
  - Use as an "Authorization" header on our fetches to pass along information about the user who is currently logged in

### Authorization
- Do you have access to what you are trying to access?
- A number of strategies for authorization
  1. Hide parts of the DOM that should be accessed unless you are a particular user
  2. Use the JWT to check in the backend if the current user can perform an action
  3. Write client-side routes that show information pertaining only to the logged in user (must be logged in to be viewed)
  - ...and many more!
  