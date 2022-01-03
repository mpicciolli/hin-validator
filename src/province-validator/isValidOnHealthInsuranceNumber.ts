/**
 * Ontario
 * Prior to Jan. 1/91 8 numerics family based
 * 10 numerics-individual registration plus 2 character version code (if applicable) (Effective Jan. 1/91)
 * A version code may be one or two letters. Not all health cards have version codes. A health card without a version code may be valid.
 *
 * https://www.health.gov.on.ca/english/providers/pub/ohip/physmanual/pm_sec_5/5-6.html
 * https://www.health.gov.on.ca/english/providers/pub/ohip/physmanual/pm_sec_5/5-13.html
 *
 * @param hin
 * @returns
 */
export default function isValidOnHealthInsuranceNumber(hin: string): boolean {
  return (
    new RegExp("^[0-9]{4}-[0-9]{3}-[0-9]{3}(-([A-Z]{1,2}))?$").test(hin) ||
    new RegExp("^[0-9]{4}-[0-9]{3}-[0-9]{3}(\\s([A-Z]{1,2}))?$").test(hin) ||
    new RegExp("^[0-9]{4}\\s[0-9]{3}\\s[0-9]{3}(\\s([A-Z]{1,2}))?$").test(hin)
  );
}
