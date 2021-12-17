// paper0 crushes rock1
//  scissor 2 crushes paper 0
// rock crushes scissor
let user_action = "paper"
export function checker(user_action) {
    let computer_action = ["rock", "paper", "scissor"];
    let num = Math.floor(Math.random() * computer_action.length);
    // random()0-9*10, 0-9
    const compChoice = computer_action[num];
    console.log(compChoice);

    if (user_action === compChoice) {
      console.log("Both players selected. It's a tie!");
    } else if (user_action === "rock") {
      if (compChoice === "scissors") {
        console.log("Rock smashes scissors! You win!");
      } else {
        console.log("Paper covers rock! You lose.");
      }
    } else if (user_action === "paper") {
      if (compChoice === "rock") {
        console.log("Paper covers rock! You win!");
      } else {
        console.log("Scissor cuts paper! You lose.");
      }
    } else if (user_action === "scissors") {
      if (compChoice === "paper") {
        console.log("Scissors cuts paper! You win!");
      } else {
        console.log("Rock smashes scissors! You lose.");
      }
    }
}

// checker(user_action)


        