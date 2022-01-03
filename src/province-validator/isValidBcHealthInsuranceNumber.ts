/**
 * British Columbia
 * Prior to Jan. 1/91 10 or 11 numerics family based
 * 10 numerics-individual registration(Effective Jan. 1/91)
 *
 * https://www2.gov.bc.ca/gov/content/governments/government-id/bc-services-card/types-of-cards/photo
 *
 * @param hin
 * @returns
 */
export default function isValidBcHealthInsuranceNumber(hin: string): boolean {
  return (
    new RegExp("^[0-9]{10}$").test(hin) ||
    new RegExp("^[0-9]{4}\\s[0-9]{3}\\s[0-9]{3}$").test(hin)
  );
}
