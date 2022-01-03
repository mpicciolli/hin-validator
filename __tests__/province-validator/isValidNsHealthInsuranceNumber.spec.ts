import isValidNsHealthInsuranceNumber from "../../src/province-validator/isValidNsHealthInsuranceNumber";

describe("Validatate Health Insurance Number of Nova Scotia", () => {
  it("should be a valid Health Insurance number of Nova Scotia", () => {
    expect(isValidNsHealthInsuranceNumber("1234567897")).toBeTruthy();
    expect(isValidNsHealthInsuranceNumber("1234 567 897")).toBeTruthy();
  });

  it("should not be a valid Health Insurance number of Nova Scotia", () => {
    expect(isValidNsHealthInsuranceNumber("12345678970")).toBeFalsy();
    expect(isValidNsHealthInsuranceNumber("1234 567897")).toBeFalsy();
  });
});
