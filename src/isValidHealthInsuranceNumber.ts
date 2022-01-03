import { ProvinceCode, ProvinceCodeEnum } from "./models/ProvinceCode";
import isValidAbHealthInsuranceNumber from "./province-validator/isValidAbHealthInsuranceNumber";
import isValidBcHealthInsuranceNumber from "./province-validator/isValidBcHealthInsuranceNumber";
import isValidMbHealthInsuranceNumber from "./province-validator/isValidMbHealthInsuranceNumber";
import isValidNbHealthInsuranceNumber from "./province-validator/isValidNbHealthInsuranceNumber";
import isValidNlHealthInsuranceNumber from "./province-validator/isValidNlHealthInsuranceNumber";
import isValidNsHealthInsuranceNumber from "./province-validator/isValidNsHealthInsuranceNumber";
import isValidNtHealthInsuranceNumber from "./province-validator/isValidNtHealthInsuranceNumber";
import isValidNuHealthInsuranceNumber from "./province-validator/isValidNuHealthInsuranceNumber";
import isValidOnHealthInsuranceNumber from "./province-validator/isValidOnHealthInsuranceNumber";
import isValidPeHealthInsuranceNumber from "./province-validator/isValidPeHealthInsuranceNumber";
import isValidQcHealthInsuranceNumber from "./province-validator/isValidQcHealthInsuranceNumber";
import isValidSkHealthInsuranceNumber from "./province-validator/isValidSkHealthInsuranceNumber";
import isValidYtHealthInsuranceNumber from "./province-validator/isValidYtHealthInsuranceNumber";

export function isValidHealthInsuranceNumber(
  hin: string,
  provinceCode?: ProvinceCode
): boolean {
  switch (provinceCode) {
    case ProvinceCodeEnum.Alberta:
      return isValidAbHealthInsuranceNumber(hin);
    case ProvinceCodeEnum.BritishColumbia:
      return isValidBcHealthInsuranceNumber(hin);
    case ProvinceCodeEnum.Manitoba:
      return isValidMbHealthInsuranceNumber(hin);
    case ProvinceCodeEnum.NewBrunswick:
      return isValidNbHealthInsuranceNumber(hin);
    case ProvinceCodeEnum.NewfoundlandandLabrador:
      return isValidNlHealthInsuranceNumber(hin);
    case ProvinceCodeEnum.NorthwestTerritories:
      return isValidNtHealthInsuranceNumber(hin);
    case ProvinceCodeEnum.NovaScotia:
      return isValidNsHealthInsuranceNumber(hin);
    case ProvinceCodeEnum.Nunavut:
      return isValidNuHealthInsuranceNumber(hin);
    case ProvinceCodeEnum.Ontario:
      return isValidOnHealthInsuranceNumber(hin);
    case ProvinceCodeEnum.PrinceEdwardIsland:
      return isValidPeHealthInsuranceNumber(hin);
    case ProvinceCodeEnum.Quebec:
      return isValidQcHealthInsuranceNumber(hin);
    case ProvinceCodeEnum.Saskatchewan:
      return isValidSkHealthInsuranceNumber(hin);
    case ProvinceCodeEnum.Yukon:
      return isValidYtHealthInsuranceNumber(hin);
    default:
      const provinceCodes: ProvinceCode[] = [
        "AB",
        "BC",
        "MB",
        "NB",
        "NL",
        "NT",
        "NS",
        "NU",
        "ON",
        "PE",
        "QC",
        "SK",
        "YT",
      ];

      return provinceCodes.some((code) => {
        return isValidHealthInsuranceNumber(hin, code);
      });
  }
}
