let money = 0;
let stress = 100;
let hope = true;

while (hope) {
  console.log("Wake up 😴");
  console.log("Go to school/work 📚💼");
  console.log("Try your best...");
  
  money += 10;
  stress += 20;

  if (money > 50) {
    console.log("Finally got some money 💰");
    stress -= 30;
  }

  if (stress >= 150) {
    console.log("Life said: 'New problems unlocked' 😭");
    stress += 50;
  }

  if (money >= 100) {
    console.log("You made it... but now bills are waiting 😂");
    break;
  }
}

console.log("Life is hard, but we keep going 💪");