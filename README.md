Attached Internship report in the Repository


Project Overview
During my internship, I developed an Employee Management System using Vue.js for the frontend and Node.js with Express for the backend. The application facilitates user registration and login, allowing employees to manage their accounts efficiently.
Key Features
User Registration:
A Signup component enables new users to register by providing their name, email, and password.
Upon successful registration, a POST request is sent to the backend, and users receive a confirmation email via Nodemailer. After registration, users are redirected to the login page.
User Login:
A Login component allows users to authenticate by entering their email and password.
The application verifies credentials through a POST request to the backend, granting access to the system upon successful login.
Email Notifications:
Integrated Nodemailer in the backend to send confirmation emails to users upon successful registration, enhancing user engagement and communication.
Routing:
Utilized Vue Router to manage navigation between the Signup and Login components, ensuring a seamless user experience.
State Management:
Leveraged Vue's reactive data binding to manage form inputs and user interactions effectively.
Styling:
Implemented responsive design using Bootstrap, enhancing the visual appeal and usability of the application.
Error Handling:
Basic error handling was incorporated to log issues to the console, with potential for future enhancements to provide user feedback for failed operations.
Technologies Used
Frontend: Vue.js, Vue Router, Axios, Bootstrap
Backend: Node.js, Express, MongoDB (for data storage), Nodemailer (for email notifications)
Conclusion
This project provided me with valuable experience in full-stack development, enhancing my skills in both frontend and backend technologies. The Employee Management System serves as a foundational application that can be further expanded with additional features such as user roles, password recovery, and enhanced security measures. Overall, this internship allowed me to apply theoretical knowledge in a practical setting, contributing to my professional growth and understanding of web development.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
