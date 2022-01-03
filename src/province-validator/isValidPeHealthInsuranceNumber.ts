/**
 * Prince Edward Island
 * Prior to Jan. 1/96 9 numerics SIN individual
 * 8 numerics-individual registration (Effective Dec. 1/96)
 *
 * https://www.princeedwardisland.ca/en/information/health-pei/pei-health-card
 *
 * @param hin
 * @returns
 */
export default function isValidPeHealthInsuranceNumber(hin: string): boolean {
  return new RegExp("^[0-9]{8}$").test(hin);
}
