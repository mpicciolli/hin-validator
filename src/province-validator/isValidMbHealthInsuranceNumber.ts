/**
 * Manitoba
 * Prior to April 1/2005 6 numerics subscriber or family based group
 * 9 numerics- individual registration (Effective Apr 1/2005)
 *
 * https://www.gov.mb.ca/health/mhsip/mbcard.html
 *
 * @param hin
 * @returns
 */
export default function isValidMbHealthInsuranceNumber(hin: string): boolean {
  return new RegExp("^[0-9]{9}$").test(hin);
}
