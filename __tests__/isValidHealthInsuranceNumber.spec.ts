import { isValidHealthInsuranceNumber } from "../src/isValidHealthInsuranceNumber";

import * as isValidAbHealthInsuranceNumber from "../src/province-validator/isValidAbHealthInsuranceNumber";
import * as isValidBcHealthInsuranceNumber from "../src/province-validator/isValidBcHealthInsuranceNumber";
import * as isValidMbHealthInsuranceNumber from "../src/province-validator/isValidMbHealthInsuranceNumber";
import * as isValidNbHealthInsuranceNumber from "../src/province-validator/isValidNbHealthInsuranceNumber";
import * as isValidNlHealthInsuranceNumber from "../src/province-validator/isValidNlHealthInsuranceNumber";
import * as isValidNsHealthInsuranceNumber from "../src/province-validator/isValidNsHealthInsuranceNumber";
import * as isValidNtHealthInsuranceNumber from "../src/province-validator/isValidNtHealthInsuranceNumber";
import * as isValidNuHealthInsuranceNumber from "../src/province-validator/isValidNuHealthInsuranceNumber";
import * as isValidOnHealthInsuranceNumber from "../src/province-validator/isValidOnHealthInsuranceNumber";
import * as isValidPeHealthInsuranceNumber from "../src/province-validator/isValidPeHealthInsuranceNumber";
import * as isValidQcHealthInsuranceNumber from "../src/province-validator/isValidQcHealthInsuranceNumber";
import * as isValidSkHealthInsuranceNumber from "../src/province-validator/isValidSkHealthInsuranceNumber";
import * as isValidYtHealthInsuranceNumber from "../src/province-validator/isValidYtHealthInsuranceNumber";

describe("Validatate Health Insurance Number", () => {
  it("should be a valid Health Insurance number", () => {
    expect(isValidHealthInsuranceNumber("00000-0000")).toBeTruthy();
  });

  it("should not be a valid Health Insurance number", () => {
    expect(isValidHealthInsuranceNumber("00000-00000")).toBeFalsy();
  });

  it("should call validator function of Alberta", () => {
    jest.spyOn(isValidAbHealthInsuranceNumber, "default");

    isValidHealthInsuranceNumber("00000-0000", "AB");

    expect(isValidAbHealthInsuranceNumber.default).toHaveBeenCalledWith(
      "00000-0000"
    );
  });

  it("should call validator function of British Columbia", () => {
    jest.spyOn(isValidBcHealthInsuranceNumber, "default");

    isValidHealthInsuranceNumber("9121 428 323", "BC");

    expect(isValidBcHealthInsuranceNumber.default).toHaveBeenCalledWith(
      "9121 428 323"
    );
  });

  it("should call validator function of Manitoba", () => {
    jest.spyOn(isValidMbHealthInsuranceNumber, "default");

    isValidHealthInsuranceNumber("000000000", "MB");

    expect(isValidMbHealthInsuranceNumber.default).toHaveBeenCalledWith(
      "000000000"
    );
  });

  it("should call validator function of New Brunswick", () => {
    jest.spyOn(isValidNbHealthInsuranceNumber, "default");

    isValidHealthInsuranceNumber("999-999-999", "NB");

    expect(isValidNbHealthInsuranceNumber.default).toHaveBeenCalledWith(
      "999-999-999"
    );
  });

  it("should call validator function of Newfoundland/Labrador", () => {
    jest.spyOn(isValidNlHealthInsuranceNumber, "default");

    isValidHealthInsuranceNumber("123 456 789 001", "NL");

    expect(isValidNlHealthInsuranceNumber.default).toHaveBeenCalledWith(
      "123 456 789 001"
    );
  });

  it("should call validator function of Northwest Territories", () => {
    jest.spyOn(isValidNtHealthInsuranceNumber, "default");

    isValidHealthInsuranceNumber("N6739906", "NT");

    expect(isValidNtHealthInsuranceNumber.default).toHaveBeenCalledWith(
      "N6739906"
    );
  });

  it("should call validator function of Nova Scotia", () => {
    jest.spyOn(isValidNsHealthInsuranceNumber, "default");

    isValidHealthInsuranceNumber("1234 567 897", "NS");

    expect(isValidNsHealthInsuranceNumber.default).toHaveBeenCalledWith(
      "1234 567 897"
    );
  });

  it("should call validator function of Nunavut", () => {
    jest.spyOn(isValidNuHealthInsuranceNumber, "default");

    isValidHealthInsuranceNumber("123456789", "NU");

    expect(isValidNuHealthInsuranceNumber.default).toHaveBeenCalledWith(
      "123456789"
    );
  });

  it("should call validator function of Ontario", () => {
    jest.spyOn(isValidOnHealthInsuranceNumber, "default");

    isValidHealthInsuranceNumber("3821-694-372-AM", "ON");

    expect(isValidOnHealthInsuranceNumber.default).toHaveBeenCalledWith(
      "3821-694-372-AM"
    );
  });

  it("should call validator function of Prince Edward Island", () => {
    jest.spyOn(isValidPeHealthInsuranceNumber, "default");

    isValidHealthInsuranceNumber("00000000", "PE");

    expect(isValidPeHealthInsuranceNumber.default).toHaveBeenCalledWith(
      "00000000"
    );
  });

  it("should call validator function of Quebec", () => {
    jest.spyOn(isValidQcHealthInsuranceNumber, "default");

    isValidHealthInsuranceNumber("BOUF 9010 1516", "QC");

    expect(isValidQcHealthInsuranceNumber.default).toHaveBeenCalledWith(
      "BOUF 9010 1516"
    );
  });

  it("should call validator function of Saskatchewan", () => {
    jest.spyOn(isValidSkHealthInsuranceNumber, "default");

    isValidHealthInsuranceNumber("999 999 990", "SK");

    expect(isValidSkHealthInsuranceNumber.default).toHaveBeenCalledWith(
      "999 999 990"
    );
  });

  it("should call validator function of Yukon", () => {
    jest.spyOn(isValidYtHealthInsuranceNumber, "default");

    isValidHealthInsuranceNumber("002-999-999", "YT");

    expect(isValidYtHealthInsuranceNumber.default).toHaveBeenCalledWith(
      "002-999-999"
    );
  });
});
