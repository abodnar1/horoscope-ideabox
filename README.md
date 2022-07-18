# Please Read Before Starting

## Setup Instructions

- Fork this repository.
- Clone the repository down to your machine.
- CD into the project
- npm install
- npm i -D cypress

Happy Coding!

## Prompt

Today you will be making a horoscope App! We reccommend you time yourself 3 hours for this practice.
Here are some user stories we are looking for this app:

- When a user pulls up the application they should see a form asking for their zodiac sign
- The user should be able to enter their name
- When the user presses 'submit' their horoscope results should show on the homepage with their zodiac and name
- The user should be able to press a button and return to a new form to request another horoscope


Possible Extensions!

- User can enter birthday instead of zodiac sign and it should still return the correct zodiac!
- Add options for today, tomorrow, or yesterday for the horoscope
- Install Router and make the page change when a horoscope is calculated

*Some icons have been provided in the folder src/zodiac-symbols*

*An App Cypress File has been inserted as a starting point*

## API

Here is the API you can use:
https://aztro.sameerkumar.website
Endpoint : 'https://aztro.sameerkumar.website/?sign=aries&day=today'

example post:

const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
fetch(URL, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const date = json.current_date;
    console.log(date);
});



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run cypress`

Starts cypress for your application.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
