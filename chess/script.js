
let board = null;
let game = new Chess();
let currentNode = null;
let correctLines = 0;
let totalLines = 0;
let playas = null;

function updateProgress() {
    const progress = (correctLines / totalLines) * 100;
    document.getElementById("progress").innerText = `Progress: ${progress.toFixed(2)}%`;
}

let currMoveElement = null;
function updateMoveList(move) {
    const movesElement = document.getElementById('moves');
    if (currMoveElement === null) {
        currMoveElement = document.createElement('li');
        currMoveElement.textContent = move;
        movesElement.appendChild(currMoveElement);
    } else {
        currMoveElement.textContent += " " + move;
        currMoveElement = null;
    }
}

function userMove(move) {
    const moveSAN = move.san; // Get the move in SAN

    if (currentNode && currentNode[moveSAN]) {
        currentNode = currentNode[moveSAN];

        updateMoveList(moveSAN);
        if (currentNode["end"]) {
            board.position(game.fen(), false);
            document.getElementById("feedback").innerText = `Congratulations! You completed ${currentNode["end"]} with no mistakes.`;
        } else {
            board.position(game.fen(), false);
            document.getElementById("feedback").innerText = "Good!";
            setTimeout(computerMove, 200);
        }
        return true;
    } else {
        const correctMove = Object.keys(currentNode)[0];
        document.getElementById("feedback").innerText = `Incorrect move. You should have played ${correctMove}.`;
        return false;
    }
}

function computerMove() {
    const possibleResponses = Object.keys(currentNode);
    const randomResponse = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
    const m = game.move(randomResponse.replace("?", ""));
    board.position(game.fen(), true);
    updateMoveList(randomResponse);
    currentNode = currentNode[randomResponse];
    if (currentNode["end"]) {
        document.getElementById("feedback").innerText = `Congratulations! You completed ${currentNode["end"]} with no mistakes.`;
    }
}


function onDragStart(source, piece, position, orientation) {
    if (game.in_checkmate() || game.in_draw() || (playas === "black" ? piece.search(/^w/) !== -1 : piece.search(/^b/) !== -1)) {
        return false;
    }
}

function onDrop(source, target) {
    const move = game.move({
        from: source,
        to: target,
        promotion: 'q'
    });

    if (move === null) return 'snapback';
    const isValid = userMove(move);

    if (!isValid) {
        game.undo(); // Undo the move to snap it back
        board.position(game.fen());
        return 'snapback';
    }

    return true;
}

function onMoveEnd(oldPos, newPos) {
    console.log(newPos);
}

function flatten(tree) {
    const result = {};

    function toObject(list, label) {
        let result = {};
        let current = result;

        for (let i = 0; i < list.length; i++) {
            const key = list[i];
            current[key] = {};
            current = current[key];
        }
        current["end"] = label;

        return result;
    }

    function traverse(node, path) {
        for (const key in node) {
            if (node.hasOwnProperty(key)) {
                if (key === "end" && node[key]) {
                    result[node[key]] = toObject(path, node[key]);
                } else {
                    traverse(node[key], path.concat(key));
                }
            }
        }
    }

    traverse(tree, []);
    return result;
}

document.getElementById("opening-select").addEventListener("change", () => {
    const selectedOpening = document.getElementById("opening-select").value;
    const lineSelect = document.getElementById("line-select");
    lineSelect.innerHTML = "";
    const lines = flatten(openings[selectedOpening]);
    for (const key of Object.keys(lines)) {
        const option = document.createElement('option');
        option.value = key;   // Set the option's value to the key
        option.textContent = key; // Set the display text to the key
        lineSelect.appendChild(option); // Append the option to the select element
    }
    const option = document.createElement('option');
    option.value = "Free play";   // Set the option's value to the key
    option.textContent = "Free play"; // Set the display text to the key
    lineSelect.appendChild(option); // Append the option to the select element
});

document.getElementById("start-button").addEventListener("click", () => {
    game.reset();
    board.position('start');
    document.getElementById("moves").innerHTML = ""; // Clear the move list
    currMoveElement = null;
    const selectedOpening = document.getElementById("opening-select").value;
    const selectedLine = document.getElementById("line-select").value;

    const lines = flatten(openings[selectedOpening]);
    lines["Free play"] = openings[selectedOpening];

    currentNode = lines[selectedLine];

    playas = document.getElementById("play-as").value;
    board.orientation(playas);
    if (playas == "black") {
        computerMove();
    }
});


const select = document.getElementById("opening-select");
for (const key of Object.keys(openings)) {
    const option = document.createElement('option');
    option.value = key;   // Set the option's value to the key
    option.textContent = key; // Set the display text to the key
    select.appendChild(option); // Append the option to the select element
}

const config = {
    draggable: true,
    //position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onMoveEnd: onMoveEnd
};


board = Chessboard('board', config);
