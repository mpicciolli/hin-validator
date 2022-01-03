import isValidPeHealthInsuranceNumber from "../../src/province-validator/isValidPeHealthInsuranceNumber";

describe("Validatate Health Insurance Number of Prince Edward Island", () => {
  it("should be a valid Health Insurance number of Prince Edward Island", () => {
    expect(isValidPeHealthInsuranceNumber("00000000")).toBeTruthy();
  });

  it("should not be a valid Health Insurance number of Prince Edward Island", () => {
    expect(isValidPeHealthInsuranceNumber("000000000")).toBeFalsy();
  });
});
