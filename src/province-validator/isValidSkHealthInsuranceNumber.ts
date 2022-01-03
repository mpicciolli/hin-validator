/**
 * Saskatchewan
 * Prior to Apr. 1/91 8 numerics family based
 * 9 numerics-individual registration (Effective Apr. 1/91)
 *
 * @param hin
 * @returns
 */
export default function isValidSkHealthInsuranceNumber(hin: string): boolean {
  return (
    new RegExp("^[0-9]{9}$").test(hin) ||
    new RegExp("^[0-9]{3}\\s[0-9]{3}\\s[0-9]{3}$").test(hin)
  );
}
