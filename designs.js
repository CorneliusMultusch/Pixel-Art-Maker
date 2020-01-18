function makeGrid(rows, cols) {
    let table = document.querySelector("#pixelCanvas");
    let grid = '';

    for (let x = 0; x < rows; x++) {							// loops over each row 
        grid += '<tr class="row-' + x + '">';

        for (let y = 0; y < cols; y++) {						// loops over each cell 
            grid += '<td class="cell" id="row-' + y + '_cell-' + y + '"></td>';
        }
        grid += '</tr>';
    }
	table.innerHTML = grid;
															// add click event when the Grid is createted 
    addClickEventToCells();
}
															// gests value for height and width from and passed this values to make a grid
function submission() {
    event.preventDefault();
    let rows = document.querySelector('#inputHeight').value;
    let cols = document.querySelector('#inputWidth').value;
    makeGrid(rows, cols);
}
														// add a click event to all cells 
function addClickEventToCells() {
   
    let colorPicker = document.querySelector("#colorPicker");		//returns color
    let cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickCell = event.target;
            clickCell.style.backgroundColor = colorPicker.value;
        });
    }
}

document.querySelector('#sizePicker').onsubmit = function () {
    submission();
};
makeGrid(25, 25); 									//build a 25 x25 grid 
