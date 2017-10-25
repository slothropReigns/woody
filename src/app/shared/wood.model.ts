export class CopeAndStickPrice {
  public fO: number;
  public fP: number;
  public rP: number;

  constructor(fO: number, fP: number, rP: number) {
    this.fO = fO;
    this.fP = fP;
    this.rP = rP;
  }
}

export class MiterPrice {
  public fO: number;
  public fP: number;
  public rP: number;

  constructor(fO: number, fP: number, rP: number) {
    this.fO = fO;
    this.fP = fP;
    this.rP = rP;
  }
}

export class Miter3InchPrice {
  public fO: number;
  public fP: number;
  public rP: number;

  constructor(fO: number, fP: number, rP: number) {
    this.fO = fO;
    this.fP = fP;
    this.rP = rP;
  }
}

export class Wood {
  public name: string;
  public shortName: string;
  public description: string;
  public imagePath: string;
  public copeAndStickPrice: CopeAndStickPrice;
  public miterPrice: MiterPrice;
  public miter3InchPrice: Miter3InchPrice;
  public slabPrice: number;

  constructor(name: string,
              shortName: string,
              description: string,
              imagePath: string,
              copeAndStickPrice: CopeAndStickPrice,
              miterPrice: MiterPrice,
              miter3InchPrice: Miter3InchPrice,
              slabPrice: number) {
    this.name = name;
    this.shortName = shortName;
    this.description = description;
    this.imagePath = imagePath;
    this.copeAndStickPrice = copeAndStickPrice;
    this.miterPrice = miterPrice;
    this.miter3InchPrice = miter3InchPrice;
    this.slabPrice = slabPrice;
  }

}

