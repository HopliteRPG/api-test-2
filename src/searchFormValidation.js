export { searchForGif };

const url =
  "https://api.giphy.com/v1/gifs/translate?api_key=G6eaRdpSfKNxkPxUaTfZqlQTunEOpd0y&s=";

function searchForGif() {
  const searchBar = document.querySelector(".searchbarInput");

  const searchBtn = document.querySelector(".searchBtn");

  const validSearchRegEx = /^[A-Za-z ]+$/;

  const isValidSearch = () => {
    let searchBarValue = searchBar.value;
    const validity =
      searchBarValue.length !== 0 && validSearchRegEx.test(searchBarValue);
    return validity;
  };

  searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const img = document.querySelector(".displayImg");

    if (isValidSearch() === true) {
      let encodedSearchTerm = encodeURIComponent(searchBar.value);
      let searchableUrl = `${url}${encodedSearchTerm}`;
      console.log(searchBar.value);
      console.log(searchableUrl);

      fetch(searchableUrl)
        .then(function (response) {
          return response.clone().json();
        })
        .then(function (response) {
          img.src = response.data.images.original.url;
          console.log(response);
        })
        .catch((error) => {
          console.error("Error fetching the image:", error);
        });
    } else {
      alert("Type a word with only letters from A-Z");
    }
  });
}
