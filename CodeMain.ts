interface PharmaceuticalsDatabase {
    get Price(): number;
    set Price(pirce: number);
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
    protected price: number;
    private manufacturer: string;
    private expiryDate: Date;
    private activeIngredients: string[];
    private prescriptionRequired: boolean;
    public brandName: string;
    public genericName: string;
    protected usageInstructions: string;
    
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
    
    get Price(): number {
      return this.price;
    }
    
    set Price(price: number) {
        this.price = price;
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
  
    private checkExpiryDate(): void {
      if (this.isExpired()) {
        console.log("This medication has expired and should be discarded.");
      }
    }
  
    public openBottle(): void {
      console.log("The medication bottle has been opened.");
      this.checkExpiryDate();
    }
  
    public closeBottle(): void {
      console.log("The medication bottle has been closed.");
      this.checkExpiryDate();
    }
  
    public swallowPill(): void {
      console.log("The pill has been swallowed.");
      this.checkExpiryDate();
    }
  
    public crushTablet(): void {
      console.log("The tablet has been crushed.");
      this.checkExpiryDate();
    }
  
    public dissolvePowder(): void {
      console.log("The powder has been dissolved.");
      this.checkExpiryDate();
    }
  
    public abstract treatPain(): void;
    public abstract get medicationSideEffects(): string[];
    public abstract uniqueEffects(): string[];
  }
  
