const listCont = document.querySelector("#listCont")
const form = document.querySelector("form")
const events = []

// form.addEventListener("submit", async (e) => {
//     e.preventDefault()
//     createNewEvent()
//         .then((json) => {
//             console.log(json)
//         })
//         .catch(error => console.log(error))
// })

// function createNewEvent(){
//     const formData = new FormData(form);
//     console.log(formData)
//     return fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events`, {
//         method: "POST",
//         body: formData
//     }).then(response => response.json())
// }

async function getEvents(){
    const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events`)
    const json = await response.json()
    // console.log(json.data[0])
    json.data.forEach(element => {
        events.push(element)
    });
    render()
}
getEvents()

function render(){
    const eventsHtml = events.map((e) => {
        return `<div id="${e.id}">
        <h3>${e.name}</h3>
        <p>${e.location}</p>
        <p>${e.description}</p>
        <button onclick='deleteEvent(this)'>Delete</button>
        </div>`
    })
    listCont.innerHTML = eventsHtml.join('')
}

function deleteEvent(btn){
    for(let i = 0; i < events.length; i++){
        if(parseInt(btn.parentNode.id) === events[i].id){
            events.splice(events[i], 1)
        }
    }
    render()
}