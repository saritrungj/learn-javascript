class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + (this.price * salesTax)
  }
}
const salesTax = 0.05;

const product1 = new Product('Shirts', 14.45);
const product2 = new Product('Pants', 16.30);
const product3 = new Product('Belt', 40.95);

const total = product1.calculateTotal(salesTax);
const total2 = product2.calculateTotal(salesTax);
const total3 = product2.calculateTotal(salesTax);

product1.displayProduct();
console.log(`Total price: $${total.toFixed(2)}`);
product2.displayProduct();
console.log(`Total price: $${total2.toFixed(2)}`);
product3.displayProduct();
console.log(`Total price: $${total3.toFixed(2)}`);