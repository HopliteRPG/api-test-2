export { randomBtnCode };
function randomBtnCode() {
  const randomBtn = document.querySelector(".randomBtn");

  randomBtn.addEventListener("click", () => {
    let displayImg = document.querySelector(".displayImg");

    fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=iynhuQUGqRgxLYzfuv3bOxaTvkLzKHeY&s=cats",
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        displayImg.src = response.data.images.original.url;
      })
      .catch((e) => {
        console.log(e);
      });
  });
}
