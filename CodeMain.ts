interface PharmaceuticalsDatabase {
  get Stock();
  set Stock(amount: number);
  get Price(): number;
  set Price(price: number);
  get RetailPrice(): number;
  set RetailPrice(price: number)
  get Manufacturer(): string;
  get ExpiryDate(): Date;
  set ExpiryDate(expiryDate: Date);
  get ActiveIngredients(): string[];
  get BrandName(): string;
  get GenericName(): string;
  isPrescriptionRequired(): boolean;
  isExpired(): boolean;
}

abstract class Painkillers implements PharmaceuticalsDatabase {
  private stock: number;
  private price: number;
  private retailPrice: number; 
  private manufacturer: string;
  private expiryDate: Date;
  private activeIngredients: string[];
  private prescriptionRequired: boolean;
  public brandName: string;
  public genericName: string;
  private usageInstructions: string;
  
  constructor( price: number, manufacturer: string, expiryDate: Date, activeIngredients: string[], prescriptionRequired: boolean, brandName: string, genericName: string) {
    this.price = price;
    this.manufacturer = manufacturer;
    this.expiryDate = expiryDate;
    this.activeIngredients = activeIngredients;
    this.prescriptionRequired = prescriptionRequired;
    this.brandName = brandName;
    this.genericName = genericName;
    this.usageInstructions = "";
  }

  get Stock(): number {
    return this.stock;
  }

  set Stock(amount: number) {
    this.stock = amount;
  }

  get Price(): number {
    return this.price;
  }
  
  set Price(price: number) {
      this.price = price;
  }

  get RetailPrice(): number {
    return this.retailPrice;
  }

  set RetailPrice(price: number) {
    this.retailPrice = price;
  }
  get Manufacturer(): string {
    return this.manufacturer;
  }

  get ExpiryDate(): Date {
    return this.expiryDate;
  }

  set ExpiryDate(expiryDate: Date) {
    this.expiryDate = expiryDate;
  }

  get ActiveIngredients(): string[] {
    return this.activeIngredients;
  }

  get BrandName(): string {
      return this.brandName;
    }
  
  get GenericName(): string {
      return this.genericName;
    }

  isPrescriptionRequired(): boolean {
    return this.prescriptionRequired;
  }

  isExpired(): boolean {
    const currentDate = new Date();
    return this.expiryDate < currentDate;
  }

  public setUsageInstructions(instructions: string): void {
    this.usageInstructions = instructions;
  }

  public getUsageInstructions(): string {
    return this.usageInstructions;
  }

  public sell(amount: number): void {
      if (this.isExpired()) {
        console.log("This medication has expired and should be discarded.");
      } else {
        console.log(`A total of ${this.price*amount} ${this.brandName} hass been sold.`);
      }
  }

  public discardMedication(): void {
    if (this.isExpired()) {
      console.log(`${this.brandName} has been discarded due to expiration.`);
    } else {
      console.log(`${this.brandName} has been discarded.`);
    }
  }

  public restock(amount: number): void {
    this.stock += amount;
    console.log(`Restocked ${amount} of ${this.brandName} from ${this.manufacturer}.`);
  }

  public abstract treatPain(): void;
  public abstract get medicationSideEffects(): string[];
  public abstract uniqueEffects(): string[];
}


  

