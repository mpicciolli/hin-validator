/**
 * Alberta
 * Prior to May 24/94 11 numerics (May/94 to Oct./94 either 9 or 11 acceptable)
 * 9 numerics-individual registration (Effective Oct. 1/94)
 *
 * @param hin
 * @returns
 */
export default function isValidAbHealthInsuranceNumber(hin: string): boolean {
  return (
    new RegExp("^[0-9]{9}$").test(hin) ||
    new RegExp("^[0-9]{5}-[0-9]{4}$").test(hin)
  );
}
