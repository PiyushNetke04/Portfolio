// go to projects page
const projectBtn =
document.getElementById("projectBtn")

if(projectBtn){

projectBtn.addEventListener("click", () => {
window.location.href =
"project.html"

})

}

document.getElementById("linkedinBtn")
.addEventListener("click", () => {

window.open(
"https://linkedin.com/in/yourprofile"
)

})


document.getElementById("githubBtn")
.addEventListener("click", () => {

window.open(
"https://github.com/yourusername"
)
})
document.getElementById("ResumeBtn")
.addEventListener("click", () => {
window.open("autoit_steps.docx")

})

