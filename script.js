//connect your page to JS file using the script tag
// select a single element DONE
// select multiple elements DONE
// modify your element's text DONE
// modify your element's styles DONE
// add a button and event listener for button clicks


// ========================================================================================



// select a single element
// modify your element's style
let headerImage = document.querySelector("#header-img");

headerImage.style.width = "1.2rem";
headerImage.style.height = "auto";

//select multiple elements

let navbarAnchorText = document.querySelectorAll("#nav-bar ul a");

// navbarAnchorText.style.color = "black";
// navbarAnchorText.style.textDecoration = "none";

navbarAnchorText.forEach((anchor) => {
  anchor.style.color = "black";
  anchor.style.textDecoration = "none";
});

// modify your element's text
let changeText = (document.querySelector(
  "#apple-newsletter-label"
).textContent = "Apple Newsletter!");



// create a new button
let submitInput = document.createElement("input");

submitInput.type = "submit";
submitInput.value = "Subscribe!";

// styling of the buttons
submitInput.style.fontFamily = "San Francisco";
submitInput.style.backgroundColor = "#0071e3";
submitInput.style.color = "white";
submitInput.style.fontSize = "1rem";
submitInput.style.padding = "0.75rem";
submitInput.style.border = "none";
submitInput.style.borderRadius = "0.5rem";
submitInput.style.cursor = "pointer";
submitInput.style.transition = "background 0.3s ease-in-out";


// event listener for button click
submitInput.addEventListener("click", subscribedClick);



function subscribedClick(event) {
    // targeting the email input 
  let emailFill = document.getElementById("email-input");

// you can't submit unless you fill up the email input properly
  if (!emailFill.validity.valid) {
    return;
  }

//  stops the form from submitting immediately.
  event.preventDefault();

// the new values after clicking the submit button
  this.value = "Subscribed!";
  this.style.setProperty("background-color", "green", "important");
  this.style.color = "white";


//   delays the submit || i delayed the submit to show the change of the background color of the button (also changes "Subscribe!" to "Subscribed!")
  setTimeout(() => {
    // Submit form using ID
    document.getElementById("email-newsletter").submit();
  }, 1000);
} 


// targets the email input bar
let emailInput = document.querySelector("#email-input");

// this places the new button created under the email input bar
emailInput.after(submitInput);
