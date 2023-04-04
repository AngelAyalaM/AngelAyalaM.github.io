const marker = document.querySelector("a-marker");
const video = document.querySelector("#my-video");
const aframeVideo = document.querySelector("#my-aframe-video");

marker.addEventListener("markerFound", () => {
  video.play();
  aframeVideo.setAttribute("autoplay", true);
});

marker.addEventListener("markerLost", () => {
  video.pause();
  video.currentTime = 0;
  aframeVideo.setAttribute("autoplay", false);
});