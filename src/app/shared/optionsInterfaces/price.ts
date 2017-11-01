export interface Price {
  price?: number; // price if same for all (ie: boring)
  priceCsFo?: number;
  priceCsFp?: number;
  priceCsRp?: number;
  priceMitFo?: number;
  priceMitFp?: number;
  priceMitRp?: number;
  priceMit3Fo?: number;
  priceMit3Fp?: number;
  priceMit3Rp?: number;
  perSqFt: boolean; // set to true when price is per square foot instead of a static upcharge per door
}
