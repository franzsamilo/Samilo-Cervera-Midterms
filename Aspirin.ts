import { Painkillers } from './CodeMain';

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

  getFormulation(): string {
    return this.formulation;
  }

  setFormulation(formulation: string): void {
    this.formulation = formulation;
  }

  treatPain(): void {
    console.log(`Taking ${this.brandName} can relieve pain.`);
  }

  otherBenificalEffects(): string[] {
    return [
      `Antiplatelet effects: \nAspirin can prevent blood clotting by reducing the stickiness of platelets,\n which can help prevent heart attacks and strokes \nCardiovascular protection: \nAspirin can reduce the risk of heart attack, stroke, and \n other cardiovascular events by reducing inflammation, \npreventing blood clots, and improving blood flow.`,
    ];
  }

  set medicationSideEffects(medicationSideEffectsNew: string[]) {
    this.medicationSideEffects = medicationSideEffectsNew;
  }

  get medicationSideEffects(): string[] {
    return this.medicationSideEffects;
  }
}
