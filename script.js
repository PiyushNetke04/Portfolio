
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
"https://github.com/PiyushNetke04"
)
})
document.getElementById("ResumeBtn")
.addEventListener("click", () => {
window.open("Resume.pdf")

})

