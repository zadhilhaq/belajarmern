//membuat class
class Table{
    // metode constructor harus dibuat untuk mengenisialisasi object pada class
    constructor(init) {
        this.init = init;
      }
    // membuat header tabel
    createHeader(data) {
        let open = "<thead><tr>";
        let close = "</tr></thead>";
        data.forEach((d) => {
          open += `<th>${d}</th>`;
        });
    
        return open + close;
      }
    //membuat body tabel
    createBody(data) {
        let open = "<tbody>";
        let close = "</tbody>";
    
        data.forEach((d) => {
          open += `
            <tr>
              <td>${d[0]}</td>
              <td>${d[1]}</td>
              <td>${d[2]}</td>
              <td>${d[3]}</td>
            </tr>
          `;
        });
    
        return open + close;
      }
    // merender elemen (yang berisi salah satu class bootstrap) tabel ke html
    render(element) {
        let table =
          "<table class='table table-bordered'>" +
          this.createHeader(this.init.columns) +
          this.createBody(this.init.data) +
          "</table>";
        element.innerHTML = table;
      }
}
// membuat table
const table = new Table({
    columns: ['No','Name', 'Email', 'Educational Background'],
    data: [
      ['1','Reza', 'reza@example.com', 'Universitas Sumatera Utara'],
      ['2','Dhia', 'dhia@gmail.com', 'Universitas Sumatera Utara'],
      ['3','Ulhaq', 'ulhaq@gmail.com', 'Universitas Sumatera Utara']
    ]
  });
// render app
const app = document.getElementById("app");
table.render(app);