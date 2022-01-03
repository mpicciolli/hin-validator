import isValidSkHealthInsuranceNumber from "../../src/province-validator/isValidSkHealthInsuranceNumber";

describe("Validatate Health Insurance Number of Saskatchewan", () => {
  it("should be a valid Health Insurance number of Saskatchewan", () => {
    expect(isValidSkHealthInsuranceNumber("999999990")).toBeTruthy();
    expect(isValidSkHealthInsuranceNumber("999 999 990")).toBeTruthy();
  });

  it("should not be a valid Health Insurance number of Saskatchewan", () => {
    expect(isValidSkHealthInsuranceNumber("999 999990")).toBeFalsy();
    expect(isValidSkHealthInsuranceNumber("9999999900")).toBeFalsy();
  });
});
