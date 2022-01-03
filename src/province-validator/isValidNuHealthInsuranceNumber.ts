/**
 * Territory of Nunavut
 * 9 numerics-individual registration
 *
 * @param hin
 * @returns
 */ export default function isValidNuHealthInsuranceNumber(
  hin: string
): boolean {
  return new RegExp("^[0-9]{9}$").test(hin);
}
