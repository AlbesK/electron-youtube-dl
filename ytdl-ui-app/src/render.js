// Buttons
const downloadYoutubeVideo = document.getElementById("download");
const output = document.getElementById("output");

// Assign Functions
downloadYoutubeVideo.onclick = getVideoAudio;

async function getVideoAudio(){
    output.innerHTML = "Its working! (for now...)";
}