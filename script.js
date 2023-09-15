/*Ensure Proper Loading: Ensure that your JavaScript code is executed after the HTML document has finished loading. You can do this by placing your JavaScript code inside an event listener that listens for the "DOMContentLoaded" event.
 */

function playSound(e) {
  // console.log(e); //tell the which key is pressed or simply say keydown

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //that how we select an attribute property of an element we syntax= tagName[property to select].

  //selected key element from the html code and its attribute as well
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  //if keypress gives which doesnot matches with the given values ,use this way to stop the function using return.
  if (!audio) return; //stop the function all together
  audio.currentTime = 0; //rewind to the start always whenever u keypress.
  audio.play(); //in js play method helps to play the audio which is stored in html code using audio tag and store into its attribute.

  var element = document.querySelector(".key");
  key.classList.add("playing");
}

window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key"); //gives nodelist,what is nodelist-->A NodeList is an ordered list of DOM nodes. These nodes can be elements, text nodes, attributes, etc., found in the document.
//   something like which resembles array but not exactly array it has same properties as array do like using index to get the element of nodelist,but nodelist are live in nature it means whenever we made any changes it automatically apply and give live output .

function removeTransition(e) {
  if (e.propertyName != "transform") return;
  console.log(e.propertyName);
  console.log(this);
  this.classList.remove("playing");
}
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
