console.log ("Deploy to Render");

async function getPosts(){
  console.log("I am getPosts, and I am about to fetch some data");
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");

console.log (response);
const data = await response.json ();
console.log (data);
console.log (" I am getPosts, and i'm about to give the data to renderDataOnToPage()")
renderDataOnToPage(data);
}

function renderDataOnToPage(apiResults) {

  console.log("I am renderDataOnToPage, and I am about to loop through the array");

  const resultDiv = document.getElementById ("results");
  resultDiv.innerHTML = "";

  for (let index = 0; index < apiResults.length; index++){
    const element = apiResults[index];
    console.log(element);

    const newTitle = document.createElement("h2");
    const newBody = document.createElement ("p");

    newTitle.textContent = element.title; 
    newBody.textContent = element.body; 

    resultsDiv.appendChild(newTitle, newBody);
  }
}

const postsBtn = document.getElementById("get-posts-button");
postsBtn.addEventListener("click", function() {
  console.log("I am about to call getPosts()");
  getPosts(); 
});

