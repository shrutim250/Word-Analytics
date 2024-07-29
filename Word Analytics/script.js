// Attach event listener to the textarea to count words on input
document.getElementById('words').addEventListener('input', countWords);
document.getElementById('words').addEventListener('input',countchar);
document.getElementById('words').addEventListener('input',counttweet);
document.getElementById('words').addEventListener('input',countfacebook);
function countWords() {
    const textarea = document.getElementById('words');
    const text = textarea.value; // Get the text from textarea
    const wordArray = text.trim().split(/\s+/);
    const count = wordArray[0] === '' ? 0 : wordArray.length; // Handle empty text
    
    // Update the span with the word count
    document.querySelector('.stat__number--words').textContent = count;
}

function countchar(){
    const textarea = document.getElementById('words');
    const text = textarea.value; // Get the text from textarea
    const count=text.length
    document.querySelector('.stat__number--characters').textContent = count;
}

function counttweet(){
    const textarea=document.getElementById('words')
    const text=textarea.value;
    const count=280+text.length;
    document.querySelector('.stat__number--twitter').textContent = count;
}
 function countfacebook(){
    const textarea=document.getElementById('words');
    const text=textarea.value;
    const count=2200+text.length;
    document.querySelector(".stat__number--facebook").textContent=count;
 }


