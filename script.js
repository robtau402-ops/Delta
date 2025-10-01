document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to My Personal Page!");
});
document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".bg-video");
    const toggleBtn = document.createElement("button");
    
    toggleBtn.innerText = "Mute/Unmute";
    toggleBtn.style.position = "absolute";
    toggleBtn.style.top = "20px";
    toggleBtn.style.right = "20px";
    toggleBtn.style.padding = "10px";
    toggleBtn.style.backgroundColor = "white";
    toggleBtn.style.border = "none";
    toggleBtn.style.cursor = "pointer";

    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", () => {
        video.muted = !video.muted;
        toggleBtn.innerText = video.muted ? "Unmute" : "Mute";
    });
});
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}