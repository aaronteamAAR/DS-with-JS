const names = ["Max", "James", "Smart", "john"];
console.log(names[3]);
console.log(names.length);
for (const el of names) {
  console.log(el);
}

names.push("Aaron");

console.log(names);

names.find((el) => el === "Aaron");

console.clear();

names.push("Aaron");

console.log(names);

const aaron = names.findIndex((el) => el === "Aaron");
console.warn(aaron);

const yam = names.findIndex((el) => el === "Aaron");
names.splice(2, 3);

console.log(names);

console.clear();
// Sets

const id = new Set();

id.add([1, 3, 5, 6]);
id.add("aaron");
id.add("dave");
id.add("rooney");
id.add("hubert");
id.add("debby");
id.add("webster");

for (let el of id) {
  console.log(el);
}

console.log(id.has("aaron"));

id.delete("debby");
console.log(id);

console.clear();
// Objects

const set = {
  name: "Max",
  age: 31,
  complexion: ["fair", "dark"],
  greet() {
    console.log("Hey\t" + this.name);
  },
};

console.log(` I am ${set.age} and i am ${set.complexion[1]}`);

delete set.age;

console.log(set.greet());

console.clear();
// Maps

const result = new Map();

result.set("average", 1.53);
result.set("lastresult", null);

const country = {
  name: " Germay",
  population: 50000,
};

result.set(country, 0.89);

for (const num of result) {
  console.log(num);
}
console.log(result.get("average"));
console.log(result.average);

// Deletion in maps
result.delete("lastresult");
console.log(result);

console.clear();

// Custom data structure
// Linked list

class Linkedlist {
  constructor() {
    this.head = null; //First Element of the list
    this.tail = null; // Last element of the list
  }

  append(value) {
    const newNode = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }
  toArray(){
      const elements = []
      let curNode = this.head
      while (curNode){
          elements.push(curNode)
          curNode = curNode.next
      }
      return elements
  }
}

const linkedlist1 = new Linkedlist();

linkedlist1.append("Aaron")
linkedlist1.append("is")
linkedlist1.append("a")
linkedlist1.append("genius")
linkedlist1.append("and ")
linkedlist1.append("king")


console.log(linkedlist1.toArray())
