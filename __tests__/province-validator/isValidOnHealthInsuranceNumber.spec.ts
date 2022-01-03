import isValidOnHealthInsuranceNumber from "../../src/province-validator/isValidOnHealthInsuranceNumber";

describe("Validatate Health Insurance Number of Ontario", () => {
  it("should be a valid Health Insurance number of Ontario", () => {
    expect(isValidOnHealthInsuranceNumber("0123 456 789")).toBeTruthy();
    expect(isValidOnHealthInsuranceNumber("3821-694-372")).toBeTruthy();

    expect(isValidOnHealthInsuranceNumber("0123 456 789 M")).toBeTruthy();
    expect(isValidOnHealthInsuranceNumber("0123 456 789 AM")).toBeTruthy();

    expect(isValidOnHealthInsuranceNumber("3821-694-372 A")).toBeTruthy();
    expect(isValidOnHealthInsuranceNumber("3821-694-372 AM")).toBeTruthy();

    expect(isValidOnHealthInsuranceNumber("3821-694-372-A")).toBeTruthy();
    expect(isValidOnHealthInsuranceNumber("3821-694-372-AM")).toBeTruthy();
  });

  it("should not be a valid Health Insurance number of Ontario", () => {
    expect(isValidOnHealthInsuranceNumber("3821-694 372")).toBeFalsy();
    expect(isValidOnHealthInsuranceNumber("3821 694 3720")).toBeFalsy();
    expect(isValidOnHealthInsuranceNumber("3821-694-3720")).toBeFalsy();
  });
});
