function create(){
    clear()
const content= document.querySelector("#content")
const header=document.createElement("div")
header.classList.add("header")
content.appendChild(header)
header.innerText="welcome to the restruant"

const body=document.createElement("div")
body.classList.add("body")
content.appendChild(body)


const yee=document.createElement("div")
yee.classList.add("yee")
body.appendChild(yee)
body.innerHTML="<h1>3 michelin stars<br>EST 1989</h1>"

const menu = document.createElement("button")
menu.classList.add("menu")
header.appendChild(menu)
menu.textContent="LÀ MENU"

const home = document.createElement("button")
home.classList.add("home")
header.appendChild(home)
home.textContent="HÔMĖ"
}

function clear(){
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    }
    
  
create()






