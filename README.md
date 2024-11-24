# CONTACTS

## Description
The Contacts App is a simple yet efficient web application designed to manage and organize contact information. Whether for personal use or professional purposes, this app allows users to easily add, edit, view, and delete contacts, keeping all information in one place. Built with a user-friendly interface and backed by a robust PostgreSQL database, the app ensures smooth interactions and seamless data management.

## Tech Stack Used
- **PostgreSQL:** A relational database used for managing structured data with support for advanced SQL queries and JSON/JSONB for semi-structured data storage. Used to store user data and project information efficiently.
- **Express.js:** Backend web application framework running on Node.js.
- **React:** Frontend library for building the user interface.
- **Node.js:** JavaScript runtime environment for executing server-side JavaScript code.

## Features

### Core Features
1. **Add New Contacts**  
   - Users can create and save new contact entries by providing details such as:
     - First Name
     - Last Name
     - Phone Number
     - Email
     - Company
     - Job Title

2. **View All Contacts**  
   - Displays a comprehensive list of all saved contacts in an organized and user-friendly interface.

3. **Edit Existing Contacts**  
   - Allows users to update any contact's information, such as:
     - Name
     - Phone Number
     - Email
     - Company
     - Job Title

4. **Delete Contacts**  
   - Users can remove unwanted contacts from the database with a simple delete action.


## User Interface
The user interface is designed to be intuitive and user-friendly, emphasizing ease of navigation and accessibility. It includes responsive design for compatibility with various devices and screen sizes.

## Installation and Setup

1. **Prerequisites:**
   - Node.js and npm installed.

2. **Clone the Repository:**
   ```sh
   git clone https://github.com/devanshgarg024/Contacts.git
   ```

3. **Backend Setup:**
   - Navigate to the backend directory.
   - Install dependencies:
     ```sh
     cd backend
     npm install
     ```
   - Start the server:
     ```sh
     npm start
     ```

4. **Frontend Setup:**
   - Navigate to the frontend directory.
   - Install dependencies:
     ```sh
     cd frontend
     npm install
     ```
   - Start the React app:
     ```sh
     npm start
     ```
   - The application should now be running on `http://localhost:3000`.

5. **Environment Variables:**
   Make a file named .env in the backend folder, it's content should be:
   ```sh
   PG_External_Link="postgresql://devansh:I3bUvB5C1JJSb7x3iF3l8AyqaER7lBnq@dpg-ct15f08gph6c73bg2dbg-a.singapore-postgres.render.com/firstcloudposrgres"

    ```


## Web Application Snippets


1. Dashboard displaying all contacts<br>

![homepage](./Snippets/Homepage.png)<br>

2. Functionality to add more contacts <br>

![AddPage](./Snippets/AddPage.png)<br>

3. Shows error when the required criteria are not met.
![ErrorPage](./Snippets/ErrorPage.png)

4. Functionality to Edit.
![EditPage](./Snippets/EditPage.png)


# Why Use PostgreSQL?

PostgreSQL is a powerful, open-source relational database management system (RDBMS) that provides a robust platform for managing structured data. Here’s why PostgreSQL is a great choice:

## Benefits of Using PostgreSQL:
- **Reliability & ACID Compliance:** PostgreSQL ensures that database transactions are reliable, ensuring data integrity even in the case of crashes.
- **Scalability:** It can handle large volumes of data and is optimized for performance, making it suitable for both small applications and large-scale systems.
- **Extensibility:** PostgreSQL supports extensions like PostGIS for geographic data, JSON support for document-style storage, and full-text search.
- **SQL Standards Compliance:** It adheres closely to SQL standards, ensuring portability and ease of use for developers familiar with SQL.

## Relational Databases and Tables:
- **Structured Data:** In PostgreSQL, data is organized into tables, which makes it easy to manage structured information. Each table represents an entity (like "contacts" or "users") and contains columns representing the properties of that entity.
- **Relationships Between Data:** Tables in a relational database can be linked through foreign keys, creating relationships between data. This ensures data consistency and prevents duplication.
- **Efficient Querying:** SQL (Structured Query Language) allows for complex queries across multiple tables, which makes it easier to retrieve, update, and manipulate data.

By using PostgreSQL, developers can organize data in a structured and consistent way, ensuring that the data is easy to query, update, and maintain, which is crucial for the long-term scalability and manageability of the application.

# Challenges Faced During the Development of the Contacts App

While developing the Contacts App, I encountered several challenges that required problem-solving and learning new concepts. Here are some of the key challenges faced:

## 1. **Setting Up the PostgreSQL Database:**
   - **Challenge:** Initially, I faced difficulties configuring and setting up PostgreSQL on my local environment. This involved ensuring the database was correctly installed and connected to the backend of the app.
   - **Solution:** I researched the correct installation procedures for PostgreSQL and followed the necessary steps to set up the database and connect it with my app using the appropriate libraries like `pg` for Node.js.

## 2. **Managing User Data Efficiently:**
   - **Challenge:** Storing, updating, and deleting user contacts effectively in the database required careful management of data flow between the front-end and back-end.
   - **Solution:** I created proper database schemas and used SQL queries to perform CRUD (Create, Read, Update, Delete) operations. This helped in maintaining data integrity and handling user interactions seamlessly.

## 3. **Form Validation and Error Handling:**
   - **Challenge:** Ensuring the accuracy of the data inputted by users was a major challenge. I needed to validate that the phone numbers contained only digits and that no fields were left empty.
   - **Solution:** I implemented JavaScript validation on the front end and used conditional rendering to show error messages when the data was invalid. This also involved using React state management to dynamically handle validation errors.

## 4. **User Interface Design:**
   - **Challenge:** Designing an intuitive and responsive user interface that would allow users to easily add, update, or delete contacts without confusion.
   - **Solution:** I utilized CSS for styling and React components for dynamic rendering. I also made sure that the layout was responsive to different screen sizes and that the UI provided clear feedback on the actions performed.

## 5. **Ensuring Data Integrity:**
   - **Challenge:** Handling edge cases, such as duplicate contact entries or invalid data, was another challenge, especially when interacting with the database.
   - **Solution:** I implemented checks before adding or updating contacts in the database to ensure data consistency. For instance, I checked for existing records to avoid duplicates.

## 6. **Deploying the Application:**
   - **Challenge:** Deploying the app, especially with a PostgreSQL database, was challenging as I had to make sure the database connection worked correctly in a production environment.
   - **Solution:** I used platforms like Heroku to deploy both the frontend and backend, while ensuring that the database was properly configured for remote access.

## 7. **Managing State in React:**
   - **Challenge:** Managing the form state and the list of contacts was difficult, especially when needing to update both simultaneously.
   - **Solution:** I used React's state management effectively to handle updates to the form and the contact list, ensuring real-time synchronization of the UI with the data.

## Conclusion:
These challenges helped me gain a deeper understanding of PostgreSQL, React, and full-stack development. The process of overcoming these obstacles improved my problem-solving skills and my ability to develop efficient, reliable applications.
