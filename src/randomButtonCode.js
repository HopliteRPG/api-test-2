export { randomBtnCode };
function randomBtnCode() {
  const randomBtn = document.querySelector(".randomBtn");

  randomBtn.addEventListener("click", () => {
    let displayImg = document.querySelector(".displayImg");

    fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=iynhuQUGqRgxLYzfuv3bOxaTvkLzKHeY",
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        displayImg.src = response.data.images.original.url;
      })
      .catch((error) => {
        console.error("Error fetching the image:", error);
      });
  });
}
