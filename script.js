function play() {
  let name = prompt("Enter your name:","Ayush");
  document.querySelector("#name").innerHTML = name;
  document.querySelector("#msg").innerHTML='Play again';

  let userScore = 0;
  let cmpScore = 0;

  const arr = ['rock', 'paper', 'scissors'];

  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");

  rock.addEventListener('click', function () {
    playGame('rock');
  });

  paper.addEventListener('click', function () {
    playGame('paper');
  });

  scissors.addEventListener('click', function () {
    playGame('scissors');
  });

  function playGame(userChoice) {
    const ran = Math.floor(Math.random() * 3);
    const cmpChoice = arr[ran];

    if (userChoice === cmpChoice) {
      // Draw
      const result = document.getElementById("sms");
      result.style.background="yellow";
      document.querySelector("#sms").innerHTML = "Match draw";
    } else if ((userChoice === "rock" && cmpChoice === "scissors") ||
      (userChoice === "paper" && cmpChoice === "rock") ||
      (userChoice === "scissors" && cmpChoice === "paper")) {
      // User wins
      userScore++;
      document.querySelector("#userScore").innerHTML = userScore;
      const result = document.getElementById("sms");
      result.style.background="green";

      document.querySelector("#sms").innerHTML = "You win!";
    } else {
      // Computer wins
      cmpScore++;
      const result = document.getElementById("sms");
      result.style.background="red";
      document.querySelector("#score").innerHTML = cmpScore;
      document.querySelector("#sms").innerHTML = "You lose!";
    }
  }
}

// gsap
const tl = gsap.timeline();
tl.from("h1",{
  backgroundColor: "red",
  opacity: 0,
  duration:0.8,
  rotate:30,
  scale:0,
  y:-20,
})

tl.from(".choice",{
  opacity:0,
  rotate:720,
  y:-400,
  x:-150,
  scale:0,
  stagger:0.4
})
tl.from(".scoreBoard",{
  opacity:0,
  y:-400,
  x:-150,
  rotate:30,
  scale:0
})
tl.from(".scoreBoard .score",{
  opacity:0,
  rotate:-30,
  scale:3,
  stagger:0.3
})

tl.from(".msgCotainer",{
  opacity:0,
  y:6,
  x:10,
  scale:1.3,
  rotate:60,
  duration:0.3
});

tl.from("#sms",{
  opacity:0,
  scale:1.2,
  rotate:20,
  duration:0.5
})
tl.from("body",{
  backgroundColor:"#f87b",
  x:200,
  ease:"bounce.in",
  y:-50,
  duration:2
})

tl.to("body",{
  backgroundColor:"#ff00ff78",
  duration:0.5,
  ease:"bounce.in"
})