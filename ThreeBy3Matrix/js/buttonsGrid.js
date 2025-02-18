const buttons = [
  {label: 1, id: 'btn1'}, 
  {label: 2, id: 'btn2'}, 
  {label: 3, id: 'btn3'}, 
  {label: 4, id: 'btn4'}, 
  {label: 5, id: 'btn5'}, 
  {label: 6, id: 'btn6'}, 
  {label: 7, id: 'btn7'},
  {label: 8, id: 'btn8'},
  {label: 9, id: 'btn9'},
];

const buttonContainer = document.getElementById("btns");

function renderBtns() {
  buttonContainer.innerHTML = "";

  buttons.forEach((b) => {
      const btn = document.createElement("button");
      btn.textContent = b.label;
      btn.id = b.id;
      btn.classList.add("btn");

      if(b.id === "btn5") {
          btn.addEventListener("click", () => rotateClockWise())
      }

      buttonContainer.appendChild(btn);  
  })
}


const positions = [0,1,2,5,8,7,6,3];


function rotateClockWise() {
  // Extract labels at given positions
  const newPositionLabels = positions.map((p, i) => buttons[positions[(i+7)%8]].label);
  positions.map((pos, i) => buttons[pos].label = newPositionLabels[i]);
  
  renderBtns();
  
}

renderBtns();
