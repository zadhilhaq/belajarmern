const btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    alert ("Game dimulai")
    play()
    hasil()
})
let pointp1 = 0
let pointp2 = 0
let player1;
let player2;
// Function untuk alur game
function game(){
    angka = Math.floor(Math.random()*3)+1
    player1 = prompt("Player 1: masukkan angka")
    player2 = prompt("Player 2: masukkan angka")
    // validasi angka
    if(!/^[0-9]+$/.test(player1)||!/^[0-9]+$/.test(player2)){
        alert("tebakan harus menggunakan angka")
        if(confirm("Ulangi??")){
            return game()
        }
        else{
            throw "exit"
        }        
    }
    // validasi input sama
    else if(player1== player2){
        alert("tebakan tidak boleh sama")
        if(confirm("Ulangi??")){
            return game()
        }
        else{
            throw "exit"
        }
    }
    // validasi input kurang dari
    else if(player1<1 ||player2<1){
        alert("tebakan tidak boleh kurang dari 1")
        if(confirm("Ulangi??")){
            return game()
        }
        else{
            throw "exit"
        }
    }
    // validasi input lebih dari 3
    else if(player1>3 ||player2>3){
        alert("tebakan tidak boleh lebih dari 3")
        if(confirm("Ulangi??")){
            return game()
        }
        else{
            throw "exit"
        }
    }
    //player 1 benar
    else if(angka==player1){
        pointp1=pointp1+1
        alert("player 1 menang")
        alert("nilai yang dicari:" +angka +"\n"+"player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
        lanjut()
    }
    // player2 benar
    else if(angka==player2){
        pointp2=pointp2+1
        alert("player 2 menang")
        alert("nilai yang dicari:" +angka +"\n"+"player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
        lanjut()
    }
    //player 1 dan player 2 salah
    else if(angka!=player1 && angka!=player2){
        alert("tidak ada yang benar hasil seri")
        alert("nilai yang dicari:" +angka +"\n"+"player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2) 
        lanjut()       
    }
}
// point akhir
function hasil(){
    if(pointp1>pointp2){
        alert("Player 1 menang" +"\n" + "Poin Akhir"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
    }
    else if(pointp2>pointp1){
        alert("Player 2 menang" +"\n" + "Poin Akhir"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
    }
    else{
        alert("Hasil imbang" +"\n" + "Poin Akhir"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
    }
}
// konfirmasi lanjut
function lanjut(){
    if(confirm("Lanjut??")){
        return
    }
    else{
        throw "exit"
    }
}
// perulangan game sampai ke 5
function play(){
let i=1
do {
    alert("Ronde ke-" + i)
    game(i)
    i++
}
while(i<6)
}