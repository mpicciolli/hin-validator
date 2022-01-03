/**
 * Nova Scotia
 * 10 numerics-individual registration (Effective Jan. 1/94)
 *
 * @param hin
 * @returns
 */
export default function isValidNsHealthInsuranceNumber(hin: string): boolean {
  return (
    new RegExp("^[0-9]{10}$").test(hin) ||
    new RegExp("^[0-9]{4}\\s[0-9]{3}\\s[0-9]{3}$").test(hin)
  );
}
