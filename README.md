# Canadian Health Insurance Number Validator

Canadian Health Insurance Number Validator provides validation utilities for canadian health insurance data inputs. It is designed as a CommonJS module for use in Node.js, or the browser.

## Download

You can install `hin-validator` through `npm`.

```
npm install hin-validator
```

## Example

```javascript
import { isValidHealthInsuranceNumber } from "hin-validator";

const isValid = isValidHealthInsuranceNumber("00000-0000", "AB");

console.log(isValid); // true
```

## API

#### `isValidHealthInsuranceNumber(hin: string, provinceCode?: string): boolean`

```
Province codes:

    Alberta: AB
    BritishColumbia: BC
    Manitoba: MB
    NewBrunswick: NB
    NewfoundlandandLabrador: NL
    NorthwestTerritories: NT
    NovaScotia: NS
    Nunavut: NU
    Ontario: ON
    PrinceEdwardIsland: PE
    Quebec: QC
    Saskatchewan: SK
    Yukon: YT
```

## Sources

- https://www.canada.ca/en/health-canada/services/health-cards.html
- https://www.health.gov.on.ca/english/providers/pub/ohip/tech_specific/pdf/5_14.pdf
- https://www.gov.nl.ca/hcs/files/mcp-providers-pim-residents-of-other-provinces.pdf
