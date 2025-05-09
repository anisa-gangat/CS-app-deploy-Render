console.log ("Deploy to Render");

async function getPosts(){
  console.log("I am getPosts, and I am about to fetch some data");
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const beachesResponse = await fetch("https://cs-app-deploy-render.onrender.com/beaches");

console.log (response);
const data = await response.json();
console.log (data);
console.log (" I am getPosts, and i'm about to give the data to renderDataOnToPage()");
renderBeachesOnToPage(beachesResponse);
}

function renderBeachesOnToPage(apiResults) {

  console.log("I am renderBeachesOnToPage, and I am about to loop through the array");

  const resultDiv = document.getElementById ("results");
  resultDiv.innerHTML = "";

  for (let index = 0; index < apiResults.length; index++){
    const element = apiResults[index];
    console.log(element);

    const newName = document.createElement("h2");
    const newLocation = document.createElement ("p");
    const newDescription = document.createElement ("p");

    newName.textContent = element.name; 
    newLocation.textContent = element.location; 
    newDescription.textContent = element.description; 

    resultsDiv.appendChild(newName, newLocation, newDescription);
  }
}

const postsBtn = document.getElementById("get-posts-button");
postsBtn.addEventListener("click", function() {
  console.log("I am about to call getPosts()");
  getPosts(); 
});

