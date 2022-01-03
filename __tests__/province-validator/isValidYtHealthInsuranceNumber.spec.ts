import isValidYtHealthInsuranceNumber from "../../src/province-validator/isValidYtHealthInsuranceNumber";

describe("Validatate Health Insurance Number of Yukon", () => {
  it("should be a valid Health Insurance number of Yukon", () => {
    expect(isValidYtHealthInsuranceNumber("002-999-999")).toBeTruthy();
  });

  it("should not be a valid Health Insurance number of Yukon", () => {
    expect(isValidYtHealthInsuranceNumber("002-999-9990")).toBeFalsy();
  });
});
