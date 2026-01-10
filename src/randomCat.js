export { catOnStartUp };
function catOnStartUp() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=iynhuQUGqRgxLYzfuv3bOxaTvkLzKHeY&s=cats",
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      const displayImg = document.querySelector(".displayImg");
      console.log(displayImg);
      displayImg.src = response.data.images.original.url;
    });
}
