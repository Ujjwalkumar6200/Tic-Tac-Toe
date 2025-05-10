// let marks = [22,33,44,55];
// let cnt = 0;
// for(let i=0;i<marks.length;i++){
//     console.log(`marks befor discount ${marks[i]}`)
//      cnt = marks[i]/10;
//      console.log(`marks after 10% discount ${ marks[i]-cnt}`);
     
    
// }; 

// const arrowsum = (x,y) => {
//     console.log(x*y);
// }
// const cVowels =(str)=>{
//     let cnt = 0;
//     for(let i =0;i<str.length;i++){
//         if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
//             cnt++;
//         }
//     } console.log(cnt);


// }

// let n = prompt("enter your number ");

// let array =[];
// for(let i =1; i<=n;i++){
//     array[i-1]= i;


// }
// console.log(array);

// let sum = array.reduce((a,b) => {
//     return a *b;
// })
// console.log(sum);
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText= h2.innerText + "hello ujjwal apna colege";

// let newButton = document.createElement("Button");
// newButton.innerText= "click me" ;
// newButton.style.backgroundColor = "red";
// newButton.style.color = "white";

// document.querySelector("body").append(newButton);

// let btn = document.querySelector("button");
// let current = "light";
// btn.addEventListener("click", () =>{
//     if(current==="light"){
//         current="dark";
    
//     document.querySelector("body").style.backgroundColor = "black";
//     }
//     else{
//         current="light";
        
//             document.querySelector("body").style.backgroundColor = "white";
//     } console.log(current);
// })



let boxes =document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-game");
let newbtn =document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turn0 =true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const restg = () =>{
    turn0 = "true";
    enbtn();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        
        if(turn0){
            box.innerText ="O";
            turn0 = false;
        } else{
        box.innerText ="X"
        turn0= true;}
        box.disabled = true;
        checkwinner();
    });
});
const enbtn =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}
const disbtn =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerText = `congrats the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disbtn();


}

const checkwinner = () =>{
    for(pattern of winPatterns){
    let pos1 =boxes[pattern[0]].innerText;
    let pos2 =boxes[pattern[1]].innerText;
    let pos3 =boxes[pattern[2]].innerText;

    if(pos1!="" && pos2!="" &&pos3!="")
    if(pos1===pos2&&pos2===pos3){
        
        showWinner(pos1);
    }
    }


}
 newbtn.addEventListener("click",restg);
 resetButton.addEventListener("click",restg);




