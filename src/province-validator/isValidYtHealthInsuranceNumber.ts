/**
 * Yukon
 * 9 numerics-individual registration
 *
 * @param hin
 * @returns
 */
export default function isValidYtHealthInsuranceNumber(hin: string): boolean {
  return new RegExp("^[0-9]{3}-[0-9]{3}-[0-9]{3}$").test(hin);
}
