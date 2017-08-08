let recipeSearch = document.querySelector("input");
let recipeContainer = document.querySelector(".container");

recipeSearch.addEventListener("keydown", function(e) {
  let url =
    "http://recipepuppyproxy.herokuapp.com/api/?q=" + recipeSearch.value;

  if (event.keyCode === 13) {
    axios.get(url).then(function(response) {
      let data = response.data.results;
      console.log(data);
      data.forEach(function(data) {
        let searchResults = ``;
        searchResults = `
            <div class="recipe" style="background-image: url(${data.thumbnail}), url(https://www.placecage.com/c/140/200)"><p class="recipeTitle"><a href="${data.href}">${data.title}</a></p>
            </div>`;

        recipeContainer.innerHTML += searchResults;
      });
    });
  }
});
