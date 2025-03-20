const url="https://api.github.com/users/lanalumi/repos"
const request=fetch(url).then(function(value){
    return value.json()
}).then(function(data){
console.log(data)

const listItem = document.createElement("li")
listItem.classList.add("project")
listItem.innerHTML = `
<a class="project-link" href="" target="_blank">
    Formulário+login+Menu
    <img src="./assets/external-link.svg">
</a>
`
const projectsContainer = document.querySelector("[data-projects]")
projectsContainer.appendChild(listItem)
})
