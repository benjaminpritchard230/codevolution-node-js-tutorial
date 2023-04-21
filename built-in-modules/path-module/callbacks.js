function greet(name) {
  console.log("hello", name);
}

function greetVishwas(greetFn) {
  const name = "vishwas";
  greetFn(name);
}

greetVishwas(greet);
