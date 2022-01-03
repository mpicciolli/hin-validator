/**
 * Newfoundland/Labrador
 * 12 numerics-individual registration
 *
 * @param hin
 * @returns
 */
export default function isValidNlHealthInsuranceNumber(hin: string): boolean {
  return (
    new RegExp("^[0-9]{12}$").test(hin) ||
    new RegExp("^[0-9]{3}\\s[0-9]{3}\\s[0-9]{3}\\s[0-9]{3}$").test(hin)
  );
}
