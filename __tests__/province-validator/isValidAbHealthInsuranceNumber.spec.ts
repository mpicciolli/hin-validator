import isValidAbHealthInsuranceNumber from "../../src/province-validator/isValidAbHealthInsuranceNumber";

describe("Validatate Health Insurance Number of Alberta", () => {
  it("should be a valid Health Insurance number of Alberta", () => {
    expect(isValidAbHealthInsuranceNumber("00000-0000")).toBeTruthy();
    expect(isValidAbHealthInsuranceNumber("000000000")).toBeTruthy();
  });

  it("should not be a valid Health Insurance number of Alberta", () => {
    expect(isValidAbHealthInsuranceNumber("00000-00000")).toBeFalsy();
  });
});
