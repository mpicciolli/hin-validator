import isValidMbHealthInsuranceNumber from "../../src/province-validator/isValidMbHealthInsuranceNumber";

describe("Validatate Health Insurance Number of Manitoba", () => {
  it("should be a valid Health Insurance number of Manitoba", () => {
    expect(isValidMbHealthInsuranceNumber("000000000")).toBeTruthy();
  });

  it("should not be a valid Health Insurance number of Manitoba", () => {
    expect(isValidMbHealthInsuranceNumber("0000000000")).toBeFalsy();
  });
});
