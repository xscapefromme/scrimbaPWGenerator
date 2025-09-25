const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



// So when user clicks on generatePasswords it comes out a random number of letters being a max of 20 characters.Looking like im going to use textContent on the button 

//Can add a reset button right below it where it resets back to 0/none.

let passwordResult1 = document.querySelector(".passwordResult1")
let passwordResult2 = document.querySelector(".passwordResult2")
let copyPassword = document.querySelector(".copyPassword")



function generatePasswords() {
    let password1 = "";
    let password2 = "";

    for (let i = 0; i < characters.length; i++){
    let charIndex1 = Math.floor(Math.random()*characters.length)

        if(password1.length < 15){
           password1 += characters[charIndex1];
        }
        
    }

    for(i = 0; i < characters.length; i++){
        let charIndex2 = Math.floor(Math.random()*characters.length)

        if(password2.length < 15 ){
            password2 += characters[charIndex2]
        }

    }
     passwordResult1.textContent = password1;
     passwordResult2.textContent = password2;
}

function copyPW1(){
    let passwordCopy = passwordResult1.textContent 
    navigator.clipboard.writeText(passwordCopy)
    console.log("Clicked!")
}
function copyPW2(){
    let passwordCopy = passwordResult2.textContent
    navigator.clipboard.writeText(passwordCopy)
    console.log("Yes its being clicked come back when you have more information on how to set the copy clipboard more properly")
}


function resetButton(){

    let passwordReset = ""

    passwordResult1.textContent = passwordReset;
    passwordResult2.textContent = passwordReset;

}

