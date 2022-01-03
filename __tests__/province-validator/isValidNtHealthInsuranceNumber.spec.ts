import isValidNtHealthInsuranceNumber from "../../src/province-validator/isValidNtHealthInsuranceNumber";

describe("Validatate Health Insurance Number of Northwest Territories", () => {
  it("should be a valid Health Insurance number of Northwest Territories", () => {
    expect(isValidNtHealthInsuranceNumber("N6739906")).toBeTruthy();
  });

  it("should not be a valid Health Insurance number of Northwest Territories", () => {
    expect(isValidNtHealthInsuranceNumber("N67399060")).toBeFalsy();
  });
});
