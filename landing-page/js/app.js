
//remove the active section from all sections and add it to the selected section
const updateActiveSection = (section,li) => {
    for(k = 1; k<= 4; k++) {
        document.getElementById(`section${k}`).classList.remove("your-active-class")
        document.getElementById(`li${k}`).classList.remove("clicked__item")
    }
    document.getElementById(section).classList.add("your-active-class")
    document.getElementById(li).classList.add("clicked__item")
}

//determine which section was selected
const checkClickedSection = (evt) => {
    for(j = 1; j<= 4; j++){
        if(evt.target.textContent === `Section ${j}`){
            window.scrollBy(document.getElementById(`section${j}`).getBoundingClientRect().x,
            document.getElementById(`section${j}`).getBoundingClientRect().y)
        }
    }
    evt.preventDefault()
}

//check which section is on the view port
const checkVisible = (op) => {
    return (op.y-150)<0 && Math.abs(op.y-100)<=op.height
}

//build the navigation bar dynamically
for (i = 1; i <= 4; i++) {
    const navBar = document.getElementById("nav__list")
    const list = document.createElement("li")
    const aTag = document.createElement("a")
    aTag.textContent = document.getElementById(`section${i}`).getAttribute("data-nav")
    aTag.classList.add('menu__link')
    list.appendChild(aTag)
    list.setAttribute('id',`li${i}`)
    document.getElementById("navbar__list").appendChild(list)
}

//listen to the event when the navigation bar is clicked 
document.querySelector(".page__header").addEventListener('click', (evt) => checkClickedSection(evt))

//while scrolling if the checkVisble function returns true update the active section to the section on the view port.
document.addEventListener("scroll",(evt)=>{
    for(m = 1; m<= 4; m++){
        if(checkVisible(document.getElementById(`section${m}`).getBoundingClientRect())){
            updateActiveSection(`section${m}`,`li${m}`)
        }
    }
})
