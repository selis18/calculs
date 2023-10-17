
export function calculateBodySurfaceArea(height, weight) {
    const m2 = 0.007184 * Math.pow(weight, 0.425) * Math.pow(height, 0.725);
    return m2;
  }
  
  export function calculateDosage(bodySurfaceArea) {
    const etoposideDosage = 100 * bodySurfaceArea;
    const cisplatinDosage = 20 * bodySurfaceArea;
    const ifosfamideDosage = 1500 * bodySurfaceArea;
    const uromitexanDosage = 1500 * bodySurfaceArea;
    return [etoposideDosage, cisplatinDosage, ifosfamideDosage, uromitexanDosage];
  }
  
  export function calculateOndansetron(weight) {
    const dosage = 0.15 * weight;
    return dosage;
  }
  
  export function calculateMannitol(weight) {
    const dosage = 0.5 * weight;
    return dosage;
  }
  
  export function calculateHydrationRate(bodySurfaceArea) {
    const hydrationRate = (83 * bodySurfaceArea) * 24;
    return hydrationRate;
  }
  
  export function calculatePotassiumChloride(bodySurfaceArea) {
    const dosage = 60 * bodySurfaceArea;
    return dosage;
  }
  
  export function calculateCalciumGluconate(bodySurfaceArea) {
    const dosage = 20 * bodySurfaceArea;
    return dosage;
  }
  
  export function calculateMagnesiumSulfate(bodySurfaceArea) {
    const dosage = 8 * bodySurfaceArea;
    return dosage;
  }
  