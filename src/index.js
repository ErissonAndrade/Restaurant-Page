import { renderPage } from "./app.js";
import { renderFirstTime , loadHome } from "./home.js"
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import "./style.css"

renderPage();
renderFirstTime();


const homeBtnSelector = document.getElementById("home-btn");
const menuBtnSelector = document.getElementById("menu-btn");
const contactBtnSelector = document.getElementById("contact-btn");

homeBtnSelector.addEventListener('click', e => {
    loadHome()
});

menuBtnSelector.addEventListener('click', e => {
    loadMenu()
});

contactBtnSelector.addEventListener('click', e => {
    loadContact()
});

