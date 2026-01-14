export { catOnStartUp };
function catOnStartUp() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=G6eaRdpSfKNxkPxUaTfZqlQTunEOpd0y&s=cats",
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      const displayImg = document.querySelector(".displayImg");
      console.log(displayImg);
      console.log(response.data.images.original.url);
      displayImg.src = response.data.images.original.url;
    });
}
