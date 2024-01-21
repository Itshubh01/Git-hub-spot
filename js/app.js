'use strict';

// import{fetchData} from "./api.js";
// import{numberToKilo} from "./module.js";

/**
 * add event listener on multiple elements
 * @param{Nodelist} $elements Nodelist
 * @param{String} $eventType String
 * @param{Function} $callback Function
 */

const addEventOnElements = function($elements,eventType,callback){
      for(const $item of $elements){
        $item.addEventListener(eventType, callback)
      }
};



// -------------Header Scroll state--------

const /**{NodeElements} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll",function(){
    $header.classList[this.window.screenY > 50? "add" : "remove"]
    ("active");
});


// --------------Search toggle---------------

const/**{NodeElement} */ $searchToggler = document.querySelector("[data-search-toggler]");
const /**{NodeElement} */ $searchField = document.querySelector("[data-search-field]");

let/**{boolean} */ isExpanded = false;

$searchToggler.addEventListener("click",function(){
    $header.classList.toggle("search-active");
    isExpanded = isExpanded ? false :true;
    this.setAttribute("aria-expanded", isExpanded);
    $searchField.focus();
});













// --------------------------------------------------------------------------------------------------------------
// basic working code for:
// 1. searching
// 2. pagination
// 3. loader
// 4.making api call using fetch
// --------------------------------------------------------------------------------------------------------------
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>GitHub Repositories</title>
//   <style>
//     #repositories {
//       margin-top: 20px;
//     }
//------------------------------ loader---- while loading the content
//     .loader {
//       display: none;
//     }
//   </style>
// </head>
// <body>
//   <h1>GitHub Repositories</h1>

//   <label for="username">GitHub Username:</label>
//   <input type="text" id="username" placeholder="Enter GitHub username">


//---------------------------- code for pagination 
// ---default 10 , max 100 per page
//   <label for="perPage">Repositories per page:</label>
//   <select id="perPage">
//     <option value="10">10</option>
//     <option value="20">20</option>
//     <option value="50">50</option>
//     <option value="100">100</option>
//   </select>

//   <label for="search">Search:</label>
//   <input type="text" id="search" placeholder="Enter repository name">

//   <button onclick="fetchRepositories()">Fetch Repositories</button>

//   <div id="loader" class="loader">Loading...</div>

//   <div id="repositories"></div>

//   <script>
//     const Url = 'https://api.github.com/users/';
//     let page = 1;

//     function fetchRepositories() {
//       const username = document.getElementById('username').value;
//       const perPage = document.getElementById('perPage').value;
//       const search = document.getElementById('search').value;
//       const url = `${Url}${username}/repos?page=${page}&per_page=${perPage}&q=${search}`;

//       ----------- Show loader
//       document.getElementById('loader').style.display = 'block';


//-------------// Make API call - without library way
//       fetch(url)
//         .then(response => response.json())
//         .then(data => {
//           // Hide loader
//           document.getElementById('loader').style.display = 'none';

//           // Process data and render repositories
//           renderRepositories(data);
//         })
//         .catch(error => {
//           // Handle error
//           console.error('Error fetching repositories:', error);
//           // Hide loader
//           document.getElementById('loader').style.display = 'none';
//         });
//     }

//     function renderRepositories(repositories) {
//       const repositoriesContainer = document.getElementById('repositories');
//       repositoriesContainer.innerHTML = '';

//       repositories.forEach(repo => {
//         // Create HTML elements for each repository
//         const repoElement = document.createElement('div');
//         repoElement.innerHTML = `<p>${repo.name}</p>`;
//         // Add more details as needed

//         // Append repository element to container
//         repositoriesContainer.appendChild(repoElement);
//       });
//     }
//   </script>
// </body>
// </html>
