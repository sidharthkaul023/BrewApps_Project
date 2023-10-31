## BrewApps_Project 
Node.js Backend Developer Challenge - BrewApps

This Web Application is built on Node.js Express.js and BootStrap 5. The database layer of this application is deployed on MongoDB Atlas.

# API Endpoints
The following API endpoints are available in this Application:

- `GET /books`: Retrieve/Read a list of books.
- `GET /books/new`: Render Create Book form.
- `POST /books`: Create a New Book.
- `GET /books/:id`: Show Page to Retrieve/Read a Book by ID.
- `GET /books/:id/edit`: Render Update Book form.
- `PUT /books/:id`: Update an existing Book.
- `DELETE /books/:id`: Delete a Book by ID.

# Before you begin, ensure you have met the following requirements:
Node.js installed on your machine.
npm (Node Package Manager) installed.

# Installation Process:
1. Clone the Repository: git clone https://github.com/sidharthkaul023/BrewApps_Project.git
2. Change to the project directory: cd BrewApps_Project
3. Install the required dependencies: npm install

# Usage
1.Start the application: npm run dev (nodemon index.js)
2. The API will be available at http://localhost:5555/books
3. You can use the API endpoints as described in the "API Endpoints" section above.

# Decisions and Assumptions
During the development process, the following decisions and assumptions were made:

1. Express Router was used to manage Book Routes in the Application.
2. The project's code is organized into three main directories: 'models', 'views' and 'routes' for enhancing code structure and readability.
3. "ejs-mate" was used to centralize and streamline boilerplate code using 'layout()' function.
4. Partials was used for features like 'navbar' and 'footer' that may be selectively included on different pages of the application.
5. ".gitignore" file was included to safeguard sensitive information, such as API keys, passwords  (e.g. in '.env' files used in production)
    and 'node_modules', ensuring they are not accidentally disclosed in a public repository.
6. 'novalidate' attribute was used to bypass HTML form validation and leverage Bootstrap 5's validation mechanisms.



