let recipeSearch = document.querySelector("input");
let recipeContainer = document.querySelector(".container");

let url = "http://www.recipepuppy.com/api/?" + recipeSearch.value;

axios.get(url).then(function(response) {
  let data = response.results;

  data.forEach(function() {
    recipeContainer += `
            <a href="${data.href}"<div class="recipe" style ="background:url${data.thumbnail}">
                <p class="recipeTitle">${data.title}</p>
            </div></a>`;
  });
});
