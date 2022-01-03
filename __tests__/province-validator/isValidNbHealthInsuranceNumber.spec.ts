import isValidNbHealthInsuranceNumber from "../../src/province-validator/isValidNbHealthInsuranceNumber";

describe("Validatate Health Insurance Number of New Brunswick", () => {
  it("should be a valid Health Insurance number of New Brunswick", () => {
    expect(isValidNbHealthInsuranceNumber("999999999")).toBeTruthy();
    expect(isValidNbHealthInsuranceNumber("999 999 999")).toBeTruthy();
    expect(isValidNbHealthInsuranceNumber("999-999-999")).toBeTruthy();
  });

  it("should not be a valid Health Insurance number of New Brunswick", () => {
    expect(isValidNbHealthInsuranceNumber("9999999990")).toBeFalsy();
    expect(isValidNbHealthInsuranceNumber("999 9999990")).toBeFalsy();
    expect(isValidNbHealthInsuranceNumber("999-9999990")).toBeFalsy();
  });
});
