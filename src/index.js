import("./index.css");
import logo from './logo.png';


const h1 = document.createElement("h1");
h1.innerText = "Notes!!!!";
h1.classList.add("redcolor");


let image = document.createElement("img");
image.src = logo
// console.log(image.src)   
image.classList.add('image-logo');


document.getElementById("root").append(image, h1)

const Notesdiv = document.createElement("div");
Notesdiv.classList.add("Notesdiv");

const h3 = document.createElement("h3");
h3.innerText = "This is Notes details";
h3.classList.add("blackcolor");

const input = document.createElement('input');
const savebtn = document.createElement('button');
savebtn.innerText = "Save Notes";

// savebtn.onclick = () =>{
//     let storedNotes = JSON.parse(localStorage.getItem('notes')) || {};
//     console.log(storedNotes);
// }

document.getElementById("notesDiv").append(h3, input, savebtn)
