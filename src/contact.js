import addElement from "./app.js";

const renderContact = () => {
    const mainSelector = document.querySelector(".main")
    const createContact = addElement.createDiv(null, "main-contact")
    mainSelector.appendChild(createContact)

    const phone = addElement.createP("Phones:")  
    const firstPhone = addElement.createP("(555) 555-1234")
    const secondPhone = addElement.createP("(555) 531-1334")

    const address = addElement.createP("Address: 121 N Yost St Kennewick, Washington(WA), 99336")

    createContact.append(phone, firstPhone, secondPhone, address)
};

const loadContact = () => {
    renderContact() 
    const mainSelector = document.querySelector(".main")
    const mainContactSelector = document.querySelector(".main-contact")
    mainSelector.replaceChildren(mainContactSelector)
};

export default loadContact;