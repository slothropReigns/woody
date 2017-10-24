export class Wood {
  public name: string;
  public shortName: string;
  public description: string;
  public imagePath: string;
  public copeAndStickPrice: [
    { fO: number },
    { fP: number },
    { rP: number } ];
  public miterPrice: [
    { fO: number },
    { fP: number },
    { rP: number } ];
  public miter3InchPrice: [
    { fO: number },
    { fP: number },
    { rP: number } ];
  public slabPrice: number;

  constructor(name: string,
              shortName: string,
              description: string,
              imagePath: string,
              copeAndStickPrice: [
                { fO: number },
                { fP: number },
                { rP: number } ],
              miterPrice: [
                { fO: number },
                { fP: number },
                { rP: number } ],
              miter3InchPrice: [
                { fO: number },
                { fP: number },
                { rP: number } ],
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

