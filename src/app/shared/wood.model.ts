// export class CopeAndStickPrice {
//   public fO: number;
//   public fP: number;
//   public rP: number;
//
//   constructor(fO: number, fP: number, rP: number) {
//     this.fO = fO;
//     this.fP = fP;
//     this.rP = rP;
//   }
// }
//
// export class MiterPrice {
//   public fO: number;
//   public fP: number;
//   public rP: number;
//
//   constructor(fO: number, fP: number, rP: number) {
//     this.fO = fO;
//     this.fP = fP;
//     this.rP = rP;
//   }
// }
//
// export class Miter3InchPrice {
//   public fO: number;
//   public fP: number;
//   public rP: number;
//
//   constructor(fO: number, fP: number, rP: number) {
//     this.fO = fO;
//     this.fP = fP;
//     this.rP = rP;
//   }
// }

export class Wood {
  public id: string;
  public name: string;
  public shortName: string;
  public description: string;
  public imagePath: string;
  public copeAndStickPriceFo: number;
  public copeAndStickPriceFp: number;
  public copeAndStickPriceRp: number;
  public miterPriceFo: number;
  public miterPriceFp: number;
  public miterPriceRp: number;
  public miter3InchPriceFo: number;
  public miter3InchPriceFp: number;
  public miter3InchPriceRp: number;
  public slabPrice: number;

  constructor(id: string,
              name: string,
              shortName: string,
              description: string,
              imagePath: string,
              copeAndStickPriceFo: number,
              copeAndStickPriceFp: number,
              copeAndStickPriceRp: number,
              miterPriceFo: number,
              miterPriceFp: number,
              miterPriceRp: number,
              miter3InchPriceFo: number,
              miter3InchPriceFp: number,
              miter3InchPriceRp: number,
              slabPrice: number) {
    this.id = id;
    this.name = name;
    this.shortName = shortName;
    this.description = description;
    this.imagePath = imagePath;
    this.copeAndStickPriceFo = copeAndStickPriceFo;
    this.copeAndStickPriceFp = copeAndStickPriceFp;
    this.copeAndStickPriceRp = copeAndStickPriceRp;
    this.miterPriceFo = miterPriceFo;
    this.miterPriceFp = miterPriceFp;
    this.miterPriceRp = miterPriceRp;
    this.miter3InchPriceFo = miter3InchPriceFo;
    this.miter3InchPriceFp = miter3InchPriceFp;
    this.miter3InchPriceRp = miter3InchPriceRp;
    this.slabPrice = slabPrice;
  }

}

// SNIPPET FOR PUSHING IN THE DUMMY DATA
/*for (let wood of this.tempWoods) {
  this.woodsCollection.add({
    id: '\'tempId\' + wood.name',
    name: wood.name,
    shortName: wood.shortName,
    description: wood.description,
    imagePath: wood.imagePath,
    copeAndStickPriceFo: wood.copeAndStickPriceFo,
    copeAndStickPriceFp: wood.copeAndStickPriceFp,
    copeAndStickPriceRp: wood.copeAndStickPriceRp,
    miterPriceFo: wood.miterPriceFo,
    miterPriceFp: wood.miterPriceFp,
    miterPriceRp: wood.miterPriceRp,
    miter3InchPriceFo: wood.miter3InchPriceFo,
    miter3InchPriceFp: wood.miter3InchPriceFp,
    miter3InchPriceRp: wood.miter3InchPriceRp,
    slabPrice: wood.slabPrice,
  });
}*/
