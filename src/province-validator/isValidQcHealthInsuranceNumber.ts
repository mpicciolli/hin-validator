/**
 * Quebec
 *
 * Health Insurance Number is unique. It contains the following information:
 * - The first 3 letters of the last name
 * - The first letter of the first name
 * - The 2 last digits of the date of birth
 * - Month of birth (to which 50 is added to indicate female sex)
 * - Date of birth
 * - The administrative code for use by RAMQ
 *
 * https://www.ramq.gouv.qc.ca/en/citizens/health-insurance/using-card
 *
 * @param hin
 * @returns
 */
export default function isValidQcHealthInsuranceNumber(hin: string): boolean {
  return (
    new RegExp(
      "^[A-Z]{4}[0-9]{2}(0[1-9]|1[012]|5[0-9]|6[012])(0[1-9]|1[0-9]|2[0-9]|3[01])[0-9]{2}$"
    ).test(hin) ||
    new RegExp(
      "^[A-Z]{4}\\s[0-9]{2}(0[1-9]|1[012]|5[0-9]|6[012])\\s(0[1-9]|1[0-9]|2[0-9]|3[01])[0-9]{2}$"
    ).test(hin)
  );
}
