# API INTEGRATION-WEATHER APP

*COMPANY* : CODTECH IT SOLUTIONS

*NAME* : SUJEET KUMAR

*INTERN ID* : CT04DF1733

*DOMAIN* : FULL STACK WEB DEVELOPMENT

*DURATION* : 4 WEEKS

*MENTOR* : NEELA SANTOSH

DISCRIPTION : 

This project is a simple yet powerful Weather Application built using HTML, CSS, and JavaScript, which integrates with a public weather API to fetch real-time weather data. The purpose of this application is to demonstrate how front-end web technologies can interact with third-party APIs to build dynamic, interactive, and data-driven user interfaces.

📌 Project Overview
The Weather App allows users to search for any city or location and get current weather information such as:

Temperature

Weather condition (e.g., clear sky, rain, snow)

Humidity

Wind speed

Country/region

Weather icons representing the conditions visually

The app provides a clean and responsive user interface, making it suitable for both desktop and mobile screens. All data is fetched in real time using JavaScript’s fetch() API, and updates dynamically based on user input.

🔧 Technologies Used
1. HTML
The HTML file provides the basic structure of the app, including the input field, weather data display sections, and overall layout. It follows a semantic structure and is well-organized for accessibility and SEO.

2. CSS
CSS is used to design the user interface. Features include:

A responsive layout

Styled input and search buttons

Weather cards with icons

Background color or image that may change depending on the weather condition (optional feature)

CSS media queries ensure the app looks good on both mobile and desktop devices.

3. JavaScript
JavaScript handles:

API integration

User interactions (search functionality)

DOM manipulation

Error handling (for invalid city names or network errors)

The app uses the fetch() method to get weather data from an external API (e.g., OpenWeatherMap API). The response is then parsed and used to update the UI dynamically.

🌐 API Integration
The core of the app relies on a public weather API like OpenWeatherMap. After registering for a free API key, the application sends an HTTP request with the city name and API key to retrieve weather data in JSON format. For example:

javascript
Copy
Edit
fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY`)
The data is then extracted and displayed to the user in a friendly format.

✅ Key Features
Search weather by city name

Real-time data updates

Weather icons and descriptions

Temperature conversion (Kelvin to Celsius/Fahrenheit)

Mobile responsive UI

Error messages for invalid input or API issues

🚀 Possible Improvements
This project can be extended with additional features:

5-day or 7-day weather forecast

Geolocation support (auto-detect user’s location)

Dynamic background based on weather (e.g., rain = rainy background)

Dark/light mode toggle

Local storage to save recent searches

Hourly weather chart using chart libraries like Chart.js

🧠 Learning Objectives
This project helped me understand:

How to integrate APIs using JavaScript

How to manipulate the DOM based on real-time data

How to handle asynchronous requests and errors

Basics of responsive design with CSS

📁 Project Structure
pgsql
Copy
Edit
weather-app/
├── index.html
├── style.css
└── script.js
index.html: Contains the structure of the application.

style.css: Contains styles and media queries.

script.js: Contains the JavaScript logic for fetching and displaying data.

💬 Final Thoughts
This project is a great starting point for beginners looking to explore API integration, JavaScript programming, and front-end development in general. It’s lightweight, beginner-friendly, and provides a real-world use case that users can easily understand and interact with.

Feel free to fork, clone, and enhance this project as part of your learning journey!



*OUTPUT* : 

![Image](https://github.com/user-attachments/assets/b4de4a00-4aa3-4175-9b01-fd21df596723)
