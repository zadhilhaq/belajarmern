function getData(url, succes, error) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if( xhr.readyState == 4) {
        if(xhr.status == 200){
          succes(xhr.response)
        }
        else if(xhr.status == 404){
          error();
        }
      }
    }

    xhr.open('get', url);
    xhr.send();
  }

console.log("mulai")

getData('https://jsonplaceholder.typicode.com/users', results => {
  const mhs = JSON.parse(results)
  let temp=""
  mhs.forEach(m =>{ 
    for (let i=0; i <1500000; i++){
      let date = new Date()
    }
    temp +="<tr>";
    temp +="<th>"+m.id+"</th>";
    temp +="<td>"+m.name+"</td>";
    temp +="<td>"+m.username+"</td>";
    temp +="<td>"+m.email+"</td>";
    temp +="<td>"+m.address.street+", "+m.address.suite+", "+m.address.city+"</td>";
    temp +="<td>"+m.company.name+"</td></tr>";
    console.log(m)
  }
  );

  document.getElementById("app").innerHTML=temp;
}, ()=> {})

console.log("selesai")
