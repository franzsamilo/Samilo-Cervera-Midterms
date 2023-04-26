import { Painkillers } from "./CodeMain";

class Ibuprofen extends Painkillers {

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
        this.usageInstructions = ""
      }
    

    treatPain(): void {
           console.log(`Taking ${this.brandName}, an ibuprofen to relieve pain and avoid swelling.`)
       }

    set medicationSideEffects(medicationSideEffectsNew: string[]) {
        this.medicationSideEffects = medicationSideEffectsNew;
      }
    
    get medicationSideEffects(): string[] {
        return this.medicationSideEffects;
      }

    otherBenificalEffects(): string[] {
        return [`Eases mild to moderate pain – such as toothache, migraine and period pain`,`Ease pain and inflammation (redness and swelling) caused by conditions that affect the joints, bones and muscles – such as rheumatoid arthritis and osteoarthritis`]
    }

}