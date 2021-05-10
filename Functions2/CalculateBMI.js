/*

Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:

bmi = weightInKilograms / heightInMeters**2;

*/

function calculateBMI(weightKg, heightCm){
  let bmi = weightKg / ((heightCm/100)**2);
  return bmi.toFixed(2);
}

calculateBMI(180, 80); // "24.69"

console.log(calculateBMI(80, 180))