interface PharmaceuticalsDatabase {
  viewStock(): number;
  changeStockValue(amount: number): void;
  viewPrice(): number;
  changePrice(price: number): void;
  viewRetailPrice(): number;
  changeRetailPrice(price: number): void;
  viewManufacturer(): string;
  viewExpiryDate(): Date;
  changeExpiryDate(expiryDate: Date): Date;
  viewActiveIngredients(): string[];
  viewBrandName(): string;
  viewGenericName(): string;
  isPrescriptionRequired(): boolean;
  isExpired(): boolean;
  calculateMarkup(): number;
  containsActiveIngredient(activeIngredients: string): boolean;
  canBeCrushed(): string;
  daysToExpiry(expiryDate: Date): string;
  viewStorageInstructions(): string;
  viewDrugPurpose(): string;
  viewWarnings(): string[];
}

export abstract class Painkillers implements PharmaceuticalsDatabase {
  protected stock: number;
  protected price: number;
  protected retailPrice: number;
  protected manufacturer: string;
  protected expiryDate: Date;
  protected activeIngredients: string[];
  protected prescriptionRequired: boolean;
  public brandName: string;
  public genericName: string;
  protected usageInstructions: string;
  protected crushable: boolean;
  protected storageInstructions: string;
  protected drugPurpose: string;
  protected warnings: string[];

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
    warnings: string[]
  ) {
    this.stock = stock;
    this.price = price;
    this.retailPrice = retailPrice;
    this.manufacturer = manufacturer;
    this.expiryDate = expiryDate;
    this.activeIngredients = activeIngredients;
    this.prescriptionRequired = prescriptionRequired;
    this.brandName = brandName;
    this.genericName = genericName;
    this.usageInstructions = "";
    this.activeIngredients = activeIngredients;
    this.crushable = crushable;
    this.storageInstructions = storageInstructions;
    this.drugPurpose = drugPurpose;
    this.warnings = warnings;
  }

  viewStock(): number {
    return this.stock;
  }

  changeStockValue(amount: number): void {
    this.stock = amount;
  }

  viewPrice(): number {
    return this.price;
  }

  changePrice(price: number): void {
    this.price = price;
  }

  viewRetailPrice(): number {
    return this.retailPrice;
  }

  changeRetailPrice(price: number): void {
    this.retailPrice = price;
  }
  viewManufacturer(): string {
    return this.manufacturer;
  }

  viewExpiryDate(): Date {
    return this.expiryDate;
  }

  changeExpiryDate(expiryDate: Date): Date {
    this.expiryDate = expiryDate;
    return expiryDate;
  }

  viewActiveIngredients(): string[] {
    return this.activeIngredients;
  }

  viewBrandName(): string {
    return this.brandName;
  }

  viewGenericName(): string {
    return this.genericName;
  }

  isPrescriptionRequired(): boolean {
    return this.prescriptionRequired;
  }

  isExpired(): boolean {
    const currentDate = new Date();
    return this.expiryDate < currentDate;
  }

  calculateMarkup(): number {
    const costPrice = this.price;
    const retailPrice = this.retailPrice;
    return ((retailPrice - costPrice) / costPrice) * 100;
  }

  containsActiveIngredient(activeIngredient: string): boolean {
    return this.activeIngredients.includes(activeIngredient);
  }

  canBeCrushed(): string {
    let crushOutputString: string = "";
    if (this.isExpired()) {
      return "This medication has expired and should be discarded.";
    } else if (this.crushable === true) {
      crushOutputString =
        "This medication is safe and can be crushed into a powder";
    } else {
      crushOutputString = "Crushing this medication can have adverse effects";
    }
    return crushOutputString;
  }

  daysToExpiry(expiryDate: Date): string {
    const oneDay = 24 * 60 * 60 * 1000;
    const currentDate = new Date();
    const timeDiff = Math.abs(expiryDate.getTime() - currentDate.getTime());
    return `${Math.ceil(timeDiff / oneDay)} day/s`;
  }

  setStorageInstructions(storageInstructionsSet: string): void {
    this.storageInstructions = storageInstructionsSet;
  }

  viewStorageInstructions(): string {
    return this.storageInstructions;
  }

  setWarnings(warningsSet: string[]): void {
    this.warnings = warningsSet;
  }

  viewWarnings(): string[] {
    return this.warnings;
  }

  setDrugPurpose(drugPurposeSet: string): void {
    this.drugPurpose = drugPurposeSet;
  }

  viewDrugPurpose(): string {
    return this.drugPurpose;
  }

  setUsageInstructions(instructions: string): void {
    this.usageInstructions = instructions;
  }

  viewUsageInstructions(): string {
    return this.usageInstructions;
  }

  sell(amount: number): void {
    if (this.isExpired()) {
      console.log("This medication has expired and should be discarded.");
    } else {
      console.log(
        `A total of ${this.price * amount} ${this.brandName} has been sold.`
      );
    }
  }

  discardMedication(): void {
    if (this.isExpired()) {
      console.log(`${this.brandName} has been discarded due to expiration.`);
    } else {
      console.log(`${this.brandName} has been discarded.`);
    }
  }

  restock(amount: number): void {
    this.stock += amount;
    console.log(
      `Restocked ${amount} of ${this.brandName} from ${this.manufacturer}.`
    );
  }

  abstract treatPain(): void;
  abstract get medicationSideEffects(): string[];
  abstract otherBenificalEffects(): string;
}
