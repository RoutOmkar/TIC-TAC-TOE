let AccessBtn = document.querySelectorAll(".box");
let AccessResetBtn = document.getElementById("reset-btn");
let AccessNewBtn = document.getElementById("new-btn");
let AccessMsgContainer = document.querySelector(".msg-container"); // Fixed: single container
let AccessShowWinnerBtn = document.getElementById("msg");

let turn0 = true;

const WinningZone = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

AccessBtn.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkResult();
    });
});

const showWinner = (winner) => {
    AccessShowWinnerBtn.innerText = `Winner is ${winner}`;
    AccessMsgContainer.classList.remove("hide");
};

const checkResult = () => {
    for (let i of WinningZone) {
        let value1 = AccessBtn[i[0]].innerText;
        let value2 = AccessBtn[i[1]].innerText;
        let value3 = AccessBtn[i[2]].innerText;

        if (value1 !== "" && value2 !== "" && value3 !== "") {
            if (value1 === value2 && value2 === value3) {
                showWinner(value1);
                disableAllButtons();
                return;
            }
        }
    }
};

const disableAllButtons = () => {
    AccessBtn.forEach((box) => {
        box.disabled = true;
    });
};

// Optional: Reset/New Game functionality
AccessResetBtn.addEventListener("click", () => {
    resetGame();
});
AccessNewBtn.addEventListener("click", () => {
    resetGame();
});

const resetGame = () => {
    turn0 = true;
    AccessBtn.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    AccessMsgContainer.classList.add("hide");
    AccessShowWinnerBtn.innerText = "";
};
