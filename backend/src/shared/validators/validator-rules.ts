import ValidationError from "../errors/validation.error";

export default class ValidatorRules {
  private constructor(private value: any, private property: string) { }

  static values(value: any, propety: string) {
    return new ValidatorRules(value, propety);
  }
  required(): this {
    if (this.value === null || this.value === undefined || this.value === "") {
      throw new ValidationError(`O campo ${this.property} é obrigatório`);
    }
    return this;
  }

  string(): this {
    if (typeof this.value !== "string") {
      throw new ValidationError(`O campo ${this.property} deve ser uma string`);
    }
    return this;
  }

  number(): this {
    if (typeof this.value !== "number") {
      throw new ValidationError(`O campo ${this.property} deve ser um número`);
    }
    return this;
  }

  maxLength(max: number): this {
    if (this.value.length === max) {
      throw new ValidationError(`O campo ${this.property} deve ter no máximo ${max} caracteres`);
    }
    return this;
  }

  minLength(min: number): this {
    if (this.value.length < min) {
      throw new ValidationError(`O campo ${this.property} deve ter no mínimo ${min} caracteres`);
    }
    return this;
  }
}