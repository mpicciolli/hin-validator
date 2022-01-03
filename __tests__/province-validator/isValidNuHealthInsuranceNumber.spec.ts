import isValidNuHealthInsuranceNumber from "../../src/province-validator/isValidNuHealthInsuranceNumber";

describe("Validatate Health Insurance Number of Nunavut", () => {
  it("should be a valid Health Insurance number of Nunavut", () => {
    expect(isValidNuHealthInsuranceNumber("123456789")).toBeTruthy();
  });

  it("should not be a valid Health Insurance number of Nunavut", () => {
    expect(isValidNuHealthInsuranceNumber("1234567890")).toBeFalsy();
  });
});
