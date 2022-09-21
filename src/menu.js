import addElement from "./app.js"
import firstItemImage from "./images/item-1-menu.jpg"
import secondItemImage from "./images/item-2-menu.jpg"
import thirdItemImage from "./images/item-3-menu.jpg"
import fourthItemImage from "./images/item-4-menu.jpg"
import fifthItemImage from "./images/item-5-menu.jpg"
import sixthItemImage from "./images/item-6-menu.jpg"


const renderMenu = () => {
    const mainSelector = document.querySelector(".main")
    const createMenu = addElement.createDiv(null, "main-menu")
    mainSelector.appendChild(createMenu)

    const firstItem = addElement.createDiv("Special Salad", "menu-items")
    const secondItem = addElement.createDiv("Special Meat Skewer", "menu-items") 
    const thirdItem = addElement.createDiv("Special Pasta", "menu-items")
    const fourthItem = addElement.createDiv("Special Meat", "menu-items")
    const fifthItem = addElement.createDiv("Special Gnocchi", "menu-items") 
    const sixthItem = addElement.createDiv("Very Special Meat", "menu-items")     
    createMenu.append(firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixthItem)

    const firstItemImg = addElement.createImg(firstItemImage, "1")
    const secondItemImg = addElement.createImg(secondItemImage, "2")
    const thirdItemImg = addElement.createImg(thirdItemImage, "3")
    const fourthItemImg = addElement.createImg(fourthItemImage, "4")
    const fifthItemImg = addElement.createImg(fifthItemImage, "5")
    const sixthItemImg = addElement.createImg(sixthItemImage, "6")
    firstItem.appendChild(firstItemImg)
    secondItem.appendChild(secondItemImg)
    thirdItem.appendChild(thirdItemImg)
    fourthItem.appendChild(fourthItemImg)
    fifthItem.appendChild(fifthItemImg)
    sixthItem.appendChild(sixthItemImg)
}


const loadMenu = () => {
    renderMenu() 
    const mainSelector = document.querySelector(".main")
    const mainMenuSelector = document.querySelector(".main-menu")
    mainSelector.replaceChildren(mainMenuSelector)
}


export default loadMenu