function draw(){

  number = parseInt(Math.random()*100)
  choice = 0
  lownum = 0
  hinum = 100
  guess = 0
  initial = prompt("Name:")
  while (choice != number){
    choice = parseInt(prompt("Choose a number from "+lownum+" - "+hinum+"."))
    if (choice > number){
      alert("too big")
      if (choice < hinum){
        hinum = choice
      }
    }
    else if (choice < number){
      alert("too small")
      if (choice > lownum){
        lownum = choice
      }
    }
    guess = guess + 1
  }
  alert("you win, took you "+guess+" guess(es).")
  leaderboard = document.getElementById("leaderboard")
  para = document.createElement("p")
  text = (initial+":  "+guess)
  para.textContent = text
  leaderboard.append(para)
}


