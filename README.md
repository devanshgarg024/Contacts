# CONTACTS

## Description
EduCollab is a web application aimed at enhancing the educational experience by providing a platform for students to collaborate, showcase their projects, and connect with peers. It facilitates sharing knowledge, receiving feedback, and exploring new opportunities in academia.

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
   - PostgreSQL set up either locally or in the cloud.

2. **Clone the Repository:**
   ```sh
   git clone https://github.com/deepakkumartripathi119/Educollab-MERN-Stack-project.git
   cd Educollab
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
     npm run dev
     ```
   - The application should now be running on `http://localhost:3000`.

5. **Environment Variables:**
   Make a file named .env in the backend folder, it's content should be:
   ```sh
    MONGO_URI = "mongodb+srv://Nikhil:KritiDevAllTeam25@cluster0.mxindjp.mongodb.net/?retryWrites=true&w=majority"
    CALLBACK_URL = "http://localhost:5500/auth/microsoft/redirect"
    CLIENT_ID = "Your Microsoft Client ID"
    CLIENT_SECRET = "Your Microsoft Client Secret"
    GOOGLE_APPLICATIONS_CREDENTIALS='./edu-colab-kriti-firebase-adminsdk-7xiu0-3731e68b10.json'
    CLOUD_NAME='du1g4j6f8'
    CLOUD_API_KEY='775349273443457'
    CLOUD_API_SECRET='LpwP-jH6DnhyvVieJ5nfbPKp2wI'
    ```

