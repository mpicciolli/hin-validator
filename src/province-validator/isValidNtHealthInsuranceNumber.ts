/**
 * Northwest Territories
 * 8 character-individual registration ONE alpha – N, D, M or T and 7 numerics
 *
 * https://www.hss.gov.nt.ca/en/services/nwt-health-care-plan/health-care-card
 *
 * @param hin
 * @returns
 */
export default function isValidNtHealthInsuranceNumber(hin: string): boolean {
  return new RegExp("^[NDMT][0-9]{7}$").test(hin);
}
