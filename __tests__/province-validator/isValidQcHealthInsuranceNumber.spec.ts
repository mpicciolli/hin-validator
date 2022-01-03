import isValidQcHealthInsuranceNumber from "../../src/province-validator/isValidQcHealthInsuranceNumber";

describe("Validatate Health Insurance Number of Quebec", () => {
  it("should be a valid Health Insurance number of Quebec", () => {
    expect(isValidQcHealthInsuranceNumber("BOUF90101516")).toBeTruthy();
    expect(isValidQcHealthInsuranceNumber("BOUF 9010 1516")).toBeTruthy();
  });

  it("should not be a valid Health Insurance number of Quebec", () => {
    expect(isValidQcHealthInsuranceNumber("BOUF901015160")).toBeFalsy();
    expect(isValidQcHealthInsuranceNumber("BOUF 90101516")).toBeFalsy();
  });
});
