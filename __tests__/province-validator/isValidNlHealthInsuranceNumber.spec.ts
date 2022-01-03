import isValidNlHealthInsuranceNumber from "../../src/province-validator/isValidNlHealthInsuranceNumber";

describe("Validatate Health Insurance Number of Newfoundland/Labrador", () => {
  it("should be a valid Health Insurance number of Newfoundland/Labrador", () => {
    expect(isValidNlHealthInsuranceNumber("123456789001")).toBeTruthy();
    expect(isValidNlHealthInsuranceNumber("123 456 789 001")).toBeTruthy();
  });

  it("should not be a valid Health Insurance number of Newfoundland/Labrador", () => {
    expect(isValidNlHealthInsuranceNumber("1234567890010")).toBeFalsy();
    expect(isValidNlHealthInsuranceNumber("123 4567890010")).toBeFalsy();
  });
});
