React Practice Projects

This repository contains a collection of small React projects designed to demonstrate fundamental React concepts. Each project is a self-contained component showcasing a specific feature or pattern.

Table of Contents

    Features

    Screenshots

    Installation

    Usage

    Project Structure

    Technologies Used

Features

This application showcases the following React functionalities:

    Welcome Message: A simple component to display a personalized greeting.

    Basic Todo List: A static list of items demonstrating list rendering.

    Simple Counter: A component with increment, decrement, and reset functionality using useState hook.

    Toggle Switch: A button that toggles its status (ON/OFF) and changes its appearance.

    Enhanced Todo List: A dynamic todo list allowing users to add new todos, mark them as complete, and delete them. This project demonstrates state management with an array of objects.

    Show/Hide Message: A component that conditionally renders a message based on a button click, illustrating conditional rendering.

    Product Display: A section displaying a list of products with their names, prices, and availability, utilizing props to pass data to ProductCard components.

    Login/Logout Example: A simple login/logout flow demonstrating conditional rendering based on authentication status.

    Simple Timer: A basic timer that updates the elapsed time, showcasing the useEffect hook for side effects.

Screenshots

Here are some screenshots of the different components:
Component	Screenshot 
Welcome Message & Basic Todo List	
<img width="1349" height="528" alt="react1" src="https://github.com/user-attachments/assets/b11b06c1-e6c8-4cfe-a81e-3a5b39963eab" />

Simple Counter & Toggle Switch	
<img width="1314" height="437" alt="react2" src="https://github.com/user-attachments/assets/a933bb3a-5a19-4530-9741-88cae53c6f95" />

Enhanced Todo List & Show/Hide Message	
<img width="1322" height="581" alt="react3" src="https://github.com/user-attachments/assets/a065c90e-f700-47d2-890b-6ccff3d00638" />

Our Products	
<img width="1323" height="588" alt="react4" src="https://github.com/user-attachments/assets/8fc75b36-2725-4a25-833d-6f69deaeded6" />

Login/Logout Example & Simple Timer	
<img width="1306" height="472" alt="react5" src="https://github.com/user-attachments/assets/5e869fe3-569f-4834-807a-49ea4f40af2d" />


Installation

To run this project locally, follow these steps:

    Clone the repository:
    Bash

git clone <repository-url>
cd <repository-name>

Install dependencies:
Bash

    npm install
    # or
    yarn install

Usage

After installation, you can start the development server:
Bash

npm start
# or
yarn start

This will open the application in your browser at http://localhost:3000.

Project Structure

The core components are organized as follows:

src/
├── App.js            # Main application component
├── Greeting.js       # Component for welcome message
├── TodoList.js       # Basic static Todo List
├── Counter.js        # Simple counter component
├── ToggleSwitch.js   # Toggle ON/OFF switch
├── TodoEnhanced.js   # Enhanced Todo List with add/delete functionality
├── MessageToggle.js  # Conditional message rendering
├── ProductCard.js    # Individual product display card
├── AuthButton.js     # Login/Logout button and logic
├── Timer.js          # Simple timer component
└── index.js          # Entry point of the React application
└── ...               # Other files (e.g., CSS, assets)

Technologies Used

    React.js

    JavaScript (ES6+)

    HTML5

    CSS3
