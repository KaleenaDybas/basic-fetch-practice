# Basic Fetch Practice

This project is a simple frontend web app that demonstrates how to use the `fetch` API to retrieve and display data dynamically from a remote JSON file. It was created as part of a JavaScript exercise to reinforce core concepts like DOM manipulation, data filtering, and working with asynchronous code.

##  Live Data Source

All user data is fetched from: `https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json`

Each user object contains the following fields:
- `id`
- `first_name`
- `last_name`
- `email`
- `company_name`
- `years_employed`

##  How to Use

1. Clone the repository or download the ZIP.
2. Open `index.html` in your browser.
3. Use the buttons:
   - **Load All Users** – fetches and displays every user.
   - **Load (< 10 Years)** – shows only users with under 10 years at their company.
   - **Clear** – removes all user cards from the page.

##  Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API

##  Learning Objectives

- Practice making asynchronous requests using `fetch`.
- Dynamically create and remove DOM elements based on data.
- Understand and apply data filtering with `.filter()`.
- Organize project files clearly and responsibly.

