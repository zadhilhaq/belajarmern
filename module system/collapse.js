export default class Collapse{
    constructor(init){
      this.init=init
    }
    buttonCollapse(text){
      text= `<p style=" margin-left: 32%;">
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
      </p>`+
      `<div class="row">
    <div class="col">
      <div class="collapse multi-collapse" id="multiCollapseExample1">
        <div class="card card-body">`+
        this.textPertama(this.init.data)+
          `</div>
      </div>
    </div>`+
    `<div class="col">
      <div class="collapse multi-collapse" id="multiCollapseExample2">
        <div class="card card-body">`+
        this.textKedua(this.init.data)+
          `</div>
      </div>
    </div>`+
    `</div>
    `
    return text 
    }
    textPertama(data){
      let open = "<div>";
          let close = "</div>";
          open = `<p>${data[0]}</p>`
      
          return open + close;
    }
    textKedua(data){
      let open = "<div>";
          let close = "</div>";
          open = `<p>${data[1]}</p>`
      
          return open + close;
    }
    render(elemen){
      let collapse=
      this.buttonCollapse()
      elemen.innerHTML= collapse
    }
  }