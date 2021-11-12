function searchShow(){
  const searchField = document.querySelector('.searchField')
  const url = 'https://newsapi.org/v2/top-headlines?q='+searchField.value+'&country=id&apiKey=1123d6ff28c6446b934f2e58cc959ab8'
  fetch(url)
  .then(response => response.json())
  .then(response => {
        
    const results = response.articles
    renderResults(results)
    console.log(results)
  })
}
 function tanpaQuery() {
   const url = `https://newsapi.org/v2/top-headlines?country=id&apiKey=1123d6ff28c6446b934f2e58cc959ab8`
   fetch(url)
   .then(response => response.json())
   .then(response => {
    const results = response.articles
    renderResults(results)
   })
 }


function renderResults(results){
  const list = document.querySelector('.resultsList')
  let cards = ''
  results.forEach(m => cards += showCards(m))
  list.innerHTML=cards
}

window.onload = () => {
  const searchButton = document.querySelector('.searchbutton')
  searchButton.addEventListener('click', function() {
    searchShow(searchButton.value)
  })
  tanpaQuery()
}

function showCards(m) {
  return `<div class="col-md-4 my-5">
  <div class="card">
      <img src="${m.urlToImage}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${m.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.author} - ${m.publishedAt}</h6>
        <p class="card-text">${m.description}</p>
      </div>
    </div>
</div>`
}