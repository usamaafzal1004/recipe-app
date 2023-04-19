// const searchForm = document.querySelector('form');
// const searchResultDiv = document.querySelector('.search-result');
// const container = document.querySelector('.container');
// let searchQuery = '';
// const APP_key = 'b41d9066487f414bb7a5a6bd1ba251b2';
// const baseURL = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&app_key=${APP_key}`;

// searchForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   searchQuery = e.target.querySelector('input').value;
//   fetchAPI()
// });


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

async function fetchAPI() {
  const baseURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APP_key}`;
  const response = await fetch(baseURL);
  const data = await response.json();
  // generateHTML(data.results);
  console.log(data);
}

fetchAPI();

