import { Painkillers } from "./Interface&ParentClass";

class Aspirin extends Painkillers {
  private formulation: string;

  constructor(
    stock: number,
    price: number,
    retailPrice: number,
    manufacturer: string,
    expiryDate: Date,
    activeIngredients: string[],
    prescriptionRequired: boolean,
    brandName: string,
    genericName: string,
    crushable: boolean,
    storageInstructions: string,
    drugPurpose: string,
    warnings: string[],
    formulation: string
  ) {
    super(
      stock,
      price,
      retailPrice,
      manufacturer,
      expiryDate,
      activeIngredients,
      prescriptionRequired,
      brandName,
      genericName,
      crushable,
      storageInstructions,
      drugPurpose,
      warnings
    );
    this.formulation = formulation;
  }
  // getters setters + new methods
  set medicationSideEffects(medicationSideEffectsNew: string[]) {
    this.medicationSideEffects = medicationSideEffectsNew;
  }

  get medicationSideEffects(): string[] {
    return this.medicationSideEffects;
  }

  getFormulation(): string {
    return this.formulation;
  }

  setFormulation(formulation: string): void {
    this.formulation = formulation;
  }

  // Implemented methods with new function
  treatPain(): void {
    console.log(`Taking ${this.brandName} can relieve pain.`);
  }

  otherBenificalEffects(): string {
    return `Antiplatelet effects: \nAspirin can prevent blood clotting by reducing the stickiness of platelets,\n which can help prevent heart attacks and strokes \nCardiovascular protection: \nAspirin can reduce the risk of heart attack, stroke, and \n other cardiovascular events by reducing inflammation, \npreventing blood clots, and improving blood flow.`;
  }

  calculateDailyDosage(weight: number, age: number): string {
    return `${weight * (age / 4)}mg`;
  }

  daysToExpiry(expiryDate: Date) {
    const currentDate = new Date();
    const timeDiff = Math.abs(expiryDate.getTime() - currentDate.getTime());
    const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    if (years > 0) {
      const remainingMonths = months % 12;
      return `${years} year${years > 1 ? "s" : ""}, ${remainingMonths} month${
        remainingMonths > 1 ? "s" : ""
      }`;
    } else if (months > 0) {
      const remainingDays = days % 30;
      return `${months} month${months > 1 ? "s" : ""}, ${remainingDays} day${
        remainingDays > 1 ? "s" : ""
      }`;
    } else {
      return `${days} day${days > 1 ? "s" : ""}`;
    }
  }

  calculateMarkupNew(discount: string): number {
    //WithDiscount input: ex. 70% => 0.7
    return (
      this.calculateMarkup() -
      (this.price -
        this.retailPrice * (parseInt(discount.replace("%", "")) / 100))
    );
  }
}

let AcyAsipirin = new Aspirin(
  100,
  5.99,
  9.99,
  "Bayer",
  new Date("2024-12-31"),
  ["Aspirin"],
  false,
  "Aspirin",
  "Acetylsalicylic Acid",
  true,
  "Store in a cool, dry place",
  "Pain relief",
  ["May cause stomach irritation"],
  "Tablet"
);
// test
console.log(AcyAsipirin.daysToExpiry(new Date("2024-12-31")));
console.log(AcyAsipirin.calculateMarkupNew("50%"));
console.log(AcyAsipirin.otherBenificalEffects());
AcyAsipirin.treatPain();
AcyAsipirin.display();
