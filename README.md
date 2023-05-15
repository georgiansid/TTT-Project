# TERRIBLY TINY TALES Project
Description: This project is a web application that fetches a text file from a URL, counts the occurrence of each word in the file, and displays a bar chart of the top 21 words with the highest occurrence. It also provides an option to download the data as a CSV file.

# Components
The project consists of the following components:

1. app.css
This CSS file defines the styling for the web application. It includes styles for a button component, such as its color, font, padding, and position.

2. app.js
This JavaScript file is the main entry point of the React application. It sets up the routing for different pages and renders the HomePage and Output components based on the current URL.

3. HomePage Component
This component represents the home page of the application. It renders the ButtonComponent component, which is used to navigate to the Output page.

4. ButtonComponent Component
This component renders a button with a link to the Output page. It uses the useLocation hook from react-router-dom to determine if it should be displayed based on the current URL.

5. Output Component
This component fetches a text file from a URL, counts the occurrence of each word in the file, and renders a bar chart using the recharts library. It also provides a download link for the data in CSV format using the react-csv library.

# Libraries and Plugins Used
The project utilizes the following libraries and plugins:

React - A JavaScript library for building user interfaces.

React Router - A library for handling routing in React applications.

recharts - A charting library for React that provides customizable and responsive charts.

react-csv - A library for generating and downloading CSV files in React applications.

# Getting Started
To run the project locally, follow these steps:

Clone the repository: git clone https://github.com/georgiansid/TTT-project/
  
Install the dependencies: npm install
  
Start the development server: npm start
  
Open your browser and navigate to http://localhost:3000
  
# Credits
The project was developed by Siddhant Lamba.
