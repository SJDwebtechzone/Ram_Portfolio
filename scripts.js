// Typing effect for hero subtitle
const words = ["Designer", "Developer", "Freelancer"];
let i = 0, timer;
function typingEffect(){
  let word = words[i].split("");
  let loopTyping = function() {
    if(word.length > 0){
      document.querySelector(".typed").innerHTML += word.shift();
    } else {
      setTimeout(function(){
        deletingEffect();
      }, 1500);
      return false;
    };
    timer = setTimeout(loopTyping, 160);
  };
  loopTyping();
}

function deletingEffect(){
  let word = document.querySelector(".typed").innerHTML;
  let wordArray = word.split("");
  let loopDeleting = function(){
    if(wordArray.length > 0){
      wordArray.pop();
      document.querySelector(".typed").innerHTML = wordArray.join("");
    } else {
      i = (i + 1) % words.length;
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 80);
  };
  loopDeleting();
}

typingEffect();
