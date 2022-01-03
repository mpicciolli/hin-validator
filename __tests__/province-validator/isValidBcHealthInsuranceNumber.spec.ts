import isValidBcHealthInsuranceNumber from "../../src/province-validator/isValidBcHealthInsuranceNumber";

describe("Validatate Health Insurance Number of British Columbia", () => {
  it("should be a valid Health Insurance number of British Columbia", () => {
    expect(isValidBcHealthInsuranceNumber("9121428323")).toBeTruthy();
    expect(isValidBcHealthInsuranceNumber("9121 428 323")).toBeTruthy();
  });

  it("should not be a valid Health Insurance number of British Columbia", () => {
    expect(isValidBcHealthInsuranceNumber("91214283230")).toBeFalsy();
    expect(isValidBcHealthInsuranceNumber("9121 4283230")).toBeFalsy();
  });
});
