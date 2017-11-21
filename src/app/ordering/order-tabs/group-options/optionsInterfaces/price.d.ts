export interface Price {
    price?: number; // price if same for all (ie: boring)
    csFo?: number;
    csFp?: number;
    csRp?: number;
    mitFo?: number;
    mitFp?: number;
    mitRp?: number;
    mit3Fo?: number;
    mit3Fp?: number;
    mit3Rp?: number;
    perSqFt?: boolean; // set to true when price is per square foot instead of a static upcharge per door
}
