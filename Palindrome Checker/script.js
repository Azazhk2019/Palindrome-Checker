const button = document.getElementById("btn")
const input = document.getElementById("input-password");
const result = document.getElementById("result")

button.addEventListener("click",()=>{
    const userInput = input.value;
    const cleanedInput = userInput.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedInput.split("").reverse("").join("");
    if (cleanedInput === reversedStr){
        result.textContent = `${cleanedInput} is a palindrome`
    }else{
        result.textContent = `${cleanedInput} is not a palindrome`
    }
    input.value = ""  
})