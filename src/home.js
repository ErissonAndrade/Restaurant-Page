import restaurantHome from "./images/restaurant-home.jpg";
import addElement from "./app.js";



const renderFirstTime = () => { 
    const mainSelector = document.querySelector('.main')

    const home = addElement.createDiv(null, "main-home")
    mainSelector.appendChild(home)

    const firstP = addElement.createP("This restaurant is well known for making your belly full!")  
    home.appendChild(firstP)
    
    const img = addElement.createImg(restaurantHome, "restaurant-image", "restaurant-image")
    home.appendChild(img)

    const secondP = addElement.createP("Come and make us a visit!")  
    home.appendChild(secondP)

};

const loadHome = () => {
    renderFirstTime()
    const homeSelector = document.querySelector('.main-home')
    const mainSelector = document.querySelector('.main')
    mainSelector.replaceChildren(homeSelector)
};

export {renderFirstTime , loadHome};



