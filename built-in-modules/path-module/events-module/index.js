// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => {
//   console.log(`order received, baking ${size} pizza with ${topping}`);
// });

// emitter.on("order-pizza", (size, topping) => {
//   if (size === "large") {
//     console.log("serving complimentary drink");
//   }
// });

// emitter.emit("order-pizza", "large", "mushroom");

const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`order received baking a pizza ${size} ${topping}`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mushroom");
pizzaShop.displayOrderNumber();
