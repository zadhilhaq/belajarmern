const inputKeyword = document.querySelector('.input-keyword')
inputKeyword.addEventListener('click', function() {
    fetch('https://newsapi.org/v2/top-headlines?q='+inputKeyword.value+'&country=id&apiKey=e70513e7c56a406fa8587bd8ecd6744f' )
    .then(response =>  response.json(console.log(response)))
    .then(response => {
        
        const berita = response.articles
        let cards = ''
        berita.forEach(m => cards += showCards(m));
        const beritaContainer = document.querySelector('.berita-container')
        beritaContainer.innerHTML = cards
        console.log(response)
    })
})



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