
let cros = "X";  
let info = document.querySelector(".playerinfo");
// info of turn
let turninit = document.querySelector(".turninfo");
turninit.innerText = " Turn: Player 1";
function turn(){
    let turn = document.querySelector(".turninfo");
    if(cros === "X"){
         turn.innerText = " Turn: Player 1";
       }else{
        turn.innerText = "Turn: Player 2";
    }
}




// Game logic
let boxes = document.querySelectorAll(".block1");
//below both are the methods to convert into array
//  1. let arr =[...boxes];
let arr = Array.from(boxes);

arr.forEach(box=>{
    box.addEventListener("click",()=>{
       
        if (box.innerText==="") {
            box.innerText = cros;
           
            changeTurn();
            turn();
            gameWin();
        }
        // alternative turn

       
    });
});
// changing turn
function changeTurn(){
    cros = cros === "X" ? "O" : "X";
}
// reset button

let button = document.querySelector(".reset")
let wins =document.querySelector(".wins");
button.addEventListener("click",()=>{
    let arr =Array.from(boxes);
    arr.forEach(box => {
        box.innerText= "";
        wins.innerText="";
        });
      cros = "X"  ;
        
})

function gameWin(){
    
    let wins = document.querySelector(".wins");
        //Check rows
        if (
          arr[0].innerText === arr[1].innerText &&
          arr[0].innerText === arr[2].innerText &&
          arr[0].innerText !== "" 
          
        ) {
         
            if(arr[0].innerText === "X"){
                wins.innerText = " Player 1 wins";
            }else{
                wins.innerText = " Player 2 wins";
            }
          
        } else if (
          arr[3].innerText === arr[4].innerText &&
          arr[3].innerText === arr[5].innerText &&
          arr[3].innerText !== ""
        ) {
            if(arr[3].innerText === "X"){
                wins.innerText = " Player 1 wins";
            }else{
                wins.innerText = " Player 2 wins";
            }
          
          
        } else if (
          arr[6].innerText === arr[7].innerText &&
          arr[6].innerText === arr[8].innerText &&
          arr[6].innerText !== ""
        ) {
            if(arr[6].innerText === "X"){
                wins.innerText = " Player 1 wins";
            }else{
                wins.innerText = " Player 2 wins";
            }
         
        }
      
        // Check columns
        else if (
          arr[0].innerText === arr[3].innerText &&
          arr[0].innerText === arr[6].innerText &&
          arr[0].innerText !== ""
        ) {
            if(arr[0].innerText === "X"){
                wins.innerText = " Player 1 wins";
            }else{
                wins.innerText = " Player 2 wins";
            }
         
        } else if (
          arr[1].innerText === arr[4].innerText &&
          arr[1].innerText === arr[7].innerText &&
          arr[1].innerText !== ""
        ) {
            if(arr[1].innerText === "X"){
                wins.innerText = " Player 1 wins";
            }else{
                wins.innerText = " Player 2 wins";
            }
          
        } else if (
          arr[2].innerText === arr[5].innerText &&
          arr[2].innerText === arr[8].innerText &&
          arr[2].innerText !== ""
        ) {
            if(arr[2].innerText === "X"){
                wins.innerText = " Player 1 wins";
            }else{
                wins.innerText = " Player 2 wins";
            }
        
        } 
        // diagonal check
        else if(
            arr[0].innerText ===arr[4].innerText &&
            arr[0].innerText === arr[8].innerText &&
            arr[0].innerText !==""
        ){
            if(arr[0].innerText === "X"){
                wins.innerText = " Player 1 wins";
            }else{
                wins.innerText = " Player 2 wins";
            }
       
        }
        else if(
            arr[2].innerText ===arr[4].innerText &&
            arr[2].innerText === arr[6].innerText &&
            arr[2].innerText !==""
        ){
            if(arr[2].innerText === "X"){
                wins.innerText = " Player 1 wins";
            }else{
                wins.innerText = " Player 2 wins";
            }
            
        }
        turn.innerText="";
        
    }
      



   