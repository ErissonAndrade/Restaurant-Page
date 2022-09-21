
const contentSelector = document.getElementById("content");

const addElement = (() => {
    const createHeader = (text, className) =>  {
        const create = document.createElement("header");
        create.textContent = text
        create.classList.add(className)
        return create
        };

    const createNav = (text, className) =>  {
        const create = document.createElement("nav");
        create.textContent = text
        create.classList.add(className)
        return create
        };

    const createMain = (text, className) =>  {
        const create = document.createElement("main");
        create.textContent = text
        create.classList.add(className)
        return create
        };    

    const createFooter = (text, className) =>  {
        const create = document.createElement("footer");
        create.textContent = text
        create.classList.add(className)
        return create
        };  

    const createP = (text) =>  {
        const create = document.createElement("p");
        create.textContent = text
        return create
        };

    const createDiv = (text, className) =>  {
        const create = document.createElement("div");
        create.textContent = text
        create.classList.add(className)
        return create
        };
    
    const createButton = (text, className, idName) =>  {
        const create = document.createElement("button");
        create.textContent = text
        create.classList.add(className)
        create.setAttribute("id", idName)
        return create
        };    
    
    const createImg = (source, alt, className) =>  {
        const create = document.createElement("img");
        create.src = source
        create.alt = alt
        create.classList.add(className)
        return create
        };     

    return {
      createHeader,
      createNav,
      createMain,
      createFooter,
      createP,
      createDiv,
      createButton,
      createImg,
    };
  })();

const renderHeader = () => {
    const header = addElement.createHeader(null, "header")
    contentSelector.appendChild(header)
    const title = addElement.createDiv("Full Belly Restaurant", "title")
    header.appendChild(title)

    const nav = addElement.createNav(null, "nav-bar")
    header.appendChild(nav)
    const homeButton = addElement.createButton("Home", "home-btns", "home-btn")
    const menuButton = addElement.createButton("Menu", "home-btns", "menu-btn")
    const contactButton = addElement.createButton("Contact", "home-btns", "contact-btn")
    nav.appendChild(homeButton)
    nav.appendChild(menuButton)
    nav.appendChild(contactButton)
};

const renderMain = () => {
    const main = addElement.createMain(null, "main")
    contentSelector.appendChild(main)
};

const renderFooter = () => {
    const footer = addElement.createFooter("The Odin Project®", "footer")
    contentSelector.appendChild(footer)
};

const renderPage = () => {
    renderHeader()
    renderMain()
    renderFooter()
};

export default addElement;
export {renderPage};


