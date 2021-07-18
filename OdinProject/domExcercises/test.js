const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

// a <p> with red text that says “Hey I’m red!”
const redP = document.createElement('p');
redP.style.cssText = 'color: red';
redP.textContent = "Hey I'm red!";

// an <h3> with blue text that says “I’m a blue h3!”
const blueH = document.createElement('h3');
blueH.style.cssText = 'color: blue';
blueH.textContent = "I'm a blue h3!";

// a <div> with a black border and pink background color with the following elements inside of it:
const anotherDiv = document.createElement('div');
anotherDiv.classList.add('anotherDiv');
anotherDiv.style.cssText='background: pink; border-style: solid';
  // another <h1> that says “I’m in a div”
  const hInDiv = document.createElement('h1');
  hInDiv.textContent = "I'm in a div";
  // a <p> that says “ME TOO!”
  const pInDiv = document.createElement('p');
  pInDiv.textContent = "ME TOO!";
  // Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.

container.appendChild(content);
container.appendChild(redP);
container.appendChild(blueH);
container.appendChild(anotherDiv);
anotherDiv.appendChild(hInDiv);
anotherDiv.appendChild(pInDiv);