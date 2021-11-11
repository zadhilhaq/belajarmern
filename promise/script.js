function searchShow(query){
  const url = `https://newsapi.org/v2/top-headlines?q=${query}&country=id&apiKey=e70513e7c56a406fa8587bd8ecd6744f`
  fetch(url)
  .then(response => response.json(console.log(response)))
  .then(response => {
        
    const results = response.articles
    renderResults(results)
    console.log(results)
  })
}

function renderResults(results){
  const list = document.querySelector('.resultsList')
  let cards = ''
  results.forEach(m => cards += showCards(m))
  list.innerHTML=cards
}

window.onload = () => {
  const searchFieldElement = document.querySelector('.searchField')
  searchFieldElement.onkeyup = ()=>{
    searchShow(searchFieldElement.value)
  }
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