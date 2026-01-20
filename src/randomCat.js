export { catOnStartUp };
function catOnStartUp() {
  const img = document.querySelector(".displayImg");

  async function getCats() {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=iynhuQUGqRgxLYzfuv3bOxaTvkLzKHeY&s=cats",
    );
    const catData = await response.json();
    img.src = catData.data.images.original.url;
  }
  getCats();
}
