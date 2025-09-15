class User {
  constructor(_name, _surname, _age, _location) {
    this.firstName = _name;
    this.lastName = _surname;
    this.age = _age;
    this.location = _location;
  }
  static showToOld(user1, user2) {
    if (user1.age > user2.age) {
      return `${user1.firstName} è più vecchio di ${user2.firstName}`;
    } else if (user1.age < user2.age) {
      return `${user2.firstName} è più vecchio di ${user1.firstName}`;
    } else {
      return `${user1.firstName} e ${user2.firstName} hanno la stessa età`;
    }
  }
}

const user1 = new User("Luigi", "Ventriglia", 28, "Caserta");
const user2 = new User("Stefano", "Miceli", 33, "Udine");
const user3 = new User("Dobri", "Dobrev", 33, "Umbria");
const user4 = new User("Salvatore", "Di Cesare", 23, "Napoli");
console.log(User.showToOld(user1, user2));
console.log(User.showToOld(user2, user1));
console.log(User.showToOld(user3, user2));
console.log(User.showToOld(user1, user4));

class Pet {
  constructor(_name, _ownerName, _species, _breed) {
    this.firstName = _name;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  static isSameOwner(pet1, pet2) {
    if (pet1.ownerName === pet2.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const form = document.getElementById("pet");
const arrayPet = [];
const divPet = document.getElementById("listPet");
let array = [];
const btnCompare = document.getElementById("btnCompare");
const btnReste = document.getElementById("btnReset");

const addPet = function () {
  const divNone = document.getElementById("removeNone");
  const div = document.createElement("div");
  div.classList.add(
    "pet",
    "border",
    "border-3",
    "border-success",
    "rounded-4",
    "d-flex",
    "flex-wrap",
    "justify-content-between",
    "align-items-center",
    "gap-2",
    "p-2",
    "my-3"
  );
  div.setAttribute("data-index", arrayPet.length - 1);
  const petKeys = arrayPet[arrayPet.length - 1];
  const keys = Object.keys(petKeys);
  for (let i = 0; i < keys.length; i++) {
    const newDiv = document.createElement("div");
    const element = keys[i];
    const h4 = document.createElement("h4");
    h4.innerText = element;
    h4.classList.add("text-uppercase", "text-success", "fs-4");
    newDiv.appendChild(h4);
    const p = document.createElement("p");
    p.innerText = petKeys[element];
    // p.classList.add(`${element}`);
    newDiv.appendChild(p);
    div.appendChild(newDiv);
  }
  divPet.appendChild(div);
  divNone.classList.remove("d-none");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const pet = e.target;
  const newPet = new Pet(pet.elements.name.value, pet.elements.owner.value, pet.elements.species.value, pet.elements.breed.value);
  arrayPet.push(newPet);
  form.reset();
  addPet();
});

divPet.addEventListener("click", (e) => {
  const petDiv = e.target.closest(".pet");
  if (petDiv) {
    petDiv.classList.add("bg-warning", "selected");
  }
});

const compareOwner = () => {
  const selected = document.querySelectorAll(".selected");
  const array = [];
  for (let i = 0; i < selected.length; i++) {
    const element = selected[i];
    const index = element.dataset.index;
    array.push(index);
  }
  return array;
};

btnCompare.addEventListener("click", () => {
  array = compareOwner();
  console.log(array);
  console.log(Pet.isSameOwner(arrayPet[array[0]], arrayPet[array[1]]));
});

btnReste.addEventListener("click", () => {
  array = [];
  const selected = document.querySelectorAll(".selected");
  for (let i = 0; i < selected.length; i++) {
    const element = selected[i];
    element.classList.remove("selected", "bg-warning");
  }
});
