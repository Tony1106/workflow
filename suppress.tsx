export const SUPPRESSED_PROPERTY_IDS = [
  "14732000", // Test suppressed property, an alias property for 15344106
  "9999",
  "2723553",
  "2464144",
  "8803423",
  "1139758",
  "8929153",
  "985785",
  "6460966",
  "782095",
  "11031909",
  "5158863",
  "6549186",
  "7001434",
  "20176333",
  "8611233",
  "9446529",
  "6420569",
  "1540589",
  "10503879",
  "3553907",
  "9622209",
  // Your custom aliases here - do not delete
    "8",
    "8",
    "7",
    "6",
    "4",
    "4",
    "2",
    "2",
    "1",
    "900",
    "900",
    "900",
    "900",
    "90020",
    "90020",
    "90020",
    "90020",
    "9000",
    "9000",
    "900",
    "900",
    "900",
    "900",
    "900",
    "900",
    "900",
    "900",
    "900",
    "900",
    "900",
    "900",
    "900",
    "900",
    "900",
    "900",
    "900",
    "900",
    "99",
    " ",
    "333",
    "333",
    "12",
    "1122asd1",
];

export const isPropertySuppressed = (propertyId: string): boolean => SUPPRESSED_PROPERTY_IDS.includes(propertyId);
