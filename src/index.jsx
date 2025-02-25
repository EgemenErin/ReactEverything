import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import contacts from "./contacts.js";

ReactDOM.render(
    <div>
        <App name={contacts[0].name} img={contacts[0].imgURL} number={contacts[0].phone} email={contacts[0].email}/>
        <App name={contacts[1].name} img={contacts[1].imgURL} number={contacts[1].phone} email={contacts[1].email}/>
        <App name={contacts[2].name} img={contacts[2].imgURL} number={contacts[2].phone} email={contacts[2].email}/>
    </div>,
document.getElementById("root"));

//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
