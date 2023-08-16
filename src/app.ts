// import _ from "lodash";

// function fillArrayWithNumbers(count: number): number[] {
//   const array: number[] = [];
//   for (let i = 1; i <= count; i++) {
//     array.push(i);
//   }

//   return array;
// }

// console.log(_.shuffle(fillArrayWithNumbers(5)));

import "reflect-metadata";
import { Product } from "./product.model";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
const listOfProducts = [
  { title: "Lampa", price: 10 },
  { title: "Klávesnice", price: 88 },
  { title: "Myš", price: 55 },
];

// const errorsMessage = {
// isPositive: "Vámi zadané číslo není kladné",
// isEmpty: "Zadejte prosím všechny hodnoty",
// isNumber: "Vámi zadaná hodnota není číslo"
// }

const newPro = new Product("Test", 99);
validate(newPro).then((errors) => {
  if (errors.length > 0) {
    errors.forEach((error) => {
      // const propertyName = error.property;
      const constraints = error.constraints;

      if (constraints) {
        // Object.values(constraints).forEach((constraintMessage) => {
        //   console.log(`- ${constraintMessage}`);
        // });
        alert(
          // `Errors for property "${propertyName}": ${Object.values(constraints)}`
          `${Object.values(constraints)}`
        );
      }
    });
  } else {
    console.log(newPro);
  }
});

const loadedProduct = plainToInstance(Product, listOfProducts);

for (const prod of loadedProduct) {
  console.log(prod.getInformation());
}
