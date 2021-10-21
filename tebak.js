const btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    alert ("Game dimulai")
    game()
})
let pointp1 = 0
let pointp2 = 0
function game(){
    let player1 = prompt("Player 1: masukkan angka")
    let player2 = prompt("Player 2: masukkan angka")
    
    if(player1==player2){
        alert ("tebakan tidak boleh sama")
        return game()
    }
    else{
        if(player1==1){
            pointp1=pointp1+1
            alert("Poin Sementara"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
            alert("lanjut ke game ke-2")
            return game2()
        }
        else if(player2==1){
            pointp2= pointp2+1
            alert("Poin Sementara"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
            alert("lanjut ke game ke-2")
            return game2()
        }
        else{
            alert("Poin Sementara"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
            alert("lanjut ke game ke-2")
            return game2()
        }
    }
}
function game2(){
    let player1 = prompt("Player 1: masukkan angka")
    let player2 = prompt("Player 2: masukkan angka")
    if(player1==player2){
        alert ("tebakan tidak boleh sama")
        return game2()
    }
    else{
        if(player1==2){
            pointp1=pointp1+1
            alert("Poin Sementara"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
            alert("lanjut ke game ke-3")
            return game3()
        }
        else if(player2==2){
            pointp2= pointp2+1
            alert("Poin Sementara"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
            alert("lanjut ke game ke-3")
            return game3()
        }
        else{
            alert("Poin Sementara"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
            alert("lanjut ke game ke-3")
            return game3()
        }
    }

}
function game3(){
    let player1 = prompt("Player 1: masukkan angka")
    let player2 = prompt("Player 2: masukkan angka")
    if(player1==player2){
        alert ("tebakan tidak boleh sama")
        return game3()
    }
    else{
        if(player1==3){
            pointp1=pointp1+1
            alert("Poin Sementara"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
            alert("lanjut ke game ke-4")
            return game4()
        }
        else if(player2==3){
            pointp2= pointp2+1
            alert("Poin Sementara"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
            alert("lanjut ke game ke-4")
            return game4()
        }
        else{
            alert("Poin Sementara"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
            alert("lanjut ke game ke-4")
            return game4()
        }
    }

}
function game4(){
    let player1 = prompt("Player 1: masukkan angka")
    let player2 = prompt("Player 2: masukkan angka")
    if(player1==player2){
        alert ("tebakan tidak boleh sama")
        return game4()
    }
    else{
        if(player1==2){
            pointp1=pointp1+1
            alert("Poin Sementara"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
            alert("lanjut ke game ke-5")
            return game5()
        }
        else if(player2==2){
            pointp2= pointp2+1
            alert("Poin Sementara"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
            alert("lanjut ke game ke-5")
            return game5()
        }
        else{
            alert("Poin Sementara"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
            alert("lanjut ke game ke-5")
            return game5()
        }
    }

}
function game5(){
    let player1 = prompt("Player 1: masukkan angka")
    let player2 = prompt("Player 2: masukkan angka")
    if(player1==player2){
        alert ("tebakan tidak boleh sama")
        return game5()
    }
    else{
        if(player1==1){
            pointp1=pointp1+1
            return hasil()
        }
        else if(player2==1){
            pointp2= pointp2+1
            return hasil()
        }
        else{
            return hasil()
        }
    }

}
function hasil(){
    if(pointp1>pointp2){
        alert("Player 1 menang" + "Poin Akhir"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
    }
    else if(pointp2>pointp1){
        alert("Player 2 menang" + "Poin Akhir"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
    }
    else{
        alert("Hasil imbang" + "Poin Akhir"+ "\n" + "player 1 ="+ pointp1 + "\n" + "player 2 =" + pointp2)
    }
}
