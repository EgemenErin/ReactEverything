//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

var YOURNAME = "Egemen Erin";
var CURRENTYEAR = new Date().getFullYear()
ReactDOM.render(
<div>
    <h1>Created by {YOURNAME}</h1>
    <h1>Copyright {CURRENTYEAR}</h1>
</div>, 
document.getElementById("root")
);
