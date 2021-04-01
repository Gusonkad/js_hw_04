// task_02.js
const inventory = {
   items: ['Knife', 'Gas mask'],
   add(itemName) {
      console.log(`Adding ${itemName} to inventory`);
      this.items.push(itemName);
   },
   remove(itemName) {
      console.log(`Removing ${itemName} from inventory`);
      this.items = this.items.filter(item => item !== itemName);
   },
};
const invokeInventoryAction = function (itemName, action) {
   console.log(`Invoking action on ${itemName}`);
   action.call(inventory, itemName); //Нужно было указать обьект: inventory и вызвать метод: call
};
invokeInventoryAction('Medkit', inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory
console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
invokeInventoryAction('Gas mask', inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory
console.log(inventory.items); // ['Knife', 'Medkit']