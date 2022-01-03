/**
 * New Brunswick
 * 9 numerics-individual registration
 *
 * @param hin
 * @returns
 */
export default function isValidNbHealthInsuranceNumber(hin: string): boolean {
  return (
    new RegExp("^[0-9]{9}$").test(hin) ||
    new RegExp("^[0-9]{3}\\s[0-9]{3}\\s[0-9]{3}$").test(hin) ||
    new RegExp("^[0-9]{3}-[0-9]{3}-[0-9]{3}$").test(hin)
  );
}
