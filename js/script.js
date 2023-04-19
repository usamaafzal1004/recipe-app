const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_key = '5fea68764b4d42f0932cb37e54ec4794';

// Load the last search query from local storage, if available
const lastSearchQuery = localStorage.getItem('lastSearchQuery');
if (lastSearchQuery) {
  searchQuery = lastSearchQuery;
  searchForm.querySelector('input').value = lastSearchQuery;
  fetchAPI();
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector('input').value;
  localStorage.setItem('lastSearchQuery', searchQuery);
  fetchAPI();
});

async function fetchAPI() {
  const baseURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_key}&query=${searchQuery}&addRecipeInformation=true&number=9`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.results);
  console.log(data);
}

function generateHTML(results) {
  container.classList.remove('initial');
  let generatedHTML = '';
  results.map((result) => {
    generatedHTML += `
      <div class="item">
        <img src="${result.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.title}</h1>
          <a class="view-btn" target="_blank" href="${result.sourceUrl}">View Recipe</a>
        </div>
      </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}

// const baseURL = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&app_key=${APP_key}`;

// async function fetchAPI (){
//     const baseURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_key}&query=pasta`;  
//     const response = await fetch(baseURL).then(data=> data.json()).then(res=>{
//       console.log(res)
//     }).catch((error)=>{
//       console.log(error);
//     })
//     const data = await response.json();
//     // generateHTML(data.hits);
//     console.log(data);
// }
