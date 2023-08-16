import { IsNotEmpty, IsPositive, IsNumber } from "class-validator";

export class Product {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;

  constructor(t: string, p: number) {
    this.price = p;
    this.title = t;
  }

  getInformation() {
    return [this.title, `$${this.price}`];
  }
}
