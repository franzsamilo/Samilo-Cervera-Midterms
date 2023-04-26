import { Painkillers } from "./Interface&ParentClass";

enum Brand {
  "Addaprin",
  "Advil",
  "A-G Profen",
  "Bufen",
  "Genpril",
  "Haltran",
  "Ibu",
  "Ibu-2"
}

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
      }

    treatPain(): void {
        console.log(`Taking ${this.brandName}, an ibuprofen to relieve pain and avoid swelling.`)
    }

    calculateDailyDosage(weight: number, age: number): string {
        if (age>16) {
          return "Usually take 1 or 2 tablets (200mg) every 4 to 6 hours, but shouldn't take more than 1,200mg (6 x 200mg) tablets in the space of 24 hours"
        } else {
          return "May need to take a lower dose, depending on their age; check the packet or leaflet, or ask a pharmacist or doctor for advice."
        }
    }

    // sideEffects(): void {
    //   console.log("Nausea or vomiting. \n Vonstipation or diarrhea. \n Indigestion (dyspepsia) or abdominal pain")
    // }

    otherBenificalEffects(): string {
        return `Eases mild to moderate pain such as toothache, migraine and period pain \n Eases pain and inflammation (redness and swelling) caused by conditions that affect the joints, bones and muscles such as rheumatoid arthritis and osteoarthritis`
    }

    static availableBrands(): void {
      for (let i in Brand) {
        if (isNaN(Number(i))) {
          console.log(i)
        }
      }
    }

    static typesOfIbuprofen(): void {
      console.log("Tablets\n Capsules\n Liquids\n Gels or creams\n Sprays")
    }

    static isTypeAvailable(ibuprofen: Ibuprofen): boolean;
    static isTypeAvailable(ibuprofen: Ibuprofen, name: string): boolean
    static isTypeAvailable(ibuprofen: Ibuprofen, name?: string): boolean {
      if (name) {
        if (ibuprofen.brandName === name && ibuprofen.stock > 1) {
          return true
        }
        return false
      } else {
        if (ibuprofen.stock > 1) {
          return true
        }
        return false
      }
    }
}

let advil = new Ibuprofen(
20,
12.91,
15,
"Wyeth Pharmaceuticals Company",
new Date("2026-6-6"),
["gelatin", "lecithin (soy)", "medium chain triglycerides", "pharmaceutical ink", "polyethylene glycol", "potassium hydroxide", "purified water", "sorbitan", "sorbitol"],
false,
"Advil",
"Ibuprofen (Oral)",
false,
"Avoid excessive heat (above 104°F), excessive humidity, and to store at controlled room temperature (between 68°F and 77°F)",
"Painkiller",
["Serious side effects that can occur during treatment with this medicine may include swelling of the face, fingers, feet, and/or lower legs; severe stomach pain, black, tarry stools, and/or vomiting of blood"])

console.log(Ibuprofen.isTypeAvailable(advil, advil.brandName))
Ibuprofen.typesOfIbuprofen()
Ibuprofen.availableBrands()
advil.treatPain()
advil.otherBenificalEffects()