// 1 პირველი შელოცვა
// შელოცვის შექმნა
function castSpell(spellName) {
  let result = "Casted: " + spellName;
  return result;
}

// შელოცვის გამოყენება
let attack = castSpell("Expelliarmus");
console.log(attack);

// 2 აურა (Scope)

let hogwartsMana = 1000;

function healingRoom() {
  let roomMana = 200;
  let hogwartsMana = 5000;
  //shadowing
  console.log(hogwartsMana); // 5000
}

healingRoom();
console.log(hogwartsMana); // ისევ 1000
// console.log(roomMana); -> ERROR !

// 3 ჯოხის ქნევის ტექნიკა
// Direct Execution პირდაპირი
castSpell();
//  /ndirerct Execution ირიბი
castSpell;

// 4 უსიტყვო მაგია (ES6)

// ტრადიციული
function lumos() {
  return "Wand is glowing";
}
// arrow function (თანამედროვე)
const patronus = (animal) => {
  return "Expecto: " + animal;
};

console.log(patronus("Stag"));

// 5 დუელის კლუბი (მისია)

// 1
function calculateDamage(base, crit) {
  return base * crit;
}
// 2
let healPotion = (hp) => {
  hp + 50;
};
// 3
let myHealth = 100;
// 4
myHealth = myHealth - calculateDamage(20, 2);
console.log(myHealth);
// 5
myHealth = healPotion(myHealth);
console.log(myHealth);
